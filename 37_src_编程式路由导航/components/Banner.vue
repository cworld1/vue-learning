<template>
  <div class="page-header">
    <h2>Vue Router Demo</h2>

    <div class="btn-group">
      <button class="btn btn-default" @click="back">
        <span class="glyphicon glyphicon-chevron-left"></span>
      </button>
      <button class="btn btn-default" @click="forward">
        <span class="glyphicon glyphicon-chevron-right"></span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  methods: {
    back() {
      this.$router.back();
    },
    forward() {
      this.$router.forward();
    },
  },
};
</script>

<style>
</style>