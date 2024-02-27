<script>
export default {
  name: "PokemonDetails",
  props: {
    found: Boolean,
    details: Object,
  },
};
</script>

<template>
  <div class="searched-pokemon d-flex flex-column align-items-center">
    <div class="image-box">
      <div
        class="pokemon-image d-flex justify-content-center align-items-center"
      >
        <img :src="details.sprites.front_shiny" alt="" />
      </div>
    </div>

    <div class="details-pokemon p-2">
      <strong v-if="found">No valid pokemon selected!</strong>
      <div v-else class="found-pokemon mt-3">
        <div>
          <strong>Name:</strong
          ><span class="text-uppercase"> {{ details.name }}</span>
        </div>
        <div><strong>Type:</strong><span></span></div>
        <div>
          <strong>Height:</strong><span> {{ details.height }}"</span>
        </div>
        <div>
          <strong>Weight:</strong><span> {{ details.weight }} lbs.</span>
        </div>
        <div class="stats mt-5">
          <h5>Stats</h5>
          <div
            v-for="value in details.stats"
            :key="value.id"
            class="d-flex justify-content-between align-items-center"
          >
            <span>{{ value.stat.name }}</span>
            <div class="bar">
              <div :style="`width: ${value.base_stat}px`" class="fill"></div>
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
