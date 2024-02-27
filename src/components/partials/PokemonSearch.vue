<script>
export default {
  name: "PokemonSearch",
};
</script>

<template>
  <div
    class="search-pokemon d-flex py-4 justify-content-between align-items-center"
  >
    <div class="h-100">
      <input type="text" placeholder="Search Pokémon" />
      <button class="btn btn-success ms-3" type="button">Button</button>
    </div>
    <button class="btn btn-success">Catch</button>
  </div>
</template>

<style lang="scss" scoped>
.search-pokemon {
  height: 80px;
}
</style>
