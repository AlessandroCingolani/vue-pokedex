<script>
import LoaderComponent from "./LoaderComponent.vue";
import { store } from "../../data/store";
export default {
  name: "PokemonDetails",
  components: {
    LoaderComponent,
  },
  data() {
    return {
      store,
      front: true,
    };
  },
  methods: {
    startInterval() {
      setInterval(() => {
        this.front = !this.front;
      }, 1500);
    },
  },

  computed: {
    pokemonList() {
      return store.searchedPokemon;
    },
  },
  mounted() {
    this.startInterval();
  },
};
</script>

<template>
  <div class="searched-pokemon d-flex flex-column align-items-center">
    <div class="image-box">
      <div
        class="pokemon-image d-flex justify-content-center align-items-center"
      >
        <div
          v-if="!store.isLoad"
          class="loader-container d-flex justify-content-center align-items-center"
        >
          <LoaderComponent />
        </div>
        <div v-else class="loaded d-flex justify-content-center">
          <img v-if="!store.found" src="/img/pokeball.png" alt="" />
          <div class="w-100 h-100 d-flex justify-content-center" v-else>
            <img
              v-if="this.front"
              :src="store.searchedPokemon.sprites.front_default"
              alt=""
            />
            <img
              v-else
              :src="store.searchedPokemon.sprites.back_default"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

    <div class="details-pokemon p-2">
      <strong>{{
        !store.isLoad
          ? "Loading..."
          : !store.found && store.isLoad
          ? "No valid pokemon selected!"
          : ""
      }}</strong>

      <div
        v-if="store.found"
        class="found-pokemon h-100 d-flex flex-column justify-content-around"
      >
        <div class="main-details">
          <div>
            <strong>Name:</strong
            ><span class="text-capitalize">
              {{ store.searchedPokemon.name }}</span
            >
          </div>
          <div>
            <strong>Type:</strong
            ><span
              class="pe-2"
              v-for="value in store.searchedPokemon.types"
              :key="value.id"
              >{{ value.type.name }}</span
            >
          </div>
          <div>
            <strong>Height:</strong
            ><span> {{ store.searchedPokemon.height }}"</span>
          </div>
          <div>
            <strong>Weight:</strong
            ><span> {{ store.searchedPokemon.weight }} lbs</span>
          </div>
        </div>
        <div class="stats pt-2">
          <strong>Stats</strong>
          <div
            v-for="value in store.searchedPokemon.stats"
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
      .loaded {
        width: 100%;
        height: 100%;
        img {
          max-width: 100%;
          max-height: 100%;
        }
      }
      width: 100%;
      height: 100%;
      border: 2px solid black;
      .loader-container {
        width: 60%;
        height: 60%;
      }
    }
  }
  .main-details {
    strong {
      padding-right: 8px;
    }
  }
  .details-pokemon {
    width: 100%;
    height: 60%;
    border: 2px solid black;
    border-radius: 10px;
    background-color: rgb(90, 177, 106);
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
