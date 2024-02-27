<script>
export default {
  name: "HeaderComponent",
};
</script>

<template>
  <header>
    <div class="logo">
      <img src="/img/pokedex-logo.png" alt="" />
    </div>
  </header>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
header {
  height: 80px;
  border-bottom: 3px solid black;
  .logo {
    text-align: center;
    img {
      width: 200px;
    }
  }
}
</style>
