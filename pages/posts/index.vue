<template>
    <section>
        <h1>all data comes here</h1>
        <div class="wrapper">
            <h1>{{loadedPosts}}</h1>
        </div>
    </section>
</template>


<script>
import {mapGetters} from "vuex"
export default {
    data(){
        return{
            posts:[]
        }
    },

    computed:{
        ...mapGetters(["loadedPosts"])
    }
}
</script>