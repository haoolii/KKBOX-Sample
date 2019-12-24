<template>
  <section>
    <div class="title">
      <h2 class="font-weight-bold">最新歌曲</h2>
    </div>
    <div class>
      <hr />
      <div
        class="block"
        v-for="(item, index) in rankList"
        :key="item.description"
        @click="showYT(item.name)"
      >
        <div class="rank">
          <p>{{ index + 1 }}</p>
        </div>
        <div class="img-block">
          <img :src="item.album.images[0].url" alt />
        </div>
        <div class="description">
          <p class="songName">{{ item.name }}</p>
          <p class="artist">{{ item.album.artist.name }}</p>
        </div>
      </div>
    </div>
    <YTPlaySong v-if="this.$store.state.YTSongShow"></YTPlaySong>
  </section>
</template>
<script>
import YTPlaySong from '../components/YTPlaySong.vue';
export default {
  components: {
    YTPlaySong
  },
  data() {
    return {
      rankList: [],
      songTitle: '',
      songID: ''
    };
  },
  methods: {
    getYTData() {
      this.$http
        .get(
          `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDaIXsoNNqYiDFfKQeV_tgBsDbk4uSJSHg&part=snippet&type=video&q=${this.$store.state.YTSongTitle}`
        )
        .then(res => {
          this.$store.state.YTSongID = res.data.items[0].id.videoId;
        });
    },
    showYT(name) {
      this.$store.state.YTSongShow = true;
      this.$store.state.YTSongTitle = name;
      console.log(this.$store.state.YTSongTitle);
      this.getYTData();
    }
  },
  created() {
    this.$http
      .get(
        'https://api.kkbox.com/v1.1/charts/LZPhK2EyYzN15dU-PT/tracks?territory=TW&limit=5',
        this.$store.state.config
      )
      .then(res => {
        this.rankList = res.data.data;
      });
  }
};
</script>
<style scoped>
h2 {
  color: #e331a0;
}
.title {
  margin-bottom: 35px;
}
section {
  width: 1120px;
  margin: 40px auto 50px auto;
}
.block {
  width: 1120px;
  border-bottom: 1px solid #0fe7ef;
  height: 130px;
  display: inline-flex;
}
.block:hover {
  background-color: rgba(44, 44, 44, 0.356);
  cursor: pointer;
}
.rank {
  font-size: 40px;
  font-weight: bold;
  width: 85px;
  text-align: center;
  line-height: 130px;
  font-family: Kanit;
}
hr {
  border-top: 1px solid #0fe7ef;
  margin: 0;
}
.img-block img {
  height: 100px;
  margin-top: 15px;
  margin-right: 20px;
}
.description {
  padding-top: 27px;
}
.songName {
  font-weight: bold;
  font-size: 30px;
}
.artist {
  font-size: 20px;
}
p {
  margin-bottom: 0;
  color: white;
}
</style>
