<template>
  <div>
    <div class="line">
      <span class="img__background"></span>
    </div>
    <div class="space">
    </div>
  </div>
</template>

<script>
export default {
  name: 'backgroundLine',
  mounted() {
    const img = new Image()
    img.src = require('../assets/FactoryItems.png')
    img.onload = () => document.querySelector('.img__background').style.opacity = 1
  }
}
</script>

<style lang="scss" scoped>
.line {
  height: 150px;
  width: 100%;
  position: absolute;
  bottom: 98px;
  background: linear-gradient(to bottom right, rgba(0, 0, 0, 0) 49.3%, var(--akita-light) 50%);
}
.img__background {
  background: url("../assets/FactoryItems.png");
  background-size: 100%;
  position: absolute;
  z-index: 1;
  opacity: 0;
  right: 0;
  transition: .5s;
  bottom: -100px;
  width: 800px;
  height: 800px;
}
.space {
  width: 100%;
  height: 100px;
  position: absolute;
  z-index: 0;
  bottom: -1px;
  background: var(--akita-light);
}
@media (max-width: 1600px) {
  .img__background {
    bottom: -50px;
    width: 600px;
    height: 600px;
  }
}
@media (max-width: 1200px) {
  .img__background {
    width: 500px;
    height: 500px;
  }
}
@media (max-width: 1024px) {
  .img__background, .line, .space {
    display: none;
  }
}
</style>