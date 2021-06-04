<template>
  <router-link  v-img-lazy-load title="View" class="image-card pointer"  :to="{name: 'ImageDetail', params:{source:image}}"> 
    <img :alt="image" :data-url="image"  :data-errimage="'@/assets/logo.png'"  />
  </router-link>
</template>
<script>
export default {
  name: "ImageItem",
  props: ["image"],
};
</script>
<style lang="scss">
@import "@/assets/scss/image-styles.scss";
</style>