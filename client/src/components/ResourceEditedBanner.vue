<template>
  <v-banner
    class="light-green lighten-5"
    outlined
  >
    <v-avatar
      slot="icon"
      color="light-green lighten-4"
      size="36"
    >
      <v-icon
        color="green darken-1"
      >
        priority_high
      </v-icon>
    </v-avatar>
    <div class="text-body-2 light-green--text text--darken-3">
      Changes have been made to the original entry. <br>
      Ensure you click update to save changes.
    </div>
  </v-banner>
</template>

<script>
export default {
  name: "ResourceEditedBanner"
};
</script>

<style scoped>

</style>
