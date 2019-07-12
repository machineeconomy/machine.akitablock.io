<template>
  <header>
      <information/>
      <div class="header__button">
        <StandartButton/>
      </div>
  </header>
</template>
<script>
import Information from "./components/Information";
import StandartButton from "../StandartButton";
export default {
  name: "Header",
  components: {
    Information,
    StandartButton,
    
  }
};
</script>

<style>

header {
  padding: 0 2%;
}

.header__button {
  width: 100%;
  height: 210px;
  margin-left: 40px;
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