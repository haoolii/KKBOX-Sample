<template>
  <div class="home">
    <appHeader></appHeader>
    <rank></rank>
    <hotPlayList></hotPlayList>
    <dayList></dayList>
    <appFooter></appFooter>
  </div>
</template>
<script>
import hotPlayList from '../components/HotPlayList';
import rank from '../components/Rank.vue';
import dayList from '../components/DayList.vue';
import appHeader from '../views/Header.vue';
import appFooter from '../views/Footer.vue';
export default {
  components: { hotPlayList, dayList, rank, appHeader, appFooter },
  created() {
    this.$store.state.YTSongID = '';
  }
};
</script>
<style scoped>
.home {
  background-color: #080a1e;
}
</style>
