<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col">
          <h3>平台簡介</h3>
          <p>
            此作品以 Vue.js 為框架並使用 KKBOX API 和 YouTube Data API
            進行網站的呈現及音樂的播放，僅做為作品上的使用
          </p>
        </div>
        <div class="col">
          <h3>平台簡介</h3>
          <p>
            該專案是採用 KKBOX OPEN API + Vue Cli 3 所製作，僅限前端開發練習
            DEMO 用。
          </p>
        </div>
        <div class="col">
          <h3>作者</h3>
          <a href="https://github.com/KenZhi0919" target="_blank">
            陳健誌 KenZhi</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style scoped>
a {
  color: white;
}
a:hover {
  color: gray;
  text-decoration: none;
}
footer {
  background-color: #1f1057;
  color: white;
  height: 250px;
}

.col {
  width: 380px;
  padding-top: 50px;
}
h3 {
  font-size: 24px;
}
h3:after {
  display: block;
  height: 1.2px;
  background-color: white;
  content: ' ';
  width: 100%;
  margin: 18px 0;
}
</style>
