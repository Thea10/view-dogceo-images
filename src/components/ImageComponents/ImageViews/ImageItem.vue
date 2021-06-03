<template>
  <img class="image-card" :alt="image" :src="image" />
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