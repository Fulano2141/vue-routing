<template>
  <div>
    <h1>The User Page</h1>
    <hr />
    <!-- <p>Loader ID: {{ id }}</p> -->
    <button @click="navigateToHome" class="btn btn-primary">Go to Home</button>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  // FOR DINAMIC VALUE ON URL
  //   data: () => ({
  //     id: String,
  //   }),
  //   created() {
  //     this.id = this.$route.params.id;
  //   },
  //   //   https://forum.vuejs.org/t/rerendering-component-on-route-param-change-recalling-created-hooks/9536
  //   watch: {
  //     $route: function (to, from) {
  //       this.id = to.params.id;
  //       console.log(from);
  //     },
  //   },
  //   END
  methods: {
    navigateToHome() {
      // this.$router.push({ path: "/" });
      // this.$router.push("/");
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style>
</style>