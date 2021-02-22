<template>
  <div>
    <TheHeader />
    <confirm-Email />
    <Nuxt keep-alive />
  </div>
</template>


<script>
import confirmEmail from "@/components/confirmEmail"
import TheHeader from "@/components/Navifation/TheHeader"
export default {
  components:{
    TheHeader,
    confirmEmail
  }
}
</script>

<style>
</style>
