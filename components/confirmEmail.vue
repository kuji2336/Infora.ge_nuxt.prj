<template>
  <div>
    <div>
      <b-modal id="modal-1" title="BootstrapVue">
        <p class="my-4">ემაილ ვერიფიკაცია, ვერიფიკაციის ლინკი გამოიგზავნება{{GetUserEmail}} გთხოვთ გალინკოთ</p>
      </b-modal>
    </div>
  </div>
</template>


<script>
import {mapGetters} from "vuex"
import  firebase from "firebase/app";
export default {
    computed:{
        ...mapGetters(['GetUserEmail'])
    },

    methods:{
    }
    
}
</script>