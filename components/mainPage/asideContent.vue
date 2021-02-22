<template>
 <aside>
   <div class="column">
   <div class="box-wrapper-main col-lg-12 col-xl-12 col-md-12 col-12" v-for="(post, index) in getFiltred" :key="index">
    <div
      class="main-box__inner"
      v-for="singlePost in post.news"
      :key="singlePost.id"
    >
      <div class="card">
        <div class="img-wrapper">
          <img
            class="card-img-top"
            :src="singlePost.imgUrl"
            :alt="singlePost.title"
            :title="singlePost.title"
          />
          <div class="publication-date">
             <p>{{singlePost.published_at}}</p>
          </div>
        </div>
        <div class="card-body">
          <h1 class="card-title">{{ singlePost.title }}</h1>
          <div class="text-wrapper">
            <p class="card-text">
              {{ singlePost.previewText }}
            </p>
          </div>
          <div class="publication-hour d-flex align-items-center">
            <div class="publication-hr__inner d-flex align-items-center">
               <p><img src="~assets/img/clock-regular.svg" alt="clock" width="20" height="20"></p>
               <p class="ml-2 mt-1">{{singlePost.date}}</p>
            </div>
            <div class="see-more-btn d-flex align-items-center justify-content-end">
              <p class="mr-2 mt-1">წაიკითხე</p>
              <p><img src="~assets/img/arrow-right.svg" alt="see-more" width="20" height="20"></p>
            </div>
          </div>
        </div>
      </div>
     </div>
   </div>
   </div>
 </aside>
</template>
 

<script>
import {db} from "/plugins/firebase.js";
export default {
    data(){
        return{
            loadedPosts:[],
        }
    },

/* get main news data */
  async fetch() {
    const snapshot = await db.collection("side-nav").get();
    return snapshot.docs.map((doc) =>
      this.loadedPosts.push({news: doc.data().News,newsId: doc.id})
    )
  },

computed: {
  /* sort main news data  by publication date*/
  getFiltred(){
     return this.loadedPosts.sort((a,b) => b.news[0].date.localeCompare(a.news[0].date))
    } 
  },
}
</script>


<style lang="scss" scoped>

.box-wrapper-main{
  margin-top: 35px;
  margin-bottom: 35px;
}

.publication-date{
    position: absolute;
    top: 0;
    right: 0px;
    font-family: 'firagoregular';
    background-color: #ffffff;
    padding: 1px 3px;
    font-size: 13px;
    border-radius: 4px;
    border-bottom: 2px solid #ffc107;
}

.card-text {
  font-family: "firagolight";
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  line-height: 24px;
}

.card-body {
  padding: 10px 10px;
  h1 {
    font-family: "firagoregular";
    font-size: 16px;
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
  padding: 5px 5px;
}

.card-title {
  margin-bottom: 5px;
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
  height: 150px;
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

.img-wrapper{
  position: relative;
}

.publication-hour{
  p{
    font-family: "firagoregular";
    font-size: 14px;
  }
}

.see-more-btn{
  width: 100%;
  font-size: 14px;
  p:first-child{
    border-bottom: 2px solid #ffc107;
  }
}

</style>