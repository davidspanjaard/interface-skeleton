package resolvers

import (
	"context"
)

type RootResolver struct{}

func NewRootResolver(ctx context.Context) (*RootResolver, error) {
	return &RootResolver{}, nil
}
