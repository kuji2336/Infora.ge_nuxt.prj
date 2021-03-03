<template>
  <div class="news-sliders">
    <div class="news-slider-wrapper">
      <div class="link-wrapper">
        <div class="d-flex justify-content-between slider-header-main">
          <strong class="slider-name-cat" title="main-news">პოლიტიკა</strong>
          <nuxt-link
            class="see-all"
            :to="{
              path: `/posts/category-page/${221}`,
              query: { category: 'politics' },
            }"
            >ნახე ყველა სიახლე</nuxt-link
          >
        </div>
        <LazyHydrate :when-visible="{ rootMargin: '100px' }">
          <newsContainer :slider="politicinfoResults" />
        </LazyHydrate>
      </div>
      <div class="link-wrapper">
        <div class="d-flex justify-content-between slider-header-main">
          <strong class="slider-name-cat" title="politics">სხვადასხვა</strong>
          <nuxt-link
            class="see-all"
            :to="{ path: `/posts/category-page/${123}`, query: { category: 'all' } }"
            >ნახე ყველა სიახლე</nuxt-link
          >
        </div>
        <LazyHydrate :when-visible="{ rootMargin: '100px' }">
          <newsContainer :slider="allinfoResults" />
        </LazyHydrate>
      </div>
      <div class="link-wrapper">
        <div class="d-flex justify-content-between slider-header-main">
          <strong class="slider-name-cat" title="art">მსოფლიო ამბები</strong>
          <nuxt-link
            class="see-all"
            :to="{
              path: `/posts/category-page/${223}`,
              query: { category: 'world-news' },
            }"
            >ნახე ყველა სიახლე</nuxt-link
          >
        </div>
         <LazyHydrate :when-visible="{ rootMargin: '100px' }">
           <newsContainer :slider="WorldinfoResults" />
         </LazyHydrate>
      </div>
      <div class="link-wrapper">
        <div class="d-flex justify-content-between slider-header-main">
          <strong class="slider-name-cat" title="art">ხელოვნება</strong>
          <nuxt-link
            class="see-all"
            :to="{ path: `/posts/category-page/${980}`, query: { category: 'art' } }"
            >ნახე ყველა სიახლე</nuxt-link
          >
        </div>
        <LazyHydrate :when-visible="{ rootMargin: '100px' }">
          <newsContainer :slider="artinfoResults" />
        </LazyHydrate>
      </div>
      <div class="link-wrapper">
        <div class="d-flex justify-content-between slider-header-main">
          <strong class="slider-name-cat" title="art">ზოდიაქო</strong>
          <nuxt-link
            class="see-all"
            :to="{ path: `/posts/category-page/${873}`, query: { category: 'zodiac' } }"
            >ნახე ყველა სიახლე</nuxt-link
          >
        </div>
       <LazyHydrate :when-visible="{ rootMargin: '100px' }">
         <newsContainer :slider="zodiacinfoResults" />
       </LazyHydrate>
      </div>
    </div>
  </div>
</template>




<script>
import { mapActions, mapGetters } from "vuex";
import LazyHydrate from "vue-lazy-hydration";
export default {
  components: {
    LazyHydrate,
    newsContainer: () => import("@/components/slots/newsContainer"),
  },
  async fetch() {
    this.getAllArtInfo(),
      this.getAllpoliticInfo(),
      this.getWorldNewsInfo(),
      this.getZodiacNewsInfo(),
      this.getANewsInfo();
  },

  methods: {
    ...mapActions("categoryArt", ["getAllArtInfo"]),
    ...mapActions("categoryPolitics", ["getAllpoliticInfo"]),
    ...mapActions("categoryWordNews", ["getWorldNewsInfo"]),
    ...mapActions("categoryZodiac", ["getZodiacNewsInfo"]),
    ...mapActions("allCategory", ["getANewsInfo"]),
  },

  computed: {
    ...mapGetters("categoryArt", ["artinfoResults"]),
    ...mapGetters("categoryPolitics", ["politicinfoResults"]),
    ...mapGetters("categoryWordNews", ["WorldinfoResults"]),
    ...mapGetters("categoryZodiac", ["zodiacinfoResults"]),
    ...mapGetters("allCategory", ["allinfoResults"]),
  },
};
</script>

<style lang="scss" scoped>
.main-news-header {
  padding: 60px;
  h1 {
    text-align: center;
    font-size: 25px;
    font-family: "mtavruli";
  }
}
.costum-row {
  display: flex;
}
.costum-background {
  background-color: #eaeaea;
  padding: 32px;
  border-radius: 30px;
  margin-left: 20px;
}

.link-wrapper {
  margin: 72px 0px;
}

.background--aside {
  padding: 10px;
  margin: unset;
}

.slider-header-main {
  padding: 60px 0;
  font-family: "mtavruli";
  align-items: center;
}

.slider-name-cat {
  font-size: 20px;
}

.see-all {
  font-size: 17px;
  background-color: #ffc107;
  padding: 10px 20px;
  border-radius: 33px;
  color: #000000;
  text-decoration: none;
}

@media (max-width: 768px) {
  .costum-background {
    background-color: unset;
    padding: unset;
    border-radius: unset;
    margin-left: unset;
  }

  .slider-header-main {
    padding: 45px 0;
  }

  .slider-header-main {
    a {
      font-size: 13px;
    }
  }

  .main-news-header {
    padding: 25px;
  }

  .main-news-header h1 {
    font-size: 18px;
    margin-bottom: unset;
  }
}
</style>