<script>
export default {
  name: "MyPokemon",
  props: {
    myList: Array,
  },
};
</script>

<template>
  <div class="my-list ps-2 pt-4">
    <h5>My pokémons</h5>
    <ul>
      <li
        @click="$emit('searchMyPokemon', pokemon)"
        v-for="(pokemon, index) in myList"
        :key="index"
      >
        {{ pokemon }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.my-list {
  width: 70%;
  height: 70%;
  background-color: white;
  border: 3px solid rgba(0, 0, 0, 0.757);
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      width: fit-content;
      &:hover {
        cursor: pointer;
        color: gray;
        scale: 1.1;
      }
    }
  }
}
</style>
