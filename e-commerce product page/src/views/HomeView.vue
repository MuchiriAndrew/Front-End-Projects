<template>
  <div class="home">
    <NavbarComp :quantity = 'quantity' :badgeQuantity = 'badgeQuantity' :subtractItem = 'subtractItem'  :addItem = 'addItem' :badgeDisplay = 'badgeDisplay' :showProduct = 'showProduct' :handleDelete = 'handleDelete' />
    <Body :quantity = 'quantity' :subtractItem = 'subtractItem'  :addItem = 'addItem' :addToCart = 'addToCart'/>
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
      badgeQuantity: null
    }
  },

  methods: {
    setVal() {
      localStorage.setItem('quantity', this.quantity)
    },

    getVal() {
      this.quantity = localStorage.getItem('quantity')
    },

    addToCart() {
      if(this.quantity > 0) {
        this.badgeQuantity = this.quantity
        this.badgeDisplay = true
        this.showProduct = true
      }
    },

    addItem() {

      if(this.badgeQuantity === this.quantity){
        this.quantity++
        this.badgeQuantity++
      }
      this.setVal()
    },
    subtractItem() {
      if(this.quantity > 0 && this.badgeQuantity > 0 && this.badgeQuantity === this.quantity){
        this.quantity--
        this.badgeQuantity--
        this.setVal()
      }

      if(this.badgeQuantity <= 0){
        this.badgeDisplay = false
        this.showProduct = false
      }
    },
    handleDelete(){
        this.showProduct = false
        this.quantity = 0
        this.badgeQuantity = 0
        this.badgeDisplay = false
        this.setVal()
    }
  },

  created: function() {
    this.getVal()
    this.badgeQuantity = this.quantity
    if(this.quantity <= 0  || this.badgeQuantity <= 0) {
      this.badgeDisplay = false
      this.showProduct = false
    }
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
