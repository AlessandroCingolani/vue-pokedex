<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import PokedexComponent from "./components/PokedexComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    PokedexComponent,
  },
};
</script>

<template>
  <HeaderComponent />
  <PokedexComponent />
</template>

<style lang="scss" scoped>
@use "../scss/main.scss";
</style>
