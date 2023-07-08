<template>
  <div class="home bg-info">
    <NavbarComp />
  </div>
</template>

<script>
import NavbarComp from '../components/NavbarComp.vue'
export default {
  name: 'HomeView',
  components: {NavbarComp}
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
