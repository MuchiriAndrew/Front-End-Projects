<template>
  <div class="home">
    <NavbarComp />
    <Intro />
    <WhyChoose />
    <Articles />
  </div>
</template>

<script>
import NavbarComp from '../components/NavbarComp.vue'
import Intro from '../components/Intro.vue'
import WhyChoose from '../components/WhyChoose.vue'
import Articles from '../components/Articles.vue'

export default {
  name: 'HomeView',
  components: {NavbarComp, Intro, WhyChoose, Articles}
}
</script>
