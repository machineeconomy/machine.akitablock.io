<template>
  <div class="liveDemo">
    <h2 class="title">Live Demo</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sed, nostrum est, consequuntur praesentium enim dolor blanditiis, nulla accusantium ducimus et illo culpa architecto numquam harum in labore! Dicta, voluptatem.</p>
    <OrderButton
      class="button"
      @ordered="ordered"
      name="test"
      :url="'http://localhost:3001'"
      :amount="0"
    >Pay robot</OrderButton>
    <b-row class="use_case">
      <user-wallet />
      <div class="machine_wrapper">
        <Machine url="http://localhost:3001" v-on:newActivity="addActivity" />
        <Activities :data="activities" />
      </div>
    </b-row>

    <b-row></b-row>
  </div>
</template>
<script>
import UserWallet from "./UserWallet";
import Machine from "./Machine";
import Activities from "./Activities";
import OrderButton from "./OrderButton.vue";

export default {
  name: "LiveDemo",
  components: { UserWallet, Machine, Activities, OrderButton },
  data() {
    return {
      activities: []
    };
  },
  methods: {
    addActivity(activity) {
      console.log("new machine", activity);
      this.activities.push(activity);
      //let container = this.$el.querySelector("#logger");
    },
    ordered(order) {
      console.log("type", order);
    }
  }
};
</script>

<style lang="scss" >
.liveDemo {
  padding: 0 2%;
  height: 700px;

  .use_case {
    padding: 0 auto;
    justify-content: center;
  }
}

@media (max-width: 1400px) {
}
@media (max-width: 900px) {
}
@media (max-width: 425px) {
}
</style>