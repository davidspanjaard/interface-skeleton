<template>
  <v-app>
    <header-container />
    <v-divider />
    <v-main>
      <router-view />
    </v-main>
    <v-divider />
    <feedback-snackbar />
  </v-app>
</template>

<script>
import FeedbackSnackbar from "./components/FeedbackSnackbar";
import {mapState} from "vuex";
import HeaderContainer from "./components/Header/HeaderContainer";

export default {
  name: "App",

  components: {
    HeaderContainer,
    FeedbackSnackbar,
  },
  computed: {
    ...mapState("global", [
      "popups"
    ])
  },

  watch: {
    popups: {
      deep: true,
      handler: function () {
      }
    }
  },

  mounted() {
    let darkMode = localStorage.getItem("darkMode");

    if (darkMode !== null) {
      if (darkMode === "true") {
        this.$vuetify.theme.dark = true;
      } else {
        this.$vuetify.theme.dark = false;
      }
    } else {
      this.$vuetify.theme.dark = false;
      localStorage.setItem("darkMode", "false");
    }
  }

};
</script>
