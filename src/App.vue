<template>
  <div>
    <div class="contain">
      <Navigation />
      <Hero />
    </div>

    <Machine />
    <LiveDemo />
    <Features />
    <UseCases />
    <Developers />
      <Footer />
  </div>
</template>

<script>
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Machine from "./components/Machine";
import LiveDemo from "./components/LiveDemo";
import Features from "./components/Features";
import UseCases from "./components/UseCases";
import Developers from "./components/Developers";
import Footer from "./components/Footer";
//import Machine from "http://localhost:3001/dist/my-custom.js"
export default {
  name: "app",
  components: {
    Navigation,
    Hero,
    Machine,
    LiveDemo,
    Features,
    UseCases,
    Developers,
    Footer
  }
};
</script>

<style>
:root {
  --akita-primary: #5f46b1;
  --akita-secondary: #eb479d;
  --akita-blue: #0bc5fe;
  --akita-dark: #3d4449;
  --akita-light: #efefef;
}
.contain {
  margin: auto;
  background-image: linear-gradient(
    to top left,
    #0bc5fe 0%,
    #5f46b1 50%,
    #ff2ea0 100%
  );
  background-size: cover;
  font-family: "Roboto", sans-serif;
  color: var(--akita-light);
}
ul {
  list-style: none;
  padding-left: 0;
}
.title {
  font-size: 70px;
  font-family: "Oswald", sans-serif;
  font-weight: bold;
}
.text {
  font-size: 22px;
  line-height: 1.3;
  margin-bottom: 0;
  font-family: "Roboto", sans-serif;
}
@media (max-width: 1500px) {
  .title {
    font-size: 64px;
  }
  .text {
    font-size: 20px;
  }
}
@media (max-width: 1250px) {
  .title {
    font-size: 54px;
  }
  .text {
    font-size: 18px;
  }
}
@media (max-width: 1250px) {
  .title {
    font-size: 48px;
  }
  .text {
    font-size: 18px;
  }
}
@media (max-width: 768px) {
  .title {
    font-size: 40px;
  }
  .text {
    font-size: 16px;
  }
}
@media (max-width: 425px) {
  .title {
    font-size: 32px;
  }
}
</style>
