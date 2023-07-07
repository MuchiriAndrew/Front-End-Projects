<template>
<div id="wrapper3" class="">

    <div id="heading" class="">
        <h2>Latest Articles</h2>
    </div>

    
<div id="card-container" class="container-fluid ">
  <div class="row">
    <div class="col p-0">
      <div class="inner-col-div">

        <div class="card">
        <img src="../assets/image-currency.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <span>By Claire Robinson</span>
            <h5 class="card-title">Receive Money in any currency with no fees</h5>
            <p class="card-text">The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single...</p>
        </div>
        </div>

      </div>
    </div>

    <div class="col p-0">
      <div class="inner-col-div">
        <div class="card">
        <img src="../assets/image-restaurant.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <span>By Wilson Hutton</span>
            <h5 class="card-title">Treat yourself without worrying about money</h5>
            <p class="card-text">Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...</p>
        </div>
        </div>

      </div>
    </div>

    <div class="col p-0">
      <div class="inner-col-div">
        <div class="card">
        <img src="../assets/image-plane.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <span>By Wilson Hutton</span>
            <h5 class="card-title">Take your Easybank card wherever you go</h5>
            <p class="card-text">We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you...</p>
        </div>
        </div>

      </div>
    </div>

    <div class="col p-0">
      <div class="inner-col-div">
        <div class="card">
        <img src="../assets/image-confetti.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <span>By Claire Robinson</span>
            <h5 class="card-title">Our invite-only Beta accounts are now live!</h5>
            <p class="card-text">After a lot of hard work by the whole team, we're exited to launch our closed beta. It's easy to request an invite through the site...</p>
        </div>
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
#wrapper3 {
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: hsl(0, 0%, 98%);
}
#heading {
    width: 50%;
    display: flex;
    justify-content: start;
    padding-left: 5%;
}

#card-container {
  height: 80%;
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
  display: flex;
  justify-content: center;
}

.inner-col-div {
    width: 90%;
    height: 95%;
}

.card {
    width: 100%;
    height: 100%;
    text-align: start;
    border: none;
}

.card:hover {
  cursor: pointer;
}

.card-img-top {
    height: 45%;
}
.card-body {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

span {
    font-family: Public Sans;
    font-size: 12px;
    color: hsl(233, 8%, 62%);
}

h5 {
    font-family: Public Sans;
}

h5:hover {
    color:  hsl(136, 65%, 51%);
}

p {
    font-family: Public Sans;
    font-size: 14px;
    color: hsl(233, 8%, 62%);
}

@media only screen and (max-width: 992px){
#wrapper3 {
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
#heading {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-left: 0;
}

#card-container {
  width: 100%;
  height: 90%;
  display: flex;
  flex-grow: 0;
  justify-content: center;
  align-items: center;
}

.row {
  height: 100%;
  width: 90%;
  margin: 0;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
  justify-content: space-around;
  align-items: center;
}

.col {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}

.inner-col-div {
    width: 90%;
    height: 95%;
}

.card {
    width: 100%;
    height: 100%;
    text-align: start;
}
}


@media only screen and (max-width: 992px) and (max-height:500px){
#wrapper3{
    height: 225vh;
}
}


@media only screen and (max-width: 767px){

#wrapper3 {
    height: 180vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
#heading {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-left: 0;
    margin-top: 40px;
}

#card-container {
  width: 100%;
  height: 90%;
  display: flex;
  flex-grow: 0.7;
  justify-content: center;
  align-items: center;
}

.row {
  height: 100%;
  width: 90%;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.col {
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: center;
}

.inner-col-div {
    width: 90%;
    height: 95%;
}

.card {
    width: 100%;
    height: 100%;
    text-align: start;
}

}


@media screen and (max-height:720px) and (max-width:768px) {
#wrapper3 {
    height: 280vh;
}
}


</style>