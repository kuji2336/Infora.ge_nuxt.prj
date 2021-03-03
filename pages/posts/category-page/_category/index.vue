<template>
  <div class="container-fluid">
    <div class="header">
      <h1>{{setHeader}}</h1>
    </div>
    <div class="row">
      <div class="col-lg-9 col-md-12 col-12">
        <div>
             <div class="row">
          <div
            class="box-wrapper-main col-lg-4 col-xl-4 col-md-6 col-12"
            v-for="(post, index) in allPostsByCategor"
            :key="index"
          >
            <LazyHydrate when-visible>
              <nuxt-link
                :to="{
                  path: `/posts/news-detail/${post.newsId}`,
                  query: { category: post.news[0].selected },
                }"
              >
                <div
                  class="main-box__inner"
                  v-for="singlePost in post.news"
                  :key="singlePost.id"
                >
                  <div class="card">
                    <div class="img-wrapper">
                      <img
                        v-lazy-load
                        class="card-img-top"
                        :src="singlePost.imgUrl"
                        :alt="singlePost.title"
                        :title="singlePost.title"
                        width="640"
                        height="360"
                        
                      />
                      <div class="publication-date">
                        <p>{{ singlePost.published_at }}</p>
                      </div>
                    </div>
                    <div class="card-body">
                      <p class="card-title">{{ singlePost.title }}</p>
                      <div class="text-wrapper">
                        <p class="card-text" v-html="singlePost.descr"></p>
                      </div>
                      <div class="publication-hour d-flex align-items-center">
                        <div
                          class="publication-hr__inner d-flex align-items-center"
                        >
                          <p>
                            <img
                              src="~assets/img/clock-regular.svg"
                              alt="clock"
                              width="20"
                              height="20"
                            />
                          </p>
                          <p class="ml-2 mt-1">{{ singlePost.date }}</p>
                        </div>
                        <div
                          class="see-more-btn d-flex align-items-center justify-content-end"
                        >
                          <p class="mr-2 mt-1">წაიკითხე</p>
                          <p>
                            <img
                              data-not-lazy
                              src="~assets/img/arrow-right.svg"
                              alt="see-more"
                              width="20"
                              height="20"
                            />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </LazyHydrate>
          </div>
        </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-12 col-12">
        <LazyHydrate  when-visible>
           <asideContent></asideContent>
        </LazyHydrate>
      </div>
    </div>
  </div>
</template>



<script>
import { db } from "/plugins/firebase.js";
import LazyHydrate from "vue-lazy-hydration";
export default {
  components:{
      LazyHydrate,
      asideContent: () => import("@/components/mainPage/asideContent"),
  },
  data() {
    return {};
  },
  async asyncData(context) {
    var allPostsByCategory = [];
    let snapshot = await db.collection(context.query.category).get();
    snapshot.docs.map((doc) => {
      allPostsByCategory.push({ news: doc.data().News, newsId: doc.id });
    });

    return {
      allPostsByCategor: allPostsByCategory,
    };
  },

  computed:{
    setHeader(){
      if(this.$route.query.category === "world-news"){
        return "მსოფლიო ამბები"
      }
      else if(this.$route.query.category === "all"){
        return "სხვადასხვა"
      }
      else if(this.$route.query.category === "politics"){
        return "პოლიტიკა"
      }
      else if(this.$route.query.category === "art"){
        return "ხელოვნება"
      }
      else{
        return "ზოდიაქო"
      }
    }
  },

  
     head(){
      return {
        title:  this.setHeader,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.setHeader
          }
        ]
      }
    }
};

</script>




<style lang="scss" scoped>
.box-wrapper-main {
  margin-top: 35px;
  margin-bottom: 35px;
  transition: 0.3s;
}

.header {
  padding: 100px 5px;
}

.publication-date {
  position: absolute;
  top: 0;
  right: 0px;
  background-color: #ffffff;
  padding: 1px 3px;
  font-size: 13px;
  border-radius: 4px;
  border-bottom: 2px solid #ffc107;
}

.card-text {
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  line-height: 24px;
  font-family: "mtavruli";
}


.header{
  display: flex;
  justify-content: center;
  padding: 60px 10px;
  h1{
    font-family: "mtavruli"
  }
}

.card-body {
  padding: 20px 10px;
  .card-title {
    font-size: 18px;
    font-family: "rioni-bpg";
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 28px;
  }
}

.text-wrapper {
  padding: 10px 5px;
}

.box-news {
  padding-bottom: 20px;
}

.main-box__inner {
  box-shadow: 0 3px 6px rgb(32 121 118 / 20%);
  cursor: pointer;
  transition: 0.3s;
  background-color: #ffffff;
}

.main-box__inner:hover {
  transform: scale(1.05);
  transition: 0.3s;
}

.img-wrapper {
  height: 200px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}

.main-box__inner {
  height: 100%;
}

.card {
  border: unset;
}

.img-wrapper {
  position: relative;
}

.publication-hour {
  p {
    font-size: 14px;
  }
}

.see-more-btn {
  width: 100%;
  font-size: 14px;
  p:first-child {
    border-bottom: 2px solid #ffc107;
    font-family: "mtavruli";
  }
}
</style>