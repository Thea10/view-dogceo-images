<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
@import "@/assets/scss/global-style-variables.scss";
body {
  margin: 0;
  background: $background-darker;
}
#app {
  font-family: "Roboto", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $dark-color;
  height: 100vh;
  padding: 8px;
}

::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 10px !important;
  height: 10px !important;
}

::-webkit-scrollbar-thumb {
  border-radius: 7px !important;
  background: rgba(53, 47, 68, 0.6);
  box-shadow: 0 0 1px $shadow;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset $shadow;
  box-shadow: inset $shadow;
  border-radius: 10px;
}
</style>
