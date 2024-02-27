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

    <div class="details-pokemon p-2">
      <strong>No valid pokemon selected!</strong>
      <div class="found-pokemon">
        <div><strong>Name:</strong><span> Pikachu</span></div>
        <div><strong>Type:</strong><span> Eletric</span></div>
        <div><strong>Height:</strong><span> 4"</span></div>
        <div><strong>Weight:</strong><span> 60lbs.</span></div>
        <div class="stats mt-3">
          <h5>Stats</h5>
          <div class="d-flex justify-content-between align-items-center">
            <span>hp</span>
            <div class="bar">
              <div style="width: 50px" class="fill"></div>
            </div>
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <span>attack</span>
            <div class="bar">
              <div style="width: 40px" class="fill"></div>
            </div>
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <span>defense</span>
            <div class="bar">
              <div style="width: 20px" class="fill"></div>
            </div>
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <span>special attack</span>
            <div class="bar">
              <div style="width: 20px" class="fill"></div>
            </div>
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <span>special defense</span>
            <div class="bar">
              <div style="width: 20px" class="fill"></div>
            </div>
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <span>speed</span>
            <div class="bar">
              <div style="width: 20px" class="fill"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
    .stats {
      .bar {
        width: 255px;
        height: 8px;
        border: 1px solid gray;
        border-radius: 5px;
        position: relative;
        .fill {
          position: absolute;
          height: 100%;
          background-color: black;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
