<template>
  <div id="wrapper" class="container-fluid p-0">

  <div class="row m-0">

    <div id="text-col" class="col-lg-6  order-2 order-lg-1 p-0">
      <div class="inner-text-div ">
        <h1 id="myh1">Make <br class="d-none d-lg-block"> remote work</h1>
        <p id="myparagraph">Get your team in sync, no matter your location. Streamline processes,create team rituals, and watch productivity soar</p>

        <div id="learn" class="rounded-3">Learn More</div>

        <div id="clients">
            <img id="client-img" class="img-fluid me-lg-5" src="../assets/client-databiz.svg" alt="databiz">
            <img id="client-img" class="img-fluid me-lg-5" src="../assets/client-audiophile.svg" alt="audiophile">
            <img id="client-img" class="img-fluid me-lg-5" src="../assets/client-meet.svg" alt="meet">
            <img id="client-img" class="img-fluid" src="../assets/client-maker.svg" alt="maker">
        </div>

      </div>
    </div>


    <div id="image-col" class="col-lg-6 order-1 order-lg-2 p-0">
        <div id="inner-image-div">
            <img id="hero-image" class="d-none d-lg-block img-fluid" src="../assets/image-hero-desktop.png" alt="hero">
            <img id="hero-image" class="d-lg-none img-fluid" src="../assets/image-hero-mobile.png" alt="hero">
        </div>
     
    </div>


  </div>

</div>
</template>

<script>
export default {

}
</script>

<style>
#wrapper {
    width: 100%;
    height: 90vh;
    background-color: hsl(0, 0%, 98%);
}

.row {
    width: 100%;
    height: 100%;
}

#text-col {
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: end;
}

.inner-text-div {
    height: 85%;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: start;
}

#myh1 {
    margin-top: 20px;
    margin-bottom: 30px;
    font-family: Epilogue;
    font-weight: 700;
    font-size: 70px;
    color: black;
    line-height: 65px;
}

#myparagraph {
    width:70%;
    color: hsl(0, 0%, 41%);
    font-family: Epilogue;
    font-size: 14px;
    margin-bottom: 30px;
}

#learn {
    height: 45px;
    width: 130px;
    border: 1px solid black;
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Epilogue;
    font-size: 15px;
    font-weight: 500;
    margin-bottom: 70px;
}
#clients {
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
}

#client-img {
    width: 15%;
    height: 65%;
}

#learn:hover {
    background-color: hsl(0, 0%, 98%);
    color: black;
    cursor: pointer;
}



#image-col {
    height: 100%;
}

#inner-image-div {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#hero-image {
    height: 90%;
}


@media only screen and (max-width: 992px){ 

.row {
    width: 100%;
    height: 100%;
}

#image-col {
    height: 50%;
}
#inner-image-div {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#hero-image {
    height: 90%;
}

#text-col {
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: end;
}

.inner-text-div {
    height: 100%;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
}

#myh1 {
    font-family: Epilogue;
    font-weight: 700;
    font-size: 36px;
    line-height: unset;
     margin-top: unset;
    margin-bottom: unset;
}

#myparagraph {
    color: hsl(0, 0%, 41%);
    font-family: Epilogue;
    font-size: 18px;
    width:unset;
}

#learn {
    height: 50px;
    width: 150px;
    border: 1px solid black;
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: unset;
}
#clients {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

#client-img {
    width: 15%;
    height: 65%;
}

#learn:hover {
    background-color:black;
    color: white;
}

}

@media screen and (max-height:700px) and (max-width:768px) {
#wrapper {
    width: 100%;
    height: 120vh;
}
}
</style>