<template>
  <div class="holder">
    <ImageItem
      v-for="(image, index) of images"
      v-bind:key="index"
      :image="image"
    />
    <span class="end-text">You've reached the end</span>
  </div>
</template>
<script>
import ImageItem from "./ImageItem.vue";
export default {
  name: "ImageList",
  components: {
    ImageItem,
  },
  props: ["images"],
};
</script>
<style scoped lang="scss">
@import "@/assets/scss/image-styles.scss";
</style>
