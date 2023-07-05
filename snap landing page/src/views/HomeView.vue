<template>
  <div class="home">
    <NavbarComp />
    <BodyComp />
  </div>
</template>

<script>
import NavbarComp from '../components/NavbarComp.vue'
import BodyComp from '../components/BodyComp.vue'
export default {
  name: 'HomeView',
  components: {NavbarComp, BodyComp}
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
}
</style>
