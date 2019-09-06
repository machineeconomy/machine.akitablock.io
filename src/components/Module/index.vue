<template>
  <div id="module">
    <h2 class="title">The Module</h2>
    <b-card-group deck>
      <b-card
        class="a-card"
        title="Easy and fast setup"
        bg-variant="dark"
        text-variant="white"
      >
        <b-card-text>The Akita module can easily be installed and run on any device in a capseled container. You can configurate the machine with the Admin App in your favourite Web Browser.</b-card-text>
      </b-card>

      <b-card
        class="a-card"
        title="Modular service design"
        bg-variant="dark"
        text-variant="white"
      >
        <b-card-text>Machines' modular services can be integrated into existing systems and hardware or by adding external pc units that can be as small and cheap as a Raspberry Pi</b-card-text>
      </b-card>
      <b-card
        class="a-card"
        title="Open Source Software"
        bg-variant="dark"
        text-variant="white"
      >
        <b-card-text>We love open source - so the source code of the Akita machine is MIT lincesed an can bse used by everyone.</b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>
<script>

export default {
  name: "Machine",
  components: {}
};
</script>

<style>
.machine {
  padding: 0 2%;
  height: 700px;
}

@media (max-width: 1400px) {
}
@media (max-width: 900px) {
}
@media (max-width: 425px) {
}
</style>