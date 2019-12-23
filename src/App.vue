<template>
  <div id="app">
    <appNav></appNav>
    <router-view v-if="ready" />
  </div>
</template>
<script>
import appNav from './views/Nav.vue';

export default {
  components: { appNav },
  data() {
    return {
      ready: true
    };
  },
  methods: {
    start() {
      this.$router.push({ path: '' });
    }
  },
  created() {
    this.start();
  }
};
</script>
<style>
#app {
  background-color: #080a1e;
  overflow-x: hidden;
}
</style>
