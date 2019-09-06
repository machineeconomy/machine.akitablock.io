<template>
  <div id="features" class="contain section">
    <h2 class="title">Features</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sed, nostrum est, consequuntur praesentium enim dolor blanditiis, nulla accusantium ducimus et illo culpa architecto numquam harum in labore! Dicta, voluptatem.</p>
    <b-card-group deck>
      <b-card
        class="a-card"
        title="IOTA Wallet"
        bg-variant="dark"
        text-variant="white"
      >
        <b-card-text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea assumenda mollitia in doloribus animi nihil sed quia, perspiciatis voluptatibus corrupti quod, totam, alias sapiente? Temporibus soluta illo velit sequi autem!</b-card-text>
        <b-button href="#" variant="primary">Learn more</b-button>
      </b-card>

      <b-card
        class="a-card"
        title="automated processes"
        bg-variant="dark"
        text-variant="white"
      >
        <b-card-text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea assumenda mollitia in doloribus animi nihil sed quia, perspiciatis voluptatibus corrupti quod, totam, alias sapiente? Temporibus soluta illo velit sequi autem!</b-card-text>
        <b-button href="#" variant="primary">Learn more</b-button>
      </b-card>
      <b-card
        class="a-card"
        title="MAM Logging"
        bg-variant="dark"
        text-variant="white"
      >
        <b-card-text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea assumenda mollitia in doloribus animi nihil sed quia, perspiciatis voluptatibus corrupti quod, totam, alias sapiente? Temporibus soluta illo velit sequi autem!</b-card-text>
        <b-button href="#" variant="primary">Learn more</b-button>
      </b-card>
    </b-card-group>
  </div>
</template>
<script>
export default {
  name: "Features",
  components: {}
};
</script>

<style>
#features {
  height: 700px;
}

@media (max-width: 1400px) {
}
@media (max-width: 900px) {
}
@media (max-width: 425px) {
}
</style>