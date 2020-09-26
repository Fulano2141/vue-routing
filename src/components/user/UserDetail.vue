<template>
  <div>
    <h3>Some User Details</h3>
    <p>User loaded has ID: {{ $route.params.id }}</p>
    <!-- :to="'/user/' + $route.params.id + '/edit'" -->
    <router-link tag="button" class="btn btn-primary" :to="link">
      Edit User
    </router-link>
  </div>
</template>

<script>
export default {
  data: () => ({
    ids: "",
    link: {},
  }),
  created() {
    this.ids = this.$route.params.id;
    this.link = {
      name: "userEdit",
      params: { id: this.ids },
      query: { locale: "en", q: 100 },
      hash: "#data",
    };
  },
  // For authentication
  beforeRouterEnter(to, from, next) {
    let control = true;
    if (control) {
      next();
    } else {
      // Do this on authentication failed
      // next(false);
      next({ name: "home" });
    }

    // next(vm =>{
    //   vm.link;
    // });
  },
};
</script>

<style>
</style>