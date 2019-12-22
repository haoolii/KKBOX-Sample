<template>
  <div class="home">
    <appHeader></appHeader>
    <rank></rank>
    <playList></playList>
    <styleList></styleList>
    <appFooter></appFooter>
  </div>
</template>
<script>
import playList from "../components/PlayList";
import rank from "../components/Rank.vue";
import styleList from "../components/StyleList.vue";
import appHeader from "../views/Header.vue";
import appFooter from "../views/Footer.vue";
export default {
  components: { playList, styleList, rank, appHeader, appFooter }
};
</script>
<style  scoped>
.home {
  background-color: #080a1e;
}
</style>
