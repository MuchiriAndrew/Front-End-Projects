<template>
  <div id="wrapper1" class="container-fluid text-center p-0">
  <div id="row1" class="row p-0 m-0">

        <div id="txtcol" class="col-lg-6 p-0 order-2 order-lg-1">
            <div id="inner-div" class="">
                <h1 id="myh1">Next generation <br> digital banking</h1>
                <p id="introparagraph">Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing and much more</p>
               
                <div id="request_btn" class="rounded-5">
                    Request Invite
                </div>
                
            </div>
       
        </div>

        <div id="imgcol" class="col-lg-6 p-0 order-1 order-lg-2">
        <img id="mockups" src="../assets/image-mockups.png" alt="">
        </div>
    
    </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

#wrapper1 {
    height: 90vh;
    background-color:  hsl(0, 0%, 98%);
}

#row1{
    height: 100%;
    width: 100%;
}

#txtcol {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#imgcol {
    height: 100%;
    background-image: url(../assets/bg-intro-desktop.svg);
    background-size: 150% 150%;
    background-repeat: no-repeat;
    background-position-x: 10%;
    background-position-y: 75%;
}

#mockups {
    width: 100%;
    position: relative;
    left: 17%;
    bottom: 18%; 
}

#inner-div {
    width: 80%;
    height: 70%;
    text-align: start;
    display: flex;
    flex-direction: column;
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

#myh1 {
    font-family: Public Sans;
    font-size: 60px;
    color: hsl(233, 26%, 24%);
}

#introparagraph {
    font-family: Public Sans;
    font-size: 18px;
    color: hsl(233, 8%, 62%);

}

#request_btn:hover{
    background: linear-gradient(to right, hsl(136, 100%, 63%), hsl(192, 100%, 61%));
    transition: 0.7s ease-in-out;
    cursor: pointer;
}

/* tablets */
@media only screen and (max-width: 992px){
#wrapper1 {
    height: 90vh;
    background-color:  hsl(0, 0%, 98%);
}

#row1{
    height: 100%;
    width: 100%;
}

#txtcol {
    height: 50%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: start;
}

#imgcol {
    height: 50%;
    width: 100%;
    background-image: url(../assets/bg-intro-mobile.svg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: 10%;
    background-position-y: 75%;
}

#mockups {
    width: 70%;
    position: relative;
    left: 0%;
    bottom: 35%; 
}

#inner-div {
    width: 75%;
    height: 90%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}


#request_btn {
    height: 50px;
    width: 160px;
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

#myh1 {
    font-family: Public Sans;
    font-size: 48px;
}

#introparagraph {
    font-family: Public Sans;
    font-size: 24px;
    color: hsl(233, 8%, 62%);

}

#request_btn:hover{
    background: linear-gradient(to right, hsl(136, 100%, 63%), hsl(192, 100%, 61%));
    transition: 0.7s ease-in-out;
}
}

/* normal phones */
@media only screen and (max-width: 767px){

#wrapper1 {
    height: 90vh;
    background-color:  hsl(0, 0%, 98%);
}

#row1{
    height: 100%;
    width: 100%;
}

#txtcol {
    height: 50%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: start;
}

#imgcol {
    height: 50%;
    width: 100%;
    background-image: url(../assets/bg-intro-mobile.svg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: 10%;
    background-position-y: 75%;
}

#mockups {
    width: 100%;
    position: relative;
    left: 0%;
    bottom: 35%; 
}

#inner-div {
    width: 95%;
    height: 90%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}


#request_btn {
    height: 50px;
    width: 160px;
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

#myh1 {
    font-family: Public Sans;
    font-size: 48px;
}

#introparagraph {
    font-family: Public Sans;
    font-size: 18px;
    color: hsl(233, 8%, 62%);

}

#request_btn:hover{
    background: linear-gradient(to right, hsl(136, 100%, 63%), hsl(192, 100%, 61%));
    transition: 0.7s ease-in-out;
}
 }

/* normal phones landscape view */
@media only screen and (max-width: 992px) and (max-height:500px){
#wrapper1{
    height: 300vh;
}
}


 /* notes & folds */
@media screen and (max-height:720px) and (max-width:768px) {
#wrapper1 {
    height: 100vh;
}

#mockups {
    width: 65%;
    position: relative;
    left: 0%;
    bottom:20%; 
}
@media screen and (max-height:700px) and (max-width:768px) {
#wrapper1 {
    height: 105vh;
}

#myh1 {
    font-family: Public Sans;
    font-size: 42px;
}

#introparagraph {
    font-family: Public Sans;
    font-size: 16px;
    color: hsl(233, 8%, 62%);

}

@media screen and (max-height:700px) and (max-width:300px) {
#wrapper1 {
    height: 100vh;
    background-color:  hsl(0, 0%, 98%);
}
#myh1 {
    font-family: Public Sans;
    font-size: 30px;
}
#introparagraph {
    font-family: Public Sans;
    font-size: 16px;
    color: hsl(233, 8%, 62%);

}
#mockups {
    width: 100%;
    position: relative;
    left: 0%;
    bottom:20%; 
}
}

}
}

</style>