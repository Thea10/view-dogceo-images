<!-- have like a drop down to select breed to search for -->
<template>
  <div class="search-input-holder">
    <input
      type="text"
      placeholder="Search for dogs (by breeds)"
      v-model="searchText"
      :disabled="searchingPhotos"
      @click="showDrop()"
    />
    <button
      v-if="searchText"
      class="search-button pointer"
      @click="
        resetText();
        hideDrop();
      "
      :disabled="searchingPhotos"
    >
      Clear
    </button>

    <button
      class="search-button"
      @click="searchImage()"
      :disabled="!searchText || searchingPhotos"
    >
      Go
    </button>
    <div
      id="drop-down"
      v-if="loadBreeds !== undefined && loadBreeds.length > 0"
      class="search-drop"
    >
      <span class="drop-text"
        >You have some options, click on any to search for that breed</span
      >
      <button @click="hideDrop()" class="clear-button">Close</button>
      <hr />
      <ul>
        <li v-for="(breed, index) of loadBreeds" v-bind:key="index">
          <button
            @click="
              setText(breed);
              hideDrop();
            "
            class="clear-button"
          >
            {{ breed }}
          </button>
        </li>
        <!-- <li class="pointer">black</li>
        <li class="pointer">white</li>
        <li class="pointer">white</li> -->
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SearchImages",
  props: ["searchingPhotos"],
  data() {
    return {
      searchText: null,
    };
  },
  computed: {
    ...mapGetters({ loadBreeds: "getBreedList" }),
  },
  methods: {
    setText(text) {
      console.log(text);
      this.searchText = text;
    },
    resetText() {
      this.searchText = null;
    },
    showDrop() {
      document.getElementById("drop-down").classList.add("show");
    },
    hideDrop() {
      document.getElementById("drop-down").classList.remove("show");
    },

    searchImage() {
      this.$emit("searchImages", this.searchText);
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/search-styles.scss";
</style>
