<template>
  <div class="container-fluid">
    <div class="main-news-header"><h1>სიახლეების ზოლი</h1></div>
    <div class="row">
      <div class="col-xl-9 col-lg-9 col-md-12 col-12">
        <main>
          <div class="costum-background">
            <LazyHydrate when-visible>
              <main-Slider keep-alive></main-Slider>
            </LazyHydrate>
            <LazyHydrate when-visible>
              <main-Content keep-alive></main-Content>
            </LazyHydrate>
            <newsSliderCont></newsSliderCont>
          </div>
        </main>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-12 col-12">
        <div class="costum-background background--aside">
          <LazyHydrate when-visible>
            <aside-Content></aside-Content>
          </LazyHydrate>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import mainContent from "@/components/mainPage/mainContent";
import LazyHydrate from "vue-lazy-hydration";
export default {
  components: {
    LazyHydrate,
    asideContent: () => import("@/components/mainPage/asideContent"),
    mainSlider: () => import("@/components/mainPage/mainSlider"),
    mainContent,
    newsSliderCont: () => import("@/components/mainPage/newsSliderCont"),
  },
  data() {
    return {
      resData: [],
    };
  },

  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 1500);
    });
  },



};
</script>


<style lang="scss" scoped>
.main-news-header {
  padding: 60px;
  h1 {
    text-align: center;
    font-size: 25px;
    font-family:"mtavruli"
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

.link-wrapper{
  margin: 72px 0px;
}

.background--aside {
  padding: 10px;
  margin: unset;
}

.slider-header-main{
    padding: 60px 0;
    font-family: 'mtavruli';
    align-items: center;
}

.slider-name-cat{
  font-size: 20px;
  
}

.see-all{
    font-size: 17px;
    background-color: #ffc107;
    padding: 10px 20px;
    border-radius: 33px;
    color:#000000;
    text-decoration: none;
}

@media (max-width: 768px) {
  .costum-background{
    background-color: unset;
    padding: unset;
    border-radius: unset;
    margin-left: unset;
  }

  .slider-header-main{
    padding: 45px 0;
}

  .slider-header-main{
    a{
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