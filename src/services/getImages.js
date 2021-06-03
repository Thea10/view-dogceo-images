const axios = require("axios");
const API_URL = "https://dog.ceo/api";

async function getBreedList() {
  return axios.get(`${API_URL}/breeds/list/all`);
}

async function getRandom() {
  return axios.get(`${API_URL}/breeds/image/random/100`);
}

async function getByBreed(breed) {
  return axios.get(`${API_URL}/breed/${breed}/images`);
}

module.exports = {getBreedList, getRandom, getByBreed}
