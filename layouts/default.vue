<template>
  <div>
    <TheHeader />
    <confirm-Email />
    <Nuxt keep-alive />
  </div>
</template>


<script>
import confirmEmail from "@/components/confirmEmail"
import TheHeader from "@/components/Navigation/TheHeader"
export default {
  components:{
    TheHeader,
    confirmEmail
  },
}
</script>

<style>

p{
  padding: 0;
  margin: 0;
}


  a{
    color: #000000 !important;
    text-decoration: none !important;
  }


@media(max-width:576px){
  html, body{
  overflow-x: hidden;
}
}

</style>
