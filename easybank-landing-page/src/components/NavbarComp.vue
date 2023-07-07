<template>
  <nav class="navbar sticky-top navbar-expand-lg p-0">
  <div class="container-fluid p-0">

    <a class="navbar-brand" href="#">
        <img id="brand-img" class="img-fluid" src="../assets/logo.svg" alt="">
    </a>

    <img v-show="expanded"  @click="handleExpanded" class="d-lg-none me-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation" src="../assets/icon-close.svg" alt="menu">

    <img v-show="!expanded"  @click="handleExpanded" class="d-lg-none me-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation" src="../assets/icon-hamburger.svg" alt="menu">

    <div class="offcanvas offcanvas-top mx-auto" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-body p-0">
        <div class="navbar-nav flex-grow-1">

        <ul id="first-navs">
            <li id="nav_items"  class="nav-item dropdown">
            <a  id='nrml_links' href="#">Home</a>
            </li>

            <li id="nav_items" class="nav-item dropdown">
            <a  id="nrml_links" href="#" >About</a>
            </li>

          <li id="nav_items" class="nav-item">
            <a id="nrml_links" href="#">Contact</a>
          </li>

          <li id="nav_items" class="nav-item">
            <a  id="nrml_links" href="#">Blog</a>
          </li>

          <li id="nav_items" class="nav-item">
            <a  id="nrml_links" href="#">Careers</a>
          </li>
        </ul>
        

        <ul class="d-none d-lg-flex" id="second-navs">
            <a id="requestbtn" class="rounded-5" href="#">Request Invite</a>
        </ul>

        </div>
      </div>

    </div>
  </div>
</nav>
</template>

<script>
export default {
    data() {
        return {
            expanded:false
        }
    },

    methods: {
        handleExpanded(){
            this.expanded = !this.expanded
            console.log(this.expanded);
        }
    }
    

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;700&display=swap');
.navbar {
    height: 10vh;
    background-color: white;
    position: relative;
    z-index: 1000;
}

.container-fluid {
    height: 100%;
}

.navbar-nav {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.navbar-brand {
    width: 25%;
}

#brand-img {
    width: 40%;
}

.offcanvas-body {
    height: 10vh;
}

#first-navs {
    height: 100%;
    width: 40%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin: 0;
    text-decoration: none;
    list-style: none;
}

#nav_items {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

#second-navs {
    height: 100%;
    width: 20%;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;  
    margin: 0;
    padding: 0;
}

#requestbtn {
    height: 70%;
    width: 85%;
    background: linear-gradient(to right, hsl(136, 65%, 51%), hsl(192, 70%, 51%));
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Public Sans;
    font-weight: 700;
    font-size: 13px ;
    color:  white;
}

#requestbtn:hover{
    background: linear-gradient(to right, hsl(136, 100%, 63%), hsl(192, 100%, 61%));
    transition: 0.7s ease-in-out;
}

#nrml_links {
    height: 100%;
    text-decoration: none;
    font-family: Public Sans;
    font-size: 13px;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    color: hsl(233, 8%, 62%);
}

#nrml_links:hover {
     color: black;
    border-bottom: 4px solid hsl(136, 65%, 51%);
    transition: 0.3s ease-in-out;
}


@media only screen and (max-width: 992px){ 
.navbar-brand {
    width: 50%;
}

#brand-img {
    width: 80%;
}

#offcanvasNavbar {
    margin-top: 15vh;
    width: 90%;
    border-radius: 5px;
}
.navbar-nav {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: unset;
}

#first-navs {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin: 0;
    padding: 0;
}

#nav_items {
    display: flex;
    flex-direction: column;
    align-items: center;
    
}

#nrml_links {
    height: 100%;
    text-decoration: none;
    font-size: 13px;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
}

#nrml_links:hover {
    color:unset;
    border-bottom:unset;
    transition: unset;
}

.offcanvas-backdrop {
    display: none;
    visibility: hidden;
}

}

@media only screen and (max-width: 992px)and (orientation: landscape){ 
.navbar-brand {
    width: 25%;
}

#brand-img {
    width: 40%;
}

#offcanvasNavbar {
    margin-top: 15vh;
    width: 90%;
    border-radius: 5px;
}
.navbar-nav {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: unset;
}

#first-navs {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin: 0;
    padding: 0;
}

#nav_items {
    display: flex;
    flex-direction: column;
    align-items: center;
    
}

#nrml_links {
    height: 100%;
    text-decoration: none;
    font-size: 13px;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
}

.offcanvas-backdrop {
    display: none;
    visibility: hidden;
}

}

@media screen and (max-height:700px) and (max-width:768px) {

}


</style>