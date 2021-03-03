<template>
    <div class="container">
      <div class="row">
        <div class="col-xl-8 col-lg-8 col-md-12 col-12">
           <div class="main-news-cont">
             <div class="main-news__inner" v-for="(singlepost,index) in singlePost.News" :key="index">
                 <div class="main-heder">
                   <h1>{{singlepost.title}}</h1>
                 </div>
                 <div class="image-container">
                   <img :src="singlepost.imgUrl" :title="singlepost.descr" :alt="singlepost.descr">
                 </div>
                 <div class="main-text">
                <div id="fb-root"></div>
                <div class="fb-share-button"  :data-href="`${'https://infora.media/'}${$route.fullPath}`"  data-layout="button_count"></div>
                <div class="fb-comments" :data-href="`${'https://infora.media/'}${$route.fullPath}`" data-width="" data-numposts="5"></div>
                   <div v-html="singlepost.previewText">
                   </div>
                 </div>
             </div>
           </div>
        </div> 
      </div>
    </div>
</template>


<script>
import {db} from "/plugins/firebase.js";
export default {
    data(){
        return{
            singlePost:[]
        }
    },
    async  asyncData(context) {
      var singlePos = [];
      let ref = db.collection(context.query.category).doc(context.params.id);
      await ref.get().then((snapshot) => {
        //DocSnapshot
        if (snapshot.exists) {
         singlePos = snapshot.data()
        } else {
          // snapshot.data() will be undefined in this case
          console.log("No such document!");
        }
      })

      return{
        singlePost:singlePos
      }
    },


    computed:{
      getTitle(){
        var description = null
         this.singlePost.News.forEach(element => {
         description = element.title
        });
        return description
      },

      getDescription(){
         var Fulldescription = null
         this.singlePost.News.forEach(element => {
         Fulldescription = element.descr
        });
        return Fulldescription
      },

      getImage(){
         var getImages = null
         this.singlePost.News.forEach(element => {
         getImages = element.imgUrl
        });
        return getImages
      }
    },


    methods:{
       facebookData(){
        setTimeout(()=>{
                         window.fbAsyncInit = function() {
      FB.init({
      appId      : '758826728391320',
      xfbml      : true,
      version    : 'v10.0'
      });
      FB.AppEvents.logPageView();
  };

    (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
     FB.XFBML.parse();
        },2000)
       }
    },

    mounted(){
       this.facebookData()
    },




     head() {
      return {
        title:  this.getTitle,
        script:[
          {
            src:"//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-603c030c25c53798"
          }
        ],
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.getTitle
          },
          {
          hid: 'og:title',
          property: 'og:title',
          content: this.getTitle
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.getDescription
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.getImage
        },
        ]
      }
    } 
}
</script>


<style lang="scss" scoped>
.main-heder{
  max-width: 100%;
  padding: 45px 0;
  h1{
    font-family: 'rioni-bpg';
    font-size: 28px;
    }
  }

.image-container{
  img{
    width: 100%;
    height: 100%;
    object-fit: contain;}
}

.main-text{
    padding: 30px 20px;
    font-family: 'mtavruli';
    box-shadow: 0 3px 6px rgb(32 121 118 / 20%);
    line-height: 35px;
    img{
      width: 100% !important;
    }
}





@media(max-width:768px){
  .main-heder h1{
    font-size: 16px;
}

.main-text{
    font-size: 14px;
}

.main-text img{
  width: 100% !important;
}
}
</style>