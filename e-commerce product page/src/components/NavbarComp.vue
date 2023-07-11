<template>
  <nav class="navbar navbar-expand-lg bg-white p-0">
  <div id="navbar-wrapper" class="container-fluid p-0">

    <div id="brand-div" class="">

    <img id="menu-toggler" class="d-lg-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation" src="../assets/icon-menu.svg" alt="menu">

    <a class="navbar-brand p-0" style="display:flex; justify-content:center; align-items:center" href="#">
        <img id="brand-img" class="img-fluid" src="../assets/logo.svg" alt="">
    </a>

    </div>

    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

      <div id="offcanvas" class="offcanvas-header justify-content-start">
        <img   data-bs-dismiss="offcanvas" id="closebtn" src="../assets/icon-close.svg" alt="close">
      </div>

      <div class="offcanvas-body p-0">
        <div class="navbar-nav">

        <ul id="first-navs" class="ps-3 p-xl-0 ">

            <li id="nav-item">
            <a  id='nrml_links' href="#">Collections</a>
            </li>

            <li id="nav-item">
            <a id="nrml_links" href="#" >Men</a>
            </li>

            <li id="nav-item">
                <a id="nrml_links" href="#">Women</a>
            </li>

            <li id="nav-item">
                <a id="nrml_links" href="#">About</a>
            </li>

            <li id="nav-item">
                <a id="nrml_links" href="#">Contact</a>
            </li>
        </ul>
    
        </div>
      </div>

    </div>

    <ul id="second-navs" class=" p-0 m-0">
            <div class="inner-second-nav ">
                <div class="cart-dropdown">
                    <img @click='handleClick' id="cart" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" src="../assets/icon-cart.svg" alt="cart">
                    <span v-show="badgeDisplay" id="howmuch" class="rounded-circle"> {{badgeQuantity}} </span>

                    <ul id="dropdown-menu" class="dropdown-menu p-0">

                        <div id="headertxt" class="ps-3">
                            <b>Cart</b>
                        </div>

                        <hr class="dropdown-divider">

                        <div v-if="showProduct" id="product" class="">

                            <div id="prod-dets" class="">
                                <img id="prod-img" src="../assets/image-product-1-thumbnail.jpg" alt="image">

                                <div id="prodtxt" class="">
                                    <span>Fall Limited Edition Sneakers</span>
                                    <span>$125 x {{badgeQuantity}} &nbsp;&nbsp; <b>${{125 * badgeQuantity}}</b></span>
                                </div>

                                <img @click='handleDelete' id="delete" src="../assets/icon-delete.svg" alt="delete">
                            </div>

                            <div class="rounded-3" id="checkout">
                                Checkout
                            </div>
                        </div>

                        <h6 v-else>Your cart is empty</h6>

                    </ul>
                </div>
                
                <img id="avatar" src="../assets/image-avatar.png" alt="avatar">
            </div>
    </ul>

  </div> 
</nav>
</template>

<script>
export default {

    props: ['quantity', 'badgeQuantity', 'addItem', 'subtractItem', 'badgeDisplay', 'showProduct', 'handleDelete'],
    
    data() {
        return{
            display:"none",
            expanded: false,
        }
    },

        methods: {
            setDisplay(){
                if(this.expanded === false){
                this.display = "flex"
                } else {
                    this.display = "none"
                }
            },
            handleClick(){
                this.expanded = !this.expanded
                this.setDisplay()
                console.log(this.display);
            },
        }
    }

</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap');
.navbar {
    height: 15vh;
    border-bottom: 1px solid hsl(230, 100%, 93%);
}

#navbar-wrapper {
    height: 100%;
}

#brand-div {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.offcanvas-body {
    height: 15vh;
}

.navbar-nav {
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
}

#first-navs {
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 70%;
    height: 100%;
}

#nav-item {
    height: 100%;
}

#nrml_links {
    text-decoration: none;
    font-family: Kumbh Sans;
    color: hsl(219, 9%, 45%);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

#nrml_links:hover {
    border-bottom: 4px solid  hsl(26, 100%, 55%) ;
    transition: 0.2s ease-in-out;
    color: black;
}


#second-navs {
    width: 15%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.inner-second-nav {
    height: 50%;
    width: 90%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

#avatar {
    height: 100%;
    border-radius: 50%;
}

#avatar:hover {
    border: 2px solid hsl(26, 100%, 55%);
    cursor: pointer;
}

#cart:hover {
    cursor: pointer;
    scale: 1.2;
    transition: 0.2s ease-in-out;
}

#dropdown-menu {
    background-color: white;
    left:75%;
    top:85%;
    width:350px; 
    height:250px;
    display: v-bind('display'); 
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
}

#dropdown-menu h6 {
    width: 100%;
    text-align: center;
}

#headertxt {
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    font-family: Kumbh Sans;
    font-size: 16px;
}

#product {
    width: 100%;
    height: 40%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}

#prod-dets {
    width: 90%;
    height: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

#prod-img{
    height: 70%;
}

#prodtxt {
    height: 100%;
    width: 60%;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    font-family: Kumbh Sans;
    justify-content: center;
    color: hsl(219, 9%, 45%);
}

b {
    color: black;
}
#delete {
    height: 20%;
}

#delete:hover {
    cursor: pointer;
    scale: 1.1;
}

#checkout {
    width: 90%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: hsl(26, 100%, 55%);
    color: white;
}

#checkout:hover {
    background-color: hsl(26, 100%, 65%); ;
    cursor: pointer;
}

#howmuch {
    font-family: Kumbh Sans;
    font-size: 50%;
    font-weight: 700;
    color: white;
    width: 12px;
    height: 12px;
    position: absolute;
    background-color: hsl(26, 100%, 55%);
}

#menu-toggler {
    width: 30px;
    height: 20px;
}

@media only screen and (max-width: 992px){ 

.navbar {
    height: 10vh;
    border-bottom: none;
}

#brand-div {
    height: 100%;
    width: 30%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}

#second-navs {
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.inner-second-nav {
    height: 50%;
    width: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
#offcanvasNavbar {
    width: 70%;
}

.navbar-nav {
    height: 40%;
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
}

#first-navs {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-around;
    width: 70%;
    height: 100%;
    margin: 0;
}

#nav-item {
    height: 100%;
}

#nrml_links {
    text-decoration: none;
    color: black;
    font-weight: 700;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

#nrml_links:hover {
    border-bottom: none;
}

#avatar:hover {
    border: none;
    cursor: pointer;
}

#cart:hover {
    scale: unset;
}

#checkout:hover {
    background-color: hsl(26, 100%, 55%);
}

#dropdown-menu {
    position: absolute; 
    left: 0; 
    top:0;
    margin-top: 11vh;
    right: 0; 
    margin-left: auto; 
    margin-right: auto; 
    width:90vw; 
    height:250px
}

}

@media only screen and (max-width: 992px) and (max-height:500px){
.navbar{
    height: 20vh;
}
}

@media only screen and (max-width: 768px){ 

.navbar {
    height: 10vh;
    border-bottom: none;
}

#brand-div {
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}

#second-navs {
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.inner-second-nav {
    height: 50%;
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

#offcanvasNavbar {
    width: 70%;
}

.navbar-nav {
    height: 40%;
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
}

#first-navs {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-around;
    width: 70%;
    height: 100%;
    margin: 0;
}

#nav-item {
    height: 100%;
}

#nrml_links {
    text-decoration: none;
    color: black;
    font-weight: 700;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
#dropdown-menu {
    position: absolute; 
    left: 0; 
    top:0;
    margin-top: 11vh;
    right: 0; 
    margin-left: auto; 
    margin-right: auto; 
    width:90vw; 
    height:250px
}

}

@media screen and (max-height:720px) and (max-width:768px) {
#brand-div {
    height: 100%;
    width: 70%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}

#second-navs {
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.inner-second-nav {
    height: 50%;
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
}


</style>