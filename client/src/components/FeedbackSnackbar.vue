<template>
  <v-snackbar
    v-model="feedbackSnackbar.visible"
    :timeout="feedbackSnackbar.persistent ? -1 : 2000"
    :color="feedbackSnackbar.color"
  >
    {{ feedbackSnackbar.text }}
    <template v-slot:action="{ attrs }">
      <v-btn
        color="white"
        text
        v-bind="attrs"
        @click="close"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
  name: "FeedbackSnackbar",
  computed: {
    ...mapState("global", [
        "feedbackSnackbar"
    ])
  },
  methods: {
    ...mapActions("global",[
        "closeSnackbar"
    ]),
    close() {
      this.closeSnackbar();
    }
  }
};
</script>

<style scoped>

</style>
