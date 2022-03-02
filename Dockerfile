FROM golang:1.17-buster as gobuilder

# Use the official lightweight Node.js 14 image.
# https://hub.docker.com/_/node
FROM node:14-slim as nodebuilder

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure copying both package.json AND package-lock.json (when available).
# Copying this first prevents re-running npm install on every code change.
COPY client/package*.json ./

# Install production dependencies.
# If you add a package-lock.json, speed your build by switching to 'npm ci'.
# RUN npm ci --only=production
RUN npm install

# Copy local code to the container image.
COPY ./client ./

# Run the web service on container startup.
RUN npm run build

# We use the cloud-sdk image since it already has the correct git credential helper setup.
# Since go mod download uses git, this ensures that the go mod download finds our private repos stored on
# Google Source Repository
FROM gcr.io/google.com/cloudsdktool/cloud-sdk as builder
COPY --from=gobuilder /usr/local/go/ /usr/local/go/
ENV PATH="/usr/local/go/bin:${PATH}"

WORKDIR /app

# Retrieve application dependencies.
# This allows the container build to reuse cached dependencies.
# Expecting to copy go.mod and if present go.sum.
# The .${_ORG}.dev packages are all private.  Configure GOPRIVATE as per:
#   https://tip.golang.org/cmd/go/#hdr-Configuration_for_downloading_non_public_code
RUN go env -w GOPRIVATE=go.lib.alis.alis.exchange,go.protobuf.alis.alis.exchange,proto.alis.alis.exchange
COPY go.* ./
RUN go mod download

# Copy local code to the container image.
COPY . ./

# Build the binary.
RUN go build -mod=readonly -v -o server

# Use the official Debian slim image for a lean production container.
# https://hub.docker.com/_/debian
# https://docs.docker.com/develop/develop-images/multistage-build/#use-multi-stage-builds
FROM debian:buster-slim
RUN set -x && apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -y \
    ca-certificates && \
    rm -rf /var/lib/apt/lists/*

# Copy the binary to the production image from the builder stage.
COPY --from=builder /app/server /app/server
COPY --from=nodebuilder /usr/src/app/dist ./dist
COPY ./schema ./schema
# Run the web service on container startup.
CMD ["/app/server"]
