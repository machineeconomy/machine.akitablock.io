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

<style>
</style>