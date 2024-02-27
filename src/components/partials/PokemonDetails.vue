<script>
export default {
  name: "PokemonDetails",
};
</script>

<template>
  <div class="searched-pokemon d-flex flex-column align-items-center">
    <div class="image-box">
      <div
        class="pokemon-image d-flex justify-content-center align-items-center"
      >
        <img src="/img/pokeball.png" alt="" />
      </div>
    </div>
    <div class="details-pokemon"></div>
  </div>
</template>

<style lang="scss" scoped>
.searched-pokemon {
  height: calc(100% - 80px);
  .image-box {
    width: 70%;
    height: 35%;
    border: 20px solid gray;
    background-color: white;
    margin-bottom: 15px;
    .pokemon-image {
      width: 100%;
      height: 100%;
      border: 2px solid black;
      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
  .details-pokemon {
    width: 100%;
    height: 60%;
    border: 2px solid black;
    border-radius: 10px;
    background-color: rgb(44, 212, 13);
  }
}
</style>
