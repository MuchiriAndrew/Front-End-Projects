<template>
  <div id="wrapper4">

    <div id="footer-contents">
    <div class="row">

        <div id="col1" class="p-0 ">
        <div class="inner-footer-cont1">
            
                <div id="logo_socials" class="col">
                <img id="logo" src="../assets/logo-white.svg" alt="logo">
                <ul id="socials-list">
                    <li><img src="../assets/icon-facebook.svg" alt=""></li>
                    <li><img src="../assets/icon-youtube.svg" alt=""></li>
                    <li><img src="../assets/icon-twitter.svg" alt=""></li>
                    <li><img src="../assets/icon-pinterest.svg" alt=""></li>
                    <li><img src="../assets/icon-instagram.svg" alt=""></li>
                </ul>
                </div>

                <div id="sm-col"  class="col">
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Blog</li>
                </div>

                <div id="sm-col"  class="col">
                    <li>Careers</li>
                    <li>Support</li>
                    <li>Privacy Policy</li>
                </div>

        </div>
        </div>


        <div id="col2" class="p-0 ">
        <div class="inner-footer-cont2">
            <div id="content" class="">

                <div id="request_btn" class="rounded-5">
                    Request Invite
                </div>

                <span>&copy;Easybank. All Rights Reserved</span>
            </div>
        </div>
        </div>

    </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#wrapper4 {
    height: 30vh;
    background-color: hsl(233, 26%, 24%);
    display: flex;
    justify-content: center;
}

#footer-contents {
    height: 100%;
    width: 90%;
}

.row {
    height: 100%;
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
}

#col1 {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#col2 {
    width: 50%;
     height: 100%; 
     display: flex;  
     justify-content: center;
     align-items: center;
}

.inner-footer-cont1 {
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.inner-footer-cont2 {
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: end;
    align-items: center;
}


#logo_socials {
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

#socials-list {
    padding: 0;
    display: flex;
    flex-direction: row;
    list-style: none;
    align-items: center;
    justify-content: space-around;
}

#sm-col {
    list-style: none;
    height:70%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-family: Public Sans;
    color: hsl(220, 16%, 96%);
}

#content {
    width: 50%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: space-around;
}

#request_btn {
    height: 40px;
    width: 150px;
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

#request_btn:hover{
    background: linear-gradient(to right, hsl(136, 100%, 63%), hsl(192, 100%, 61%));
    transition: 0.7s ease-in-out;
    cursor: pointer;
}

span {
    font-family: Public Sans;
    color: hsl(233, 8%, 62%);
}

li {
    width: max-content;
}

li:hover {
    color:  hsl(136, 65%, 51%);
    cursor: pointer;
}

 @media only screen and (max-width: 992px){
#wrapper4 {
    height: 20vh;
    background-color: hsl(233, 26%, 24%);
}
span {
    font-family: Public Sans;
    color: hsl(233, 8%, 62%);
    font-size: 12px;
    width: 100%;
}
}

@media only screen and (max-width: 992px) and (max-height:500px){
#wrapper4{
    height: 50vh;
}
} 

@media only screen and (max-width: 767px){
#wrapper4 {
    height: 80vh;
    background-color: hsl(233, 26%, 24%);
    display: flex;
    justify-content: center;
    align-items: center;
}

#footer-contents {
    height: 90%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.row {
    height: 100%;
    width: 100%;
    flex-direction: column;
}

#col1 {
    width: 100%;
    height:80%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#col2 { 
    width: 100%;
    height: 20%;
    display: flex;  
    justify-content: star;
    align-items: center;
}

.inner-footer-cont1 {
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.inner-footer-cont2 {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content:center;
}

#logo_socials {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

#logo {
    width: 60%;
}

#socials-list {
    width: 80%;
    padding: 0;
    display: flex;
    flex-direction: row;
    list-style: none;
    align-items: center;
    justify-content: space-around;
}

#sm-col {
    list-style: none;
    height:37.5%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-family: Public Sans;
    color: hsl(220, 16%, 96%);
}

#content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}

#request_btn {
    height: 40px;
    width: 150px;
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

}

@media screen and (max-height:720px) and (max-width:768px) {
#wrapper4 {
    height: 90vh;
}
}


</style>