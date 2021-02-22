<template>
  <div class="container-fluid">
     <div class="main-news-header"><h1>მთავარი ამბები</h1></div>
    <div class="row">
      <div class=" col-xl-9 col-lg-9 col-md-12 col-12">
        <main>
          <div class="costum-background">
          <LazyHydrate when-visible>
           <main-Slider></main-Slider>
          </LazyHydrate>
          <LazyHydrate on-interaction="scroll">
           <main-Content></main-Content>
          </LazyHydrate>
          </div>
        </main>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-12 col-12">
         <div class="costum-background background--aside">
           <LazyHydrate ssr-only>
            <aside-Content></aside-Content>
           </LazyHydrate>
         </div>
      </div>
    </div>
  </div>
</template>



<script>
import LazyHydrate from 'vue-lazy-hydration';
export default {
  components:{
    LazyHydrate,
    asideContent: () => import('@/components/mainPage/asideContent'),
    mainSlider:() => import('@/components/mainPage/mainSlider'),
    mainContent:() => import('@/components/mainPage/mainContent')
  },
  data() {
    return {
      slickOptions: {
        slidesToShow: 3,
        arrows: true,
        dots: true,
      },
    };
  },
};
</script>


<style lang="scss" scoped>
.main-news-header {
  padding: 60px;
  h1 {
    text-align: center;
    font-family: "firagoregular";
    font-size: 25px;
  }
}
.costum-row {
  display: flex;
}
.costum-background{
    background-color: #eaeaea;
    padding: 32px;
    border-radius: 30px;
    margin-left: 20px;
}

.background--aside{
   padding: 10px;
   margin: unset;
}

@media(max-width:768px){
  .costum-background[data-v-2a183b29] {
     background-color: unset; 
     padding: unset; 
     border-radius: unset; 
     margin-left: unset;
}

.main-news-header{
    padding: 25px;
}

.main-news-header h1{
    font-size: 18px;
    margin-bottom: unset;
}
}
</style>