<template>
  <div class="information">
    <div class="information__block">
      <h1 class="title information__title">
        <textAnimation
          :textList="['Machine-to-Machine M2M Payment.', 'IOTA Tangle.', 'AKITA prototypes.']"
          :writingSpeed="50"
          :changingSpeed="4000"
        />
      </h1>
      <h3
        class="subtitle information__title"
      >Prepare your machines for the Industry 4.0 and the machine economy.</h3>
    </div>
    <div class="information__block">
      <p
        class="text information__text"
      >The Akita IOTA Module brings an IOTA Wallet and automated processes triggered by payments.</p>
      <p
        class="text information__text"
      >Learn how it works, discover the features and run your own machine.</p>
    </div>
  </div>
</template>

<script>
import TextAnimation from './TextAnimation'

export default {
  name: 'Information',
  components: {
    TextAnimation
  },};
</script>

<style lang="scss">
.information {
  margin-top: 100px;
}
.information__block {
  margin-bottom: 20px;
}
.title {
  
}
.information__text,
.information__title {
  color: #fff;
}
@media (max-width: 800px) {
  .information {
    margin-top: 100px;
  }
}
</style>
