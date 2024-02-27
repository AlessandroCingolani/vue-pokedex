<script>
export default {
  name: "LoaderComponent",
};
</script>

<template>
  <img class="loader" src="/img/pokeball.png" alt="" />
</template>

<style lang="scss" scoped>
.pokemon-image {
  width: 100%;
  height: 100%;
  border: 2px solid black;
  @keyframes rotate {
    from {
      transform: rotate(0deg); /* Angolo di partenza (0 gradi) */
    }
    to {
      transform: rotate(
        360deg
      ); /* Angolo finale (360 gradi, una rotazione completa) */
    }
  }

  /* Applica l'animazione all'immagine */
  .loader {
    overflow: hidden;

    animation: rotate 2s linear infinite; /* Durata 2 secondi, tipo di animazione linear, ripetizione infinita */
  }
  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 50%;
  }
}
</style>
