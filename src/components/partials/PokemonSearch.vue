<script>
export default {
  name: "PokemonSearch",
  data() {
    return {
      toSearch: "",
    };
  },
  props: {
    catched: Boolean,
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
        class="ac_btn ms-3"
        type="button"
      >
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
    <button @click="$emit('catch')" class="ac_btn">
      {{ catched ? "remove" : "catch" }}
    </button>
  </div>
</template>

<style lang="scss" scoped>
.search-pokemon {
  height: 80px;
  .ac_btn {
    padding: 3px 10px;
    border: none;
    border-radius: 2px;
    &:hover {
      scale: 1.1;
    }
    &:active {
      background-color: rgb(44, 212, 13);
    }
  }
}
</style>
