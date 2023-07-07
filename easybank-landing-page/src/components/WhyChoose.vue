<template>
  <div id="wrapper2">

    <div id="txt_div" class="">
      <h2>Why choose Easybank?</h2>
      <p id="top-p">We leverage Open Banking to turn your bank  acoount into your financial hub. Control your finances like never before</p>
    </div>

    <div id="grid-box" class=" container-fluid text-center">
        <div class="row">
            <div class="col">
              <div id="inner-col-div">
                <img id="col-images" src="../assets/icon-online.svg" alt="online banking">
             <h5>Online Banking</h5>
             <p id="dets">Our modern web and mobile application allows you to keep track of your finances wherever you are in the world.</p>

              </div>
             
            </div>

            <div class="col">

              <div id="inner-col-div">

                <img id="col-images" src="../assets/icon-budgeting.svg" alt="budgeting">
              <h5>Simple Budgeting</h5>
              <p id="dets">See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.</p>

              </div>
              
            </div>

            <div class="col ">
              <div id="inner-col-div">

                <img id="col-images" src="../assets/icon-onboarding.svg" alt="onboarding">
              <h5>Fast Onboarding</h5>
              <p id="dets">We don't do branches. Open your account in minutes online and start taking control of your finances right away.</p>

              </div>
              
            </div>

            <div class="col">
              <div id="inner-col-div">

                <img id="col-images" src="../assets/icon-api.svg" alt="api">
              <h5>Open API</h5>
              <p id="dets">Manage your savings, investments, pension and much more from one account. Tracking your money has never been easier.</p>

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

#wrapper2 {
    background-color: hsl(220, 16%, 96%);
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

#txt_div {
  width: 50%;
  display: flex;
  flex-direction: column;
  text-align: start;
  padding-left: 5%;
}

h2 {
  font-family: Public Sans;
  font-size: 36px;
  color: hsl(233, 26%, 24%);
}

#top-p {
  font-family: Public Sans;
  font-size: 15px;
  color: hsl(233, 8%, 62%);
}

#grid-box {
  height: 60%;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.row {
  width: 90%;
  margin: 0;
}

.col {
  width: 25%;
  height: 100%;
}

#inner-col-div {
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: start;
  text-align: start;
}

#col-images {
  width: max-content;
  margin-bottom: 10px;
}

h5 {
  font-family: Public Sans;
  color: hsl(233, 26%, 24%);
}

#dets {
  font-family: Public Sans;
  color: hsl(233, 8%, 62%);
  font-size: 16px;
}

@media only screen and (max-width: 992px){

  
#wrapper2 {
    background-color: hsl(220, 16%, 96%);
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

#txt_div {
  width: 60%;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-left: 5%;
}

h2 {
  font-family: Public Sans;
  font-size: 36px;
  color: hsl(233, 26%, 24%);
}

#top-p {
  font-family: Public Sans;
  font-size: 15px;
  color: hsl(233, 8%, 62%);
}

#grid-box {
  flex-grow: 0;
  height: unset;
  width: 100%;
  display: flex;
  flex-direction: unset;
  justify-content: center;
}

.row {
  height: 100%;
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: row;
}

.col {
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#inner-col-div {
  /* background: aqua; */
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  text-align: center;
}
#col-images {
  width: max-content;
  margin-bottom: 10px;
}

h5 {
  font-family: Public Sans;
  color: hsl(233, 26%, 24%);
}

#dets {
  font-family: Public Sans;
  color: hsl(233, 8%, 62%);
  font-size: 16px;
}



}

@media only screen and (max-width: 992px) and (max-height:500px){
#wrapper2{
    height: 110vh;
}
}


@media only screen and (max-width: 767px){

  
#wrapper2 {
    background-color: hsl(220, 16%, 96%);
    height: 130vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

#txt_div {
  width: 90%;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-left: 5%;
}

h2 {
  font-family: Public Sans;
  font-size: 36px;
  color: hsl(233, 26%, 24%);
}

#top-p {
  font-family: Public Sans;
  font-size: 15px;
  color: hsl(233, 8%, 62%);
}

#grid-box {
  flex-grow: 1;
  height: unset;
  width: 100%;
  display: flex;
  flex-direction: unset;
  justify-content: center;
}

.row {
  width: 90%;
  margin: 0;
  display: flex;
  flex-direction: column;
}

.col {
  width: 100%;
  height: 25%;
}

#inner-col-div {
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
}

#col-images {
  width: max-content;
  margin-bottom: 10px;
}

h5 {
  font-family: Public Sans;
  color: hsl(233, 26%, 24%);
}

#dets {
  font-family: Public Sans;
  color: hsl(233, 8%, 62%);
  font-size: 16px;
}



}

@media screen and (max-height:720px) and (max-width:768px) {
#wrapper2 {
    height: 200vh;
}
}






</style>