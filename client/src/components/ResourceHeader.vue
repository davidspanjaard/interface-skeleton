<template>
  <div
    class="section-header d-flex flex-row align-center"
    style="border-bottom: 1px solid #d2d2d2 !important;"
  >
    <slot name="pre-header-actions" />
    <div class="text-h6 ml-2 font-weight-light">
      <slot name="header" />
    </div>
    <div class="mt-1 ml-2">
      <slot name="actions" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ResourceHeader"
};
</script>

<style lang="scss" scoped>
.section-header{
  height: 48px;
  width: 100%;
}
</style>
