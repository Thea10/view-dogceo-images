<template>
  <div id="app">
    <SearchImages/>
   <router-view />

  </div>
</template>

<script>
import SearchImages from "./components/Search.vue";

export default {
  name: "App",
  components: {
    SearchImages
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/global-style-variables.scss";
body{
  margin: 0;
}
#app {
  font-family:"Roboto", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: $background-darker;
  color: $dark-color;
}
</style>
