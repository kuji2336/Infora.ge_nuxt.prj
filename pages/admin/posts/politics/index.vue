<template>
<v-app>
  <div class="display-block">
    <div class="header header-costum-styles text-center mb-4">
      <div id="v-model-select" class="demo">
        <select class="select-costum-styles" v-model="selected">
          <option disabled value="">
            აირჩიეთ კატეგორია, სადაც გსურთ რომ დაამატოთ სიახლე
          </option>
          <option>main-news</option>
          <option>side-nav</option>
          <option>main-slider</option>
          <option>politics</option>
          <option>world-news</option>
          <option>zodiac</option>
          <option>art</option>
          <option>all</option>
        </select>
        <span>არჩეული კატეგორია: {{ selected }}</span>
      </div>
    </div>
    <input placeholder="სათაური, მოკლე აღწერით" v-model="title" />
    <input placeholder="მოკლე აღწერა" v-model="descr" />
    <div class="upload-photo">
      <div class="upladimage">
        <button @click="click1" class="choose-photo">აირჩიე სურათი</button>
        <input
          type="file"
          ref="input1"
          style="display: none"
          @change="previewImage"
          accept="image/*"
        />
        <div class="selected-image-box">
            <div class="wrapper-empty" v-if="!img1 ==''">
                <img :src="img1" title="selected image" alt="selected image">
            </div>
            <div class="wrapper-empty" v-else>
                <p>დაელოდე სურათის ჩატვირთვას</p>
            </div>
        </div>
      </div>
    </div>
    <h1 class="display-1">Rich-Text editor integration By Anamol Soman</h1>
   <Editor v-model="previewText"/>
   <div v-html="previewText"></div>
    <div class="send-psot-final">
        <button @click="onSave">send post</button>
    </div>
  </div>
</v-app>
</template>

<script>
import { storage } from "/plugins/firebase.js";
import { db } from "/plugins/firebase.js";
import Editor from "@/components/Editor"
export default {
  components: {
    Editor
  },
  data() {
    return {
      previewText: "",
      selected: "",
      img1: "",
      title: "",
      descr:"",
      previewText: "",
      imgUrl: "",
      published_at: new Date().toLocaleDateString(),
      date: new Date().getHours() + ":" + String(new Date().getMinutes()).padStart(2, "0"),
      id: Math.floor(Math.random() * 200000),
    };
  },
  methods: {
    /* save data */
    onSave() {
      db.collection(`${this.selected}`)
        .doc()
        .set({
          News: [
            {
              selected:this.selected,
              title: this.title,
              previewText: this.previewText,
              descr:this.descr,
              imgUrl: this.img1,
              published_at: this.published_at,
              date:this.date,
              id: this.id,
            },
          ],
        })
        .then(() => {
          alert(`სიახლე წარმატებით დაემატა კატეგორია ${this.selected} -ში`);
        });
    },

    click1() {
      this.$refs.input1.click();
    },

    previewImage(event) {
      this.uploadValue = 0;
      this.img1 = null;
      this.imageData = event.target.files[0];
      this.onUpload();
    },

    /* image upload */
    onUpload() {
      this.img1 = null;
      const storageRef = storage
        .ref(`${this.imageData.name}`)
        .put(this.imageData);
      storageRef.on(
        `state_changed`,
        (snapshot) => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            this.img1 = url;
            console.log(this.img1);
          });
        }
      );
    },
  },
};
</script>


<style scoped>
.display-block {
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  margin-top: 50px;
}

.choose-photo{
  margin-right: 70px;  
}

.selected-image-box{
    height: 300px;
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.upladimage{
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid grey;
    background-color: cadetblue; 
}

.selected-image-box img{
    height: 100%;
    width: 100%;
    object-fit: contain;
}
.display-block input {
  width: 100%;
  padding: 20px;
  margin-bottom: 30px;
}

.display-block button {
  max-width: 300px;
  width: 100%;
  padding: 10px;
  background-color: blue;
  color: #ffffff;
}

.header-costum-styles {
  padding: 30px;
  border: 1px solid grey;
  background-color: cadetblue;
  color: #ffffff;
}

.select-costum-styles {
  padding: 10px;
}

.send-psot-final{
    display: flex;
    justify-content: center;
    margin-top: 50px;
}
</style>
