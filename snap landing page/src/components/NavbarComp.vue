<template>
  <nav class="navbar navbar-expand-lg fixed-top">
  <div class="container-fluid">

    <a class="navbar-brand" href="#">
        <img id="brand-img" class="img-fluid" src="../assets/logo.svg" alt="">
    </a>

      <img class="d-lg-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation" src="../assets/icon-menu.svg" alt="menu">
    
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

      <div class="offcanvas-header justify-content-end">
        <img  data-bs-dismiss="offcanvas" id="closebtn" src="../assets/icon-close-menu.svg" alt="close">
      </div>

      <div class="offcanvas-body p-0">
        <div class="navbar-nav flex-grow-1">
        <ul id="first-navs">
            <li id="nav_items"  class="nav-item dropdown">
                
            <a @click='handleClick' id='nrml_links' href="#"  >
              Features
              <img class="ms-2 ms-lg-1" v-if="showDropdown" src="../assets/icon-arrow-up.svg" alt="arrowdown">

               <img class="ms-2 ms-lg-1" v-else src="../assets/icon-arrow-down.svg" alt="arrowdown">
            </a>
            
            <ul v-show="showDropdown" id="dropdown1" class="dropdown-menu">
              <li id="drop-list">

                <div id="list-img">
                <img  src="../assets/icon-todo.svg" alt="todo">
                </div>
                
                <div id="list-txt">
                Todo List
                </div>
                
              </li>

              <li id="drop-list">

                <div id="list-img">
                    <img  src="../assets/icon-calendar.svg" alt="calendar">
                </div>
                <div id="list-txt">
                Calendar
                </div>
                
              </li>

              <li id="drop-list">

                <div id="list-img">
                    <img  src="../assets/icon-reminders.svg" alt="reminders">
                </div>
                
                <div id="list-txt">
                    Reminders
                </div>
                
              </li>

              <li id="drop-list">

                <div id="list-img">
                    <img  src="../assets/icon-planning.svg" alt="planning">
                </div>

                <div id="list-txt">
                     Planning
                </div>
            
              </li>
            </ul>
            </li>

            <li id="nav_items" class="nav-item dropdown">
            <a @click='handleClick2' id="nrml_links" href="#" >
              Company
             
              <img class="ms-2 ms-lg-1" v-if="showDropdown2" src="../assets/icon-arrow-up.svg" alt="arrowup">

               <img class="ms-2 ms-lg-1" v-else src="../assets/icon-arrow-down.svg" alt="arrowdown">
            </a>
            <ul v-show="showDropdown2" id="dropdown2" class="dropdown-menu">
              <li class="ms-3">
                History
              </li>

              <li class="ms-3">
                Our Team
              </li>

              <li class="ms-3">
                Blog
              </li>
            </ul>
            </li>

          <li class="nav-item">
            <a id="nrml_links" href="#">Careers</a>
          </li>

          <li class="nav-item">
            <a  id="nrml_links" href="#">About</a>
          </li>
        </ul>
        

        <ul id="second-navs">
            <a id="loginbtn" href="#">Login</a>
            <a id="registerbtn" class='rounded-3' href="#">Register</a>
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
            showDropdown : false,
            showDropdown2 : false
        }
    },

    methods: {
        handleClick(){
            this.showDropdown = !this.showDropdown

            if(this.showDropdown2){
                this.showDropdown2 = false
            }
        },
        handleClick2() {
            
             this.showDropdown2 = !this.showDropdown2
             console.log(this.showDropdown2);

             if(this.showDropdown){
                this.showDropdown = false
            }
        }

    }

}
</script>

<style>
.navbar {
    height: 10vh;
    background-color: hsl(0, 0%, 98%);
    position: unset;
}
.navbar-nav {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

#brand-img {
    width: 90%;
}

#first-navs {
    width: 40%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin: 0;
    text-decoration: none;
    list-style: none;
}

#dropdown1 {
    left: -70%;
    min-width: 0;
    width: 140px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 14px;
    font-family: Epilogue;
    align-items: center;
    margin-top: 10px;
    color: hsl(0, 0%, 41%);
    border: none;
    box-shadow: 0px 0px 30px hsl(0, 1%, 80%);
}

#drop-list:hover {
    color: black;
    cursor: pointer;
}
.ms-3:hover {
    color: black;
    cursor: pointer;
}

#drop-list {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 14px;

}

#list-img {
    width: 40%;
    display: flex;
    justify-content: center;
}

#list-txt {
    width: 60%;
    display: flex;
    justify-content:start;
}


#dropdown2 {
    min-width: 0;
    width: 100px;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 14px;
    font-family: Epilogue;
    margin-top: 10px;
    color: hsl(0, 0%, 41%);
    border: none;
    box-shadow: 0px 0px 30px hsl(0, 1%, 80%);
}


#second-navs {
    height: 100%;
    width: 25%;
    margin: 0;
    display: flex;
    justify-content:space-around;
    align-content: center;  
}

#loginbtn {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Epilogue;
    font-weight: 100;
    font-size: 14px ;
    color:  hsl(0, 0%, 41%);
}

#loginbtn:hover{
    color: black;
}

#registerbtn {
    height: 40px;
    width: 100px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid hsl(0, 0%, 41%);
    font-size: 14px ;
    font-family: Epilogue;
    font-weight: 100;
    color: hsl(0, 0%, 41%);
}

#registerbtn:hover{
    border: 1px solid black;
    color: black;
}

#nrml_links {
    text-decoration: none;
    font-size: 14px;
    font-style: normal;
    font-size: 13px;
    font-family: Epilogue;
    font-weight: 100;
    color: hsl(0, 0%, 41%);
}

#nrml_links:hover {
    color: black;
}


@media only screen and (max-width: 992px){ 

#offcanvasNavbar {
    width: 60%;
}

#nav_items {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-around;
    margin: 0;
}

#second-navs {
    height: 15%;
    width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-around;
    align-content: center;  
    padding: 0;
}

#dropdown1 {
    left: unset;
    min-width: 0;
    width: 140px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-top: 10px;
    border: none;
}

#dropdown2 {
    min-width: 0;
    width: 100px;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 14px;
    margin-top: 10px;
    border: none;
}

#registerbtn {
    height: 40px;
    width: 80%;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid hsl(0, 0%, 41%);
    font-size: 14px ;
    font-family: Epilogue;
    font-weight: 100;
    color: hsl(0, 0%, 41%);
}
#nrml_links:hover {
    color: hsl(0, 0%, 41%);
}
#dropdown1:hover {
    color: hsl(0, 0%, 41%);
}
#dropdown2:hover {
    color: hsl(0, 0%, 41%);
}
}

@media screen and (max-height:700px) and (max-width:768px) {
    #first-navs {
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-around;
    margin: 0;
}

#second-navs {
    height: 30%;
    width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-around;
    align-content: center;  
    padding: 0;
}
}


</style>