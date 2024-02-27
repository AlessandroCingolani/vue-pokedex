<script>
import MyPokemonVue from "./partials/MyPokemon.vue";
import PokemonDetailsVue from "./partials/PokemonDetails.vue";
import PokemonSearchVue from "./partials/PokemonSearch.vue";
import { store } from "../data/store";
import axios from "axios";

export default {
  name: "PokedexComponent",
  components: {
    PokemonDetailsVue,
    PokemonSearchVue,
    MyPokemonVue,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    getPokemon(params) {
      console.log(params);
      store.isLoad = false;
      store.found = false;
      store.searchedPokemon = [];
      axios
        .get(store.apiUrl + params)
        .then((response) => {
          console.log(response);
          store.searchedPokemon = response.data;
          store.found = true;
          store.isLoad = true;
        })
        .catch((error) => {
          store.searchedPokemon = [];
          store.found = false;
          store.isLoad = true;
          console.log(error + "no trovato");
        });
    },
  },
  mounted() {
    store.isLoad = true;
    store.searchedPokemon = [];
    store.found = false;
  },
};
</script>

<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col-6">
        <div class="ac_container w-100 h-100 px-5">
          <PokemonSearchVue @callApi="getPokemon" />
          <PokemonDetailsVue :notFound="store.found" />
        </div>
      </div>
      <div class="col-6 d-flex justify-content-center align-items-center">
        <MyPokemonVue />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  height: calc(100vh - 120px);
  border: 5px solid red;
  .row {
    height: 100%;
    background-color: rgb(169, 0, 15);
  }
}
</style>
