<template>
  <header class="header">
    <div class="contain">
      <Navigation />
      <Hero />
    </div>
    <BackgroundLine />
    <Logos />
  </header>
</template>

<script>
import Navigation from "../Navigation";
import Hero from "../Hero";
import Logos from "./components/Logos";
import BackgroundLine from "./components/BackgroundLine";

export default {
  name: "Header",
  components: { Navigation, Hero, Logos, BackgroundLine }
};
</script>

<style lang="scss">
.header {
  background: linear-gradient(
    to bottom right,
    var(--akita-primary) 50%,
    var(--akita-secondary) 85%
  );
  position: relative;
  min-height: 100vh;
  padding-bottom: 250px;
  margin-bottom: 100px;
  font-family: "Oswald", sans-serif;
  .title {
    font-size: 60px;
    font-weight: bold;
    color: var(--akita-light);
  }
  .text {
    color: var(--akita-light);
    position: relative;
    z-index: 2;
  }
}
</style>