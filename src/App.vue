<template>
  <div id="app">
    <appNav></appNav>

    <appHeader></appHeader>
    <rank></rank>
    <playList></playList>
    <styleList></styleList>
    <modal></modal>
    <appFooter></appFooter>
  </div>
</template>
<script>
import appNav from './views/Nav.vue';
import playList from './components/PlayList.vue';
import rank from './components/Rank.vue';
import styleList from './components/StyleList.vue';
import modal from './components/Modal.vue';
import appHeader from './views/Header.vue';
import appFooter from './views/Footer.vue';
export default {
  components: { modal, appNav, playList, styleList, rank, appHeader, appFooter }
};
</script>
<style>
#app {
  background-color: #080a1e;
}
</style>
