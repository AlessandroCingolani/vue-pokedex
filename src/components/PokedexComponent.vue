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
      catch: false,
    };
  },
  methods: {
    getPokemon(params) {
      if (params.length > 0) {
        this.catch = false;
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
            if (store.myPokemon.includes(store.searchedPokemon.name)) {
              this.catch = true;
              console.log(this.catch);
            }
          })
          .catch((error) => {
            store.searchedPokemon = [];
            store.found = false;
            store.isLoad = true;
            console.log(error + "no trovato");
          });
      }
    },
    catchRemove() {
      if (store.found) {
        if (!store.myPokemon.includes(store.searchedPokemon.name)) {
          store.myPokemon.push(store.searchedPokemon.name);
          this.catch = true;
        } else {
          let indice = store.myPokemon.indexOf(store.searchedPokemon.name);
          store.myPokemon.splice(indice, 1);
          this.catch = false;
        }
      }
      localStorage.setItem("myPokemons", JSON.stringify(store.myPokemon));
    },
  },
  mounted() {
    store.myPokemon = JSON.parse(localStorage.getItem("myPokemons"));
    store.isLoad = true;
    store.searchedPokemon = [];
    store.found = false;
  },
};
</script>

<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col-6 px-5">
        <PokemonSearchVue
          :catched="this.catch"
          @catch="catchRemove"
          @callApi="getPokemon"
        />
        <PokemonDetailsVue />
      </div>
      <div
        class="right-side col-6 d-flex justify-content-center align-items-center"
      >
        <MyPokemonVue @searchMyPokemon="getPokemon" :myList="store.myPokemon" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  height: calc(100vh - 120px);
  border: 20px solid rgb(165, 18, 23);
  border-radius: 20px;
  .row {
    height: 100%;
    background-color: rgb(200, 43, 46);
    border: 4px solid black;
    .right-side {
      border-left: 10px solid rgb(139, 17, 21);
    }
  }
}
</style>
