<template>
    <div id="wrapper" class="container-fluid">
    <div class="row">

        <div id="product-images" class="col bg-warning p-0">
            <div id="inner-images-div" class="bg-primary">

                <div id="current-display">
                <img class="rounded-3" id="current-image" src="../assets/image-product-1.jpg" alt="">
                </div>

                <div id="thumbnails" class="bg-dark">
                    <img class="thumb rounded-3" src="../assets/image-product-1-thumbnail.jpg" alt="">
                    <img class="thumb rounded-3" src="../assets/image-product-2-thumbnail.jpg" alt="">
                    <img class="thumb rounded-3" src="../assets/image-product-3-thumbnail.jpg" alt="">
                    <img class="thumb rounded-3" src="../assets/image-product-4-thumbnail.jpg" alt="">
                </div>

            </div>
        </div>

        <div id="product-details" class="col bg-danger p-0">
            <div id="inner-details-div" class="bg-info">
                <div id="dets1" class="bg-light">
                    <h6>SNEAKER COMPANY</h6>
                    <h1>Fall Limited Edition Sneakers</h1>
                    <p>These low profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer</p>
                </div>
                
                <div id="prices-section" class="bg-primary">
                    <div id="price">
                        <h3>$125.00</h3>
                        <span id="discount" class="rounded-2 p-2">50%</span> 
                    </div>

                    <span id="price-before">$250.00</span>
                </div>

                <div id="select-section" class="bg-warning">

                    <div id="quantity">
                        <span>-</span>
                        <span>0</span>
                        <span>+</span>
                    </div>

                    <div id="addbtn">
                        <img src="../assets/icon-cart.svg" alt="">
                        Add to cart
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

<style>

* {
    font-family: Kumbh Sans;
}

#wrapper { 
    height: 85vh;
}

.row {
    height: 100%;
}

#product-images {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#product-details {
    height: 100%; 
    display: flex;
    justify-content: center;
    align-items: center;  
}

#inner-images-div {
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

#inner-details-div {
    width: 100%;
    height: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

#current-display {
    background: aqua;
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#current-image {
    height: 100%;
}

#thumbnails {
    height: 16%;
    width: 75%;
    display: flex;
    justify-content: space-around;
}

.thumb {
    height: 100%;
}

#dets1 {
    width: 80%;
    height: 55%;
    text-align: start;
    display: flex;
    flex-direction: column;
}

#dets1 h6 {
    color:  hsl(26, 100%, 55%);
    font-size: 14px;
    font-weight: 700;
}

#dets1 h1 {
    color:  black;
    font-weight: 700;
    font-size: 40px;
}


#dets1 p {
    color:  hsl(219, 9%, 45%);
    font-size: 14px;
}


#prices-section {
    width: 80%;
    height: 15%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

#price {
    width: 42%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

#price h3 {
    font-weight: 700;
    margin: 0;
}

#price span {
    font-weight: 700;
}

#discount {
    color: hsl(26, 100%, 55%);
    background: hsl(26, 100%, 80%);
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#price-before {
    width: max-content;
    color: hsl(223, 64%, 98%);
    font-size: 13px;
}

#select-section {
    width: 80%;
    height: 20%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}



</style>