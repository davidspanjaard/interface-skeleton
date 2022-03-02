<template>
  <div>
    <v-app-bar
      app
      clipped-left
      clipped-right
      color="white"
      elevation="0"
      style="border-bottom: 1px solid #d2d2d2 !important;"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title
        @click="$emit('routing-event', 'Resources')"
      >
        <v-icon
          large
          color="primary"
          class="mr-4"
        >
          <slot name="productIcon" />
        </v-icon>
        <slot name="productName" />
      </v-toolbar-title>

      <v-spacer />

      <slot name="search" />

      <v-spacer />

      <!--Select the relevant deployment-->
      <v-col
        cols="3"
        xl="1"
        class="mt-6"
      >
        <v-select
          disabled
          outlined
          dense
          :items="productDeployments"
        />
      </v-col>


      <!--Product specific navigation and auxiliary information-->
      <v-menu
        bottom
        left
        offset-y
        :close-product-navigation-on-click="closeProductNavigationMenu"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>help_outline</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(headerAction, index) in headerActions"
            :key="index"
          >
            <v-list-item-title @click="$emit('header-action-selected-event', headerAction.headerAction)">
              {{ headerAction.headerAction }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <!--More info and utilities-->
      <v-menu
          bottom
          left
          open-on-hover
          offset-y
          :close-product-navigation-on-click="closeProductNavigationMenu"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              icon
              v-bind="attrs"
              v-on="on"
          >
            <v-icon>more_vert</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title>
              <h4 class="text-h6 font-weight-light">
                built with
                <a
                    href="https://alis.exchange/"
                    target="_blank"
                    style="text-decoration: none; color: inherit;"
                >
                  alis<span style="color: #cf0000;">.</span>exchange
                </a>
              </h4>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <!--Inter-product navigation-->
      <v-btn
        icon
        @click="overlay = !overlay"
      >
        <v-icon>apps</v-icon>
      </v-btn>
    </v-app-bar>

    <!--Components external to the app bar. Possibly consider refactoring to individual Components -->
    <v-overlay
      :z-index="zIndex"
      :value="overlay"
      opacity="0.90"
    >
      <div class="d-flex">
        <div
          v-for="product in productList"
          :key="product.name"
          class="d-flex flex-column align-center"
        >
          <v-btn
            x-large
            icon
            class="ma-10"
            @click="
              overlay = false;
              $emit('product-selected-event', product.productName);
            "
          >
            <v-icon size="100">
              {{ product.productIcon }}
            </v-icon>
          </v-btn>
          <h2 class="text-center font-weight-light">
            {{ product.productName }}
          </h2>
        </div>
      </div>
      <div class="d-flex justify-center">
        <v-btn
          x-large
          icon
          class="ma-10"
          @click="overlay = false"
        >
          <v-icon size="50">
            close
          </v-icon>
        </v-btn>
      </div>
    </v-overlay>

    <v-navigation-drawer
      v-model="drawer"
      style="top: 64px;"
      fixed
      :height="windowHeight"
    >
      <v-list>
        <v-list-item
          link
          @click="
            drawer = false;
            $emit('router-event', 'Resources');
          "
        >
          <v-list-item-icon>
            <v-icon>account_tree</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Resources</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>

export default {
  name: "Header",
  props: {
    productList: {
      type: Array,
      required: true,
      default() {
        return [];
      }
    },
    headerActions: {
      type: Array,
      required: true,
      default() {
        return [];
      }
    },
    productDeployments: {
      type: Array,
      required: true,
      default() {
        return [];
      }
    },
  },
  data() {
    return {
      windowHeight: window.innerHeight,
      drawer: false,
      closeProductNavigationMenu: true,
      closeConsoleNavigationMenu: true,
      overlay: false,
      zIndex: 100,
    };
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.windowHeight = window.innerHeight;
    });
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("darkMode", String(this.$vuetify.theme.dark));
    },
  },

};
</script>

<style lang="scss" scoped>
.debug {
  border: solid red 1px;
}
</style>
