<template>
  <b-button variant="primary" path=".LiveDemo" position="start" @click="scroll">Learn more</b-button>
</template>

<script>
export default {
  name: "StandartButton",
  methods: {
    scroll(e) {
      e.preventDefault();
      console.log(e);
      let path = e.target.attributes.path.value,
        position = e.target.attributes.position.value;
      document
        .querySelector(path)
        .scrollIntoView({ block: position, behavior: "smooth" });
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  z-index: 10;

  font-size: 22px;
  background-color: var(--akita-primary);
  border-color: var(--akita-primary);

  &:hover {
    cursor: pointer;
    background-color: var(--akita-primary);
    border-color: var(--akita-seconary);
  }
}
</style>
