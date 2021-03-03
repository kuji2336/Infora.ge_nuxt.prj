<template>
<div>
  <div class="swiper-container" v-swiper="swiperOption"  :loadtheme="false">
    <div class="swiper-wrapper">
        <div class="swiper-slide"  v-for="(sliderContent,index) in slider" :key="index">
          <div class="wrapper-cont">
            <nuxt-link :to="{path:`/posts/news-detail/${sliderContent.newsId}`, query: { category: sliderContent.news[0].selected }}">
                <div class="costum-card-sl" v-for="(sliderInnerContent,index) in sliderContent.news" :key="index">
                  <div class="costum-card__inner">
                     <div class="image-wrapper">
                        <img :src="sliderInnerContent.imgUrl" v-lazy-load  width="640" height="360" :title="sliderInnerContent.selected" :alt="sliderInnerContent.title">
                       <div class="publication-date">
                          <p>{{sliderInnerContent.published_at}}</p>
                        </div>
                     </div>
                     <div class="wrapper-card">
                        <div class="card-header-text">
                          <p>{{sliderInnerContent.title}}</p>
                        </div>
                        <div class="card-short-descr">
                          <p>{{sliderInnerContent.descr}}</p>
                        </div>
                        <div class="publication-hour d-flex align-items-center">
                           <div class="publication-hr__inner d-flex align-items-center">
                              <p><img src="~assets/img/clock-regular.svg" alt="clock" width="20" height="20"></p>
                              <p class="ml-2 mt-1">{{sliderInnerContent.date}}</p>
                           </div>
                           <div class="see-more-btn d-flex align-items-center justify-content-end">
                             <p class="mr-2 mt-1">წაიკითხე</p>
                             <p><img data-not-lazy src="~assets/img/arrow-right.svg" alt="see-more" width="20" height="20"></p>
                           </div>
                        </div>
                     </div>
                  </div>
                </div>
            </nuxt-link> 
          </div>
        </div>
    </div>
   
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</div>
</template>

<script>
import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import "swiper/css/swiper.css"
Vue.use(VueAwesomeSwiper);
import { directive } from "vue-awesome-swiper";

export default {
  name: "Slider",
  directives: {
    swiper: directive,
  },

  props:["slider"],
  data() {
    return {
      swiperOption: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            1024:{
              slidesPerView: 3,
              spaceBetween: 30
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 10
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            }
          }
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.swiper-slide{
   cursor: pointer; 
}


.swiper-button-prev {
  background-image: url("~assets/img/left.svg") !important;
  background-size: 21px;
  background-position: center;
}

.swiper-button-next {
  background-image: url("~assets/img/right.svg") !important;
  background-size: 21px;
  background-position: center;
}

.swiper-button-prev:after, .swiper-button-next:after {
  display: none !important;
}

.swiper-button-prev, .swiper-button-next{
  top: 33%;
}


.swiper-button-next{
  background-color: #ffc107;
  border-radius: 36px;
  padding: 20px;
}

.swiper-button-prev{
  background-color: #ffc107;
  border-radius: 36px;
  padding: 20px;
}


.swiper-slide img{
    height: 200px;
    width: 100%;
    object-fit: cover;
}

.costum-card__inner{
  min-height: 432px;
}


.costum-card-sl{
    box-shadow: 0 3px 6px rgb(32 121 118 / 20%);
    cursor: pointer;
    transition: 0.3s;
    background-color: #ffffff;
    max-width: 400px;
    width: 100%;
}


.image-wrapper{
  position: relative;
}


.see-more-btn{
  img{
    height: 30px;
    width: 30px;
  }
}

.publication-date{
    position: absolute;
    top: 0;
    right: 0;
    background-color: #ffffff;
    padding: 1px 3px;
    font-size: 13px;
    border-radius: 4px;
    border-bottom: 2px solid #ffc107;
}


.publication-hr__inner{
  img{
    height: 30px;
    width: 30px;
  }
}




.wrapper-card{
  padding: 15px;
}

.card-short-descr p {
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    /* fallback for moz */
    max-height: 96px;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    line-height: 24px;
    font-family: "mtavruli";
}


.card-short-descr {
    padding: 10px 0;
}

.card-header-text{
  border-left: 5px solid #ffc107;
}

.card-header-text p{
    margin-left: 10px;
    font-size: 18px;
    font-family: "rioni-bpg";
    white-space: normal;
    overflow: hidden;
    min-height: 56px;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 28px;
}
</style>