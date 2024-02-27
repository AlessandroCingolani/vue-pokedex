<script>
export default {
  name: "MyPokemon",
};
</script>

<template>
  <div class="my-list ps-2 pt-4">
    <h5>My pokémons</h5>
    <ul>
      <li>adsa</li>
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
      display: inline-block;
      &:hover {
        cursor: pointer;
        color: gray;
        scale: 1.1;
      }
    }
  }
}
</style>
