<template>
  <div class="logos">
    <ul class="list">
      <li class="item" v-for="logo in logos" :key="logo.href">
        <a class="img" target="_blank" :href="logo.href" :style="{backgroundImage: `url(${logo.url})`}"></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Logos',

  data: () => ({
    logos: [
      {
        url: require('../assets/AKITALogo.png'),
        href: "https://twitter.com/AkitaBlock"
      },
      {
        url: require('../assets/IOTALogo.png'),
        href: "https://www.iota.org/"
      },
      {
        url: require('../assets/IOTAEcosystem.png'),
        href: "https://fund.iota.org/"
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.logos {
  position: absolute;
  top: 50px;
  right: 0px;
  z-index: 3;
}

.img {
  display: block;
  height: 70px;
  width: 200px;
  background-size: auto 40px;
  background-repeat: no-repeat;
  background-position: left center;
}

.item {
  &:nth-child(1) {
    .img {
      background-size: auto 75px;
      background-position: -15px center;
    }
  }

  &:nth-child(3) {
    .img {
      background-size: auto 50px;
    }
  }
}

@media (max-width: 900px) {
  .list {
    display: none;
  }
}
</style>