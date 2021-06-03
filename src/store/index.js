import Vue from "vue";
import Vuex from "vuex";
import { getBreedList, getByBreed, getRandom } from "../services/getImages";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dogImages: [],
    breedList: [],
  },
  getters: {
    getImages: (state) => state.dogImages,
    getBreedList: (state) => state.breedList,
  },
  mutations: {
    SET_BREED_LIST(state, payload) {
      state.breedList =  payload;
    },
    SET_IMAGES(state, payload) {
      state.dogImages = payload;
    },
  },
  actions: {
    async GET_BREED_LIST({ commit }) {
      let existingBreedList = sessionStorage.getItem(
        "view-dog-images-breed-list"
      );
      if (existingBreedList) {
        commit("SET_BREED_LIST", JSON.parse(existingBreedList));
      } else {
        try {
          const response = await getBreedList();
          commit("SET_BREED_LIST", Object.keys(response.data.message));
          sessionStorage.setItem(
            "view-dog-images-breed-list",
            JSON.stringify(Object.keys(response.data.message))
          );
        } catch (error) {
          return handleError(error);
        }
      }
    },
    async GET_IMAGES({ commit }) {
      let existingImages = sessionStorage.getItem("view-dog-images-existing");
      if (existingImages && existingImages.length > 0) {
        commit("SET_IMAGES", JSON.parse(existingImages));
      } else {
        try {
          const response = await getRandom();
          commit("SET_IMAGES", response.data.message);
          sessionStorage.setItem(
            "view-dog-images-existing",
            JSON.stringify(response.data.message)
          );
        } catch (error) {
          return handleError(error);
        }
      }
    },
    async SEARCH_IMAGES({ commit }, keyword) {
      try {
        const response = await getByBreed(keyword);
        commit("SET_IMAGES", response.data.message);
      } catch (error) {
        return handleError(error);
      }
    },
  },
  modules: {},
});

function handleError(error) {
  console.error(error);
  return Promise.reject(error);
}
