<template>
  <div>
    <div>
      <b-modal id="modal-1" title="გთხოვთ დაადასტუროთ პროფილი">
        <p class="my-4"> ვერიფიკაციის ლინკი გამოიგზავნება <strong>{{GetUserEmail}}</strong> გთხოვთ შეამოწმთ ინბოქსი!</p>
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
     
    },


  
    
}
</script>


<style  lang="scss" >
.modal-title{
  font-size: 14px;
  font-family: 'mtavruli';
}

.modal-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 1rem 1rem;
    background-color: #ffc107;
    border-bottom: unset;
    border-top-left-radius: unset;
    border-top-right-radius: unset;
}

#modal-1___BV_modal_footer_{
    display: none !important;
}

.modal-body{
  p{
    font-size: 15px;
    font-family: 'mtavruli';
    strong{
      color: red;
    }
  }
}
  
</style>