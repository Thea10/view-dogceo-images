<template>
  <div>
    <SearchImages
      :searchingPhotos="searchingPhotos"
      @searchImages="imageSearch"
    />
    <Loader
      :errorMessage="errorMessage"
      v-if="initialLoading || searchingPhotos"
    />
    <ImageList v-else :images="loadImages" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import SearchImages from "@/components/Search.vue";
import Loader from "@/components/ImageComponents/ImageLoader.vue";
import ImageList from "@/components/ImageComponents/ImageViews/ImageList.vue";

export default {
  name: "Home",
  data() {
    return {
      initialLoading: false,
      searchingPhotos: false,
      retrievedPhotos: false,
      errorMessage: "",
    };
  },
  components: {
    SearchImages,
    Loader,
    ImageList,
  },
  computed: {
    ...mapGetters({ loadImages: "getImages" }),
  },
  methods: {
    ...mapActions({
      getBreeds: "GET_BREED_LIST",
      getImages: "GET_IMAGES",
      searchImages: "SEARCH_IMAGES",
    }),
    handleError(err) {
      this.errorMessage = err;
    },
    async imageSearch(text) {
      this.searchingPhotos = true;
      if (!text) {
        this.searchingPhotos = false;
        this.errorMessage = "Please enter a search term";
        setTimeout(() => {
          this.errorMessage = "";
        }, 3000);
        return;
      }
      await this.searchImages(text).then(
        () => {
          this.searchingPhotos = false;
          this.retrievedPhotos = true;
        },
        (err) => {
          this.handleError(err);
        }
      );
    },
  },
  async mounted() {
    this.initialLoading = true;
    await this.getImages().then((err) => {
      this.handleError(err);
    });

    await this.getBreeds().then(
      () => {
        this.initialLoading = false;
      },
      (err) => {
        this.handleError(err);
      }
    );
  },
};
</script>
