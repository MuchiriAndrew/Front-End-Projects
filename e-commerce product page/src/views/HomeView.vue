<template>
  <div class="home">
    <NavbarComp />
    <Body />
  </div>
</template>

<script>
import NavbarComp from '../components/NavbarComp.vue'
import Body from '../components/Body.vue'
export default {
  name: 'HomeView',
  components: {NavbarComp, Body}
}
</script>

<style scoped>
.home {
  height: 100vh;
  width: 80vw;
}

@media only screen and (max-width: 992px){ 
    .home{
      width: 100vw;
    }
}

</style>
