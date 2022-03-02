<template>
  <v-footer
    color="white"
    padless
    app
    style="border-top: 1px solid #d2d2d2 !important; z-index: 100;"
  >
    <v-container>
      <v-row
        justify="center"
        class="text-center"
      >
        <v-col
          align-self="center"
          cols="10"
          class="pa-2"
        >
          <h4 class="text-body-2 font-weight-light">
            built with
            <a
              href="https://alis.exchange/"
              target="_blank"
              style="text-decoration: none; color: inherit;"
            >
              alis<span style="color: #cf0000;">.</span>exchange
            </a>
          </h4>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped></style>
