<template>
  <div class="img-detail">
    <router-link class="button-link" to="/">Home</router-link>
    <img :src="imageSource" class="detail-img" alt="imageSource" />
    <span>
      Source: <a :href="imageSource" target="_blank">{{ imageSource }}</a>
    </span>
  </div>
</template>

<script>
export default {
  name: "ImageDetail",
  data() {
    return {
      imageSource: this.$route.params.source,
    };
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/image-styles.scss";
</style>
