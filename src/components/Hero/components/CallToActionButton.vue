<template>
  <div class="mybtn">
    <span @click="scroll">Learn more</span>
  </div>
</template>

<script>
export default {
  methods: {
    scroll() {
        console.log("scroll")
      document
        .querySelector("#module")
        .scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }
};
</script>

<style lang="scss" scoped>
.mybtn {
  position: relative;
  color: var(--akita-primary);
  font-size: 22px;
  width: 250px;
  padding: 10px;
  text-align: center;
  background: var(--akita-light);
  border: 1px solid var(--akita-light);
  border-radius: 10px;
  cursor: pointer;
  transition: 0.4s;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 3;
  .triangle {
    height: 7px;
    border: 7px solid transparent;
    border-left: 15px solid var(--akita-primary);
    position: relative;
    top: 10px;
    left: 10px;
    transition: 0.4s;
  }
  &:hover {
    background: rgba(0, 0, 0, 0);
    color: var(--akita-light);
    transform: translate(3px, 3px);
    .triangle {
      border-left-color: var(--akita-light);
    }
  }
}
</style>