<template>
  <div class="home">
    <NavbarComp />
    <Intro />
    <WhyChoose />
    <Articles />
    <FooterComp />
  </div>
</template>

<script>
import NavbarComp from '../components/NavbarComp.vue'
import Intro from '../components/Intro.vue'
import WhyChoose from '../components/WhyChoose.vue'
import Articles from '../components/Articles.vue'
import FooterComp from '../components/FooterComp.vue'

export default {
  name: 'HomeView',
  components: {NavbarComp, Intro, WhyChoose, Articles, FooterComp}
}
</script>
