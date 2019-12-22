<template>
  <header>
    <div>
      <p>KKBox API Sample</p>
      <a href data-toggle="modal" data-target="#exampleModalCenter">立即試聽</a>

      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="title">
              <h5 class>立即試聽</h5>
            </div>

            <iframe src="https://widget.kkbox.com/v1/?id=DZrC8m29ciOFY2JAm3&type=playlist"></iframe>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>
<style scoped>
header {
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.75)),
    url("https://images.alphacoders.com/995/995676.jpg");
  height: 550px;
  background-size: cover;
  background-position: bottom;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  text-align: center;
}
div {
  margin: auto;
}
p {
  color: white;
  font-size: 70px;
  margin-bottom: 40px;
}
a {
  font-size: 18px;
  letter-spacing: 3px;
  border: solid;
  border-radius: 30px;
  padding: 12px 50px;
  background: linear-gradient(to bottom right, #7a3d96, #e331a0);

  color: white;
}
a:hover {
  color: white;
  text-decoration: none;
  background: linear-gradient(to bottom right, #009bdf, #009bdf);
}
.title {
  height: 50px;
}
h5 {
  line-height: 50px;
  color: white;
  letter-spacing: 2px;
}
.modal-content {
  width: auto;
  height: auto;
  background-color: #7a3d96;
}
iframe {
  width: 450px;
  border: 0;
}
</style>
