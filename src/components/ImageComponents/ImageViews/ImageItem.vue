<template>
  <router-link title="View" class="image-card pointer"  :to="{name: 'ImageDetail', params:{source:image}}"> 
    <img :alt="image" :src="image" />
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