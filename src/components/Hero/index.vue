<template>
  <header>
    <information />
    <div class="header__button">
      <CallToActionButton />
    </div>
  </header>
</template>
<script>
import Information from "./components/Information";
import CallToActionButton from "./components/CallToActionButton";

export default {
  name: "Header",
  components: {
    Information,
    CallToActionButton
  }
};
</script>

<style lang="scss" scoped>
header {
  padding: 0 2%;
}

.header__button {
  width: 100%;
  height: 210px;
  margin-top: 40px;
}

@media (max-width: 1400px) {
  .header__button {
    height: 140px;
  }
}
@media (max-width: 900px) {
  header {
    margin-bottom: 70px;
  }
}
@media (max-width: 425px) {
  .header__button {
    margin-left: 0px;
  }
}
</style>