<script>
import PokemonDetailsVue from "./partials/PokemonDetails.vue";
import PokemonSearchVue from "./partials/PokemonSearch.vue";

export default {
  name: "PokedexComponent",
  components: {
    PokemonDetailsVue,
    PokemonSearchVue,
  },
};
</script>

<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col-6">
        <div class="ac_container w-100 h-100 px-5">
          <PokemonSearchVue />
          <PokemonDetailsVue />
        </div>
      </div>
      <div class="col-6">My pokemon</div>
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
