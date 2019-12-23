<template>
  <div>
    <object type="text/html" :data="ytlink"></object>
  </div>
</template>
<script>
export default {
  data() {
    return {
      songID: ''
    };
  },
  methods: {},
  computed: {
    ytlink() {
      return `http://www.youtube.com/embed/${this.$store.state.YTSongID}?autoplay=1&theme=light`;
    }
  }
};
</script>
<style scoped>
object {
  height: 250px;
  width: 350px;
  position: fixed;
  bottom: 10px;
  right: 20px;
  z-index: 999;
  border-radius: 5px;
  opacity: 0.9;
}
</style>
