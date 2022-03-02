<template>
  <div
    class="section-header d-flex flex-row align-center px-8"
    style="border-bottom: 1px solid #d2d2d2 !important;"
  >
    <div class="text-h6 font-weight-light">
      <slot name="header" />
    </div>
    <v-spacer />
    <div class="mt-1 ml-2">
      <slot name="actions" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ResourceSidePanelHeader"
};
</script>

<style scoped>

</style>
