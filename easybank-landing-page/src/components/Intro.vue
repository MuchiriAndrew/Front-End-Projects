<template>
  <div id="wrapper1" class="container-fluid text-center p-0">
  <div id="row1" class="row p-0 m-0">

        <div id="txtcol" class="col-lg-6   p-0">
            <div id="inner-div" class="">
                <h1 id="myh1">Next generation <br> digital banking</h1>
                <p id="introparagraph">Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing and much more</p>
               
                <div id="request_btn" class="rounded-5">
                    Request Invite
                </div>
                
            </div>
       
        </div>

        <div id="imgcol" class="col-lg-6 p-0">
        <img id="mockups" src="../assets/image-mockups.png" alt="">
        </div>
    
    </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

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

</style>