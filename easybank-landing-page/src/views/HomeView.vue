<template>
  <div class="home">
    <NavbarComp />
    <Intro />
    <WhyChoose />
  </div>
</template>

<script>
import NavbarComp from '../components/NavbarComp.vue'
import Intro from '../components/Intro.vue'
import WhyChoose from '../components/WhyChoose.vue'

export default {
  name: 'HomeView',
  components: {NavbarComp, Intro, WhyChoose}
}
</script>
