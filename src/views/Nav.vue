<template>
  <div class="nav">
    <nav class="navbar navbar-expand-lg w-100 navbar-dark ">
      <div class="container">
        <a href="" style="text-decoration:none">KKBox Sample</a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active"></li>
          </ul>
          <div class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="text"
              placeholder="請輸入關鍵字"
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
      apiData: []
    };
  }
};
</script>
<style scoped>
nav {
  background-color: #e331a0;
}
a {
  text-decoration: none;
  color: white;
  font-size: 23px;
}
a:hover {
  color: white;
}
</style>
