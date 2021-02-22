<template>
  <div class="mt-2 mb-5">
    <p v-if="$fetchState.pending">Fetching posts...</p>
    <p v-else-if="$fetchState.error">
      Error while fetching posts: {{ $fetchState.error.message }}
    </p>
    <div v-else>
      <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="0"
      controls
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
    <div v-for="(post, index) in sliderData" :key="index">
        <div class="slider-wrapper" v-for="singleNews in post.news" :key="singleNews.id">
        <b-carousel-slide :img-src="singleNews.imgUrl" :alt="singleNews.title" :title="singleNews.title">
          <div class="wrapper">
            <div class="wrapper__inner">
              <h2 class="main-slider-text">
                {{singleNews.title}}
               </h2>
            </div>
          </div>
          <div class="pub-time">
            <p>{{singleNews.published_at}}</p>
          </div>
        </b-carousel-slide>
        </div>
      </div>
    </b-carousel>
    </div>
  </div>
</template>
<script>
  import {db} from "/plugins/firebase.js"
  export default {
    data() {
      return {
        slide: 0,
        sliding: null,
        sliderData:[],
      }
    },

  async fetch() {
    const snapshot = await db.collection("main-slider").get();
    return snapshot.docs.map((doc) =>
      this.sliderData.push({
        news: doc.data().News,
        newsId: doc.id
      })
    )
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    },
  }
</script>



<style lang="scss" scoped>

.carousel-item{
  height: 500px;
  img{
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
 .overlay-test {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #5c5959;
    opacity: .5;
}

.main-slider-text{
  font-family: "firagomedium";
  font-size: 25px;
  line-height: 30px;
}

.wrapper__inner{
  border-bottom: 5px solid #ffc107;
}

.slider-wrapper{
  position: relative;
}

.pub-time{
  margin-top: 15px;
  font-family: firagoregular;
}

</style>