<template>
  <div>
    <h3>Edit the User</h3>
    <p>Locale: {{ $route.query.locale }}</p>
    <p>Analytics: {{ $route.query.q }}</p>
    <hr />
    <!-- This doesn work -->
    <button class="btn btn-primary" @click="confirmed = !confirmed">
      Confirm
    </button>
    <!--  -->
    <div style="height: 700px"></div>
    <p id="data">Some extra data</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    confirmed: false,
  }),
  // But this method is called when you click GO TO HOME button
  beforeRouteLeave(to, from, next) {
    if (this.confirmed) {
      next();
    } else {
      if (confirm("Are you sure?")) {
        next();
      } else {
        next(false);
      }
    }
  },
};
</script>

<style>
</style>