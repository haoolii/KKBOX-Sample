<template>
  <div class="nav">
    <nav class="navbar navbar-expand-lg w-100 navbar-dark">
      <div class="container">
        <router-link class="sample" :to="{ name: 'Home' }"
          >KKBOX Sample</router-link
        >
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active"></li>
          </ul>
          <div class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="text"
              placeholder="請輸入關鍵字"
              v-model.trim="text"
              @keydown.enter="search"
            />
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      apiData: [],
      text: ''
    };
  },
  methods: {
    //跳入SearchResult頁面
    search() {
      this.$router.push({
        path: '/SearchResult',
        query: { text: this.text }
      });
      this.text = '';
    }
  }
};
</script>
<style scoped>
nav {
  background-color: #e331a0;
}
.sample {
  text-decoration: none;
  color: white;
  font-size: 23px;
}
</style>
