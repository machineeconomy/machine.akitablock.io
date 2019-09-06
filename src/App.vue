<template>
  <div class="app">
    <Header />
    <Module />
    <Features />
    <UseCases />
    <Developers />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Module from "./components/Module";
import LiveDemo from "./components/LiveDemo";
import Features from "./components/Features";
import UseCases from "./components/UseCases";
import Developers from "./components/Developers";
import Footer from "./components/Footer";
//import Machine from "http://localhost:3001/dist/my-custom.js"
export default {
  name: "app",
  components: {
    Header,
    Module,
    LiveDemo,
    Features,
    UseCases,
    Developers,
    Footer
  }
};
</script>

<style lang="scss">
:root {
  --akita-primary: #00b0f0;
  --akita-secondary: #00fb92;
  --akita-dark: #3b3838;
  --akita-light: #f2f2f2;
  --akita-blue: #00b0f0;
}
.app {
  background-color: var(--akita-light);
}
.contain {
  max-width: 1600px;
  padding: 0px 50px;
  margin: auto;
}

.section {
  .title {
    font-size: 60px;
    font-family: "Oswald", sans-serif;
    font-weight: bold;
    color: var(--akita-dark);
  }
  .text {
    font-size: 22px;
    line-height: 1.3;
    margin-bottom: 0;
    font-family: ocr-b-std, monospace;
    color: var(--akita-dark);
  }
}

.a-card {
  font-family: "Oswald", sans-serif;
  background: linear-gradient(
    to bottom right,
    var(--akita-primary) 50%,
    var(--akita-secondary) 85%
  );
}

ul {
  list-style: none;
  padding-left: 0;
}

@media (max-width: 1500px) {
  .title {
    font-size: 54px;
  }
  .text {
    font-size: 20px;
  }
}
@media (max-width: 1250px) {
  .title {
    font-size: 44px;
  }
  .text {
    font-size: 18px;
  }
}
@media (max-width: 1250px) {
  .title {
    font-size: 38px;
  }
  .text {
    font-size: 18px;
  }
}
@media (max-width: 768px) {
  .title {
    font-size: 30px;
  }
  .text {
    font-size: 16px;
  }
}
@media (max-width: 425px) {
  .title {
    font-size: 22px;
  }
  .contain {
    padding: 0 20px;
  }
}
</style>