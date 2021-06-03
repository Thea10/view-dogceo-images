<template>
  <div class="loader">
    <div
      v-for="loader of loaders"
      v-bind:key="loader"
      class="loading-images"
    ></div>

    <span v-if="!errorMessage" class="loading-text">Loading images...</span>
    <span v-if="errorMessage" class="loading-text"> {{ errorMessage }}</span>
  </div>
</template>

<script>
export default {
  name: "Loader",
  props: [
    "errorMessage"
  ],
  data() {
    return {
      loaders: 10,
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/image-styles.scss";
</style>
