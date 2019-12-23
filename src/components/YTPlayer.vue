<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-8">
          <iframe
            :src="ytlink"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          ></iframe>
        </div>
        <div class="col-4">
          <div class="">
            <h3>{{ this.$store.state.YTDayListTitle }}</h3>
          </div>
          <hr />
          <div
            class="scrolll"
            data-spy="scroll"
            overflow="scroll"
            data-target="#navbar-example3"
            data-offset="0"
          >
            <div
              class="block"
              v-for="item in dayList"
              :key="item.id"
              @click="getYTData(item.name)"
            >
              <div class="img">
                <img :src="item.album.images[0].url" alt="" />
              </div>
              <div class="description">
                <div class="songName">
                  <p>
                    {{ item.name }}
                  </p>
                </div>
                <div class="artist">
                  <p>{{ item.album.artist.name }}</p>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dayList: []
    };
  },
  methods: {
    getYTData(songName) {
      this.$http
        .get(
          `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDaIXsoNNqYiDFfKQeV_tgBsDbk4uSJSHg&part=snippet&type=video&q=${songName}`
        )
        .then(res => {
          this.$store.state.YTSongID = res.data.items[0].id.videoId;
        });
    }
  },
  computed: {
    ytlink() {
      return `http://www.youtube.com/embed/${this.$store.state.YTSongID}?autoplay=1&theme=light`;
    }
  },
  created() {
    this.$http
      .get(
        `https://api.kkbox.com/v1.1/charts/${this.$store.state.YTDayListID}/tracks?territory=TW&limit=20`,
        this.$store.state.config
      )
      .then(res => {
        console.log(res);
        this.dayList = res.data.data;
      });
  }
};
</script>
<style scoped>
.row {
  margin: 50px 0;
}
h2 {
  color: #e331a0;
}

.block {
  width: 100%;
  border-bottom: 1px solid #0fe7ef;
  height: 80px;
  display: inline-flex;
}
.block:hover {
  background-color: rgba(44, 44, 44, 0.356);
  cursor: pointer;
}
.img {
  width: 25%;
}
.description {
  width: 75%;
}
.songName {
  height: 60%;
  font-weight: bold;
  font-size: 20px;
  display: flex;
  align-items: center;
}
.artist {
  height: 40%;
  font-size: 15px;
  display: flex;
  align-items: center;
}
hr {
  border-top: 1px solid #0fe7ef;
  margin: 0;
}
img {
  width: 90%;
  height: 90%;
  margin: 3px 0 0 0;
}
p {
  color: white;
  margin: 0;
  padding: 0 0 0 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
h3 {
  color: white;
  font-weight: bold;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.col-4 {
  padding-left: 15px;
}
.scrolll {
  overflow: auto;
  height: 800px;
}
iframe {
  height: 100%;
  width: 100%;
}
div {
  padding: 0;
}
</style>
