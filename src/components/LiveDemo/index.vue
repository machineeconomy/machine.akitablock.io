<template>
  <div class="liveDemo">
    <h2 class="title">Live Demo</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sed, nostrum est, consequuntur praesentium enim dolor blanditiis, nulla accusantium ducimus et illo culpa architecto numquam harum in labore! Dicta, voluptatem.</p>
    <user-wallet />
  </div>
</template>
<script>
import UserWallet from "./UserWallet";

export default {
  name: "LiveDemo",
  components: {UserWallet}
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