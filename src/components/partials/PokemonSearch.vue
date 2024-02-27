<script>
export default {
  name: "PokemonSearch",
  data() {
    return {
      toSearch: "",
    };
  },
};
</script>

<template>
  <div
    class="search-pokemon d-flex py-4 justify-content-between align-items-center"
  >
    <div class="h-100">
      <input v-model="toSearch" type="text" placeholder="Search Pokémon" />
      <button
        @click="$emit('callApi', this.toSearch)"
        class="btn btn-success ms-3"
        type="button"
      >
        Button
      </button>
    </div>
    <button class="btn btn-success">Catch</button>
  </div>
</template>

<style lang="scss" scoped>
.search-pokemon {
  height: 80px;
}
</style>
