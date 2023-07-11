<template>
  <div class="home">
    <NavbarComp :quantity = 'quantity' :subtractItem = 'subtractItem'  :addItem = 'addItem' :badgeDisplay = 'badgeDisplay' :showProduct = 'showProduct' :handleDelete = 'handleDelete' />
    <Body :quantity = 'quantity' :subtractItem = 'subtractItem'  :addItem = 'addItem'/>
  </div>
</template>

<script>
import NavbarComp from '../components/NavbarComp.vue'
import Body from '../components/Body.vue'
export default {
  name: 'HomeView',
  components: {NavbarComp, Body},
    data() {
    return{
      quantity: 0,
      badgeDisplay: true,
      showProduct: true,
    }
  },

  methods: {
    setVal() {
      localStorage.setItem('quantity', this.quantity)
    },

    getVal() {
      this.quantity = localStorage.getItem('quantity')
    },

    addItem() {
      this.quantity++
      this.setVal()

      if(this.quantity === 0) {
        this.badgeDisplay = false
        this.showProduct = false
      } else {
        this.badgeDisplay = true
        this.showProduct = true
      }
    },
    subtractItem() {
      if(this.quantity > 0 ){
        this.quantity--
        this.setVal()
      }
      if(this.quantity === 0) {
        this.badgeDisplay = false
        this.showProduct = false
      } else {
        this.badgeDisplay = true
        this.showProduct = true
      }
    },
    handleDelete(){
        this.showProduct = false
        this.quantity = 0
        this.badgeDisplay = false
        this.setVal()
    }
  },

  created: function() {
    this.getVal()
    if(this.quantity <= 0) {
      this.badgeDisplay = false
      this.showProduct = false
    }
    console.log(this.badgeDisplay);
  },

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
