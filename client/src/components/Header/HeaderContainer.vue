<template>
  <!-- The purpose of this container is to facilitate all complex logic and data fetching for the header component. -->
  <Header
    :product-list="productList"
    :header-actions="headerActions"
    :product-deployments="productDeployments"
    class="debug"
    @product-selected-event="productSelectedEventHandler"
    @header-action-selected-event="headerActionSelectedEventHandler"
    @router-event="routerEventHandler"
  >
    <template v-slot:productName>
      {{ productName }}
    </template>
    <template v-slot:productIcon>
      {{ productIcon }}
    </template>
    <template v-slot:search />
  </Header>
</template>

<script>
import Header from "./Header";
export default {
  name: "HeaderContainer",
  components: {
    Header
  },
  data() {
    return {
      productName: "Portfolio Exchange",
      productIcon: "stacked_line_chart",
      //TODO Get product list from product list from OS API
      productList: [
        {
          productName: "Base",
          productIcon: "biotech",
          color: "#CF0000",
        },
        {
          productName: "Bridge",
          productIcon: "timeline",
          color: "",
        },
      ],
      //TODO Finalise headerActions for each product
      headerActions: [
        {headerAction: "Documentation"},
        {headerAction: "Tutorials "},
      ],
      //TODO Get product deployments from OS API
      productDeployments: [
        "alis-px-dev-wh2",
        "alis-px-prod-mml",
        "Rezco - Investment Team",
      ],
    };
  },
  methods: {
    // Handles all product selection events received from the header component.
    productSelectedEventHandler(productName) {
      console.log(productName);
    },
    // Handles all header action selection events from the header component.
    headerActionSelectedEventHandler(actionName) {
      console.log(actionName);
    },
    // Handles all routing events received from the header component.
    routerEventHandler(routeName) {
      this.$router.push(routeName);
    }
  }
};
</script>

<style scoped>
.debug {
  border: solid red 1px;
}
</style>
