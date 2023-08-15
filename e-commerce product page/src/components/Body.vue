<template>
    <div id="wrapper" class="container-fluid">

        <!-- Modal -->
    <div v-if="showModal" class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <Modal :link = 'link' :handleNext = 'handleNext' :handlePrevious = 'handlePrevious' :handlePicture1 = 'handlePicture1' :handlePicture2 = 'handlePicture2' :handlePicture3 = 'handlePicture3' :handlePicture4 = 'handlePicture4' :opacity1 = 'opacity1' :opacity2 = 'opacity2' :opacity3 = 'opacity3' :opacity4 = 'opacity4' :border1 = 'border1' :border2 = 'border2' :border3 = 'border3' :border4 = 'border4'  />
    </div>

    <div class="row">

        <div id="product-images" class="col p-0">
            <div id="inner-images-div" class="">

                <div id="current-display">
                    <div @click='handlePrevious' class="scrollbtn1 rounded-circle d-flex d-lg-none">
                        <img id="arrows" src="../assets/icon-previous.svg" alt="previous">
                    </div>

                <img v-if="showModal" :src="link" class="img-fluid" id="current-image" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img v-else :src="link" class="img-fluid" id="current-image">

                    <div @click='handleNext' class="scrollbtn2 rounded-circle d-flex d-lg-none">
                        <img id="arrows" src="../assets/icon-next.svg" alt="next">
                    </div>
                </div>



                <div id="thumbnails" class="d-none d-lg-flex">
                    <img @click='handlePicture1' class="img-fluid thumb rounded-3" id="thumb1" src="../assets/image-product-1-thumbnail.jpg" alt="">
                    <img @click='handlePicture2' class="img-fluid thumb rounded-3" id="thumb2" src="../assets/image-product-2-thumbnail.jpg" alt="">
                    <img @click='handlePicture3' class="img-fluid thumb rounded-3" id="thumb3" src="../assets/image-product-3-thumbnail.jpg" alt="">
                    <img @click='handlePicture4' class="img-fluid thumb rounded-3" id="thumb4" src="../assets/image-product-4-thumbnail.jpg" alt="">
                </div>

            </div>
        </div>

        <div id="product-details" class="col p-0">
            <div id="inner-details-div" class="">
                <div id="dets1" class="mt-4 mt-lg-0">
                    <h6>SNEAKER COMPANY</h6>
                    <h1>Fall Limited Edition Sneakers</h1>
                    <p>These low profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer</p>
                </div>

                <div id="prices-section" class="">
                    <div id="price">
                        <h3>$125.00</h3>
                        <span id="discount" class="rounded-2 p-1 p-lg-2">50%</span>
                    </div>

                    <span id="price-before"><s>$250.00</s></span>
                </div>

                <div id="select-section" class="">

                    <div id="quantity" class="rounded-3">
                        <span @click="subtractItem" id="operation" >-</span>
                        <span style="color:black">{{quantity}}</span>
                        <span @click="addItem" id="operation">+</span>
                    </div>

                    <div @click = 'addToCart' id="addbtn" class='rounded-3'>
                        <div id="inner">
                            <img id="btncart" src="../assets/icon-cart-white.svg" alt="">
                            Add to cart
                        </div>

                    </div>

                </div>

            </div>
        </div>

    </div>
    </div>
</template>

<script>
import picture1 from '../assets/image-product-1.jpg'
import picture2 from '../assets/image-product-2.jpg'
import picture3 from '../assets/image-product-3.jpg'
import picture4 from '../assets/image-product-4.jpg'
import Modal from '../components/Modal.vue'

export default {
    props: ['quantity', 'addItem', 'subtractItem', 'addToCart'],
    components: {Modal},

    data(){
        return{
            link: picture1,
            opacity1:"0.3",
            opacity2:"1",
            opacity3:"1",
            opacity4:"1",
            border1:"2px solid hsl(26, 100%, 55%)",
            border2:"none",
            border3:"none",
            border4:"none",
            screenWidth: 0,
            showModal: true
        }
    },

    methods: {
        handlePicture1() {
            this.link = picture1
            this.opacity1 = "0.3"
            this.opacity2 = "none"
            this.opacity3 = "none"
            this.opacity4 = "none"
            this.border1 = "2px solid hsl(26, 100%, 55%)"
            this.border2 = "none"
            this.border3 = "none"
            this.border4 = "none"
        },
        handlePicture2() {
            this.link = picture2
            this.opacity2 = "0.3"
            this.border2 = "2px solid hsl(26, 100%, 55%)"

            this.opacity1 = "none"
            this.opacity3 = "none"
            this.opacity4 = "none"
            this.border1 = "none"
            this.border3 = "none"
            this.border4 = "none"
        },
        handlePicture3() {
            this.link = picture3
            this.opacity3 = "0.3"
            this.border3 = "2px solid hsl(26, 100%, 55%)"

            this.opacity1 = "none"
            this.opacity2 = "none"
            this.opacity4 = "none"
            this.border1 = "none"
            this.border2 = "none"
            this.border4 = "none"
        },
        handlePicture4() {
            this.link = picture4
            this.opacity4 = "0.3"
            this.border4 = "2px solid hsl(26, 100%, 55%)"

            this.opacity1 = "none"
            this.opacity3 = "none"
            this.opacity2 = "none"
            this.border1 = "none"
            this.border3 = "none"
            this.border2 = "none"
        },
        handleNext() {
            if(this.link === picture1 ){
               this.handlePicture2()
            }else if(this.link ===picture2 ){
                this.handlePicture3()
            }else if(this.link ===picture3 ){
                this.handlePicture4()
            }else{
                this.handlePicture1()
            }
        },
        handlePrevious() {
            if(this.link === picture1 ){
                 this.handlePicture4()
            }else if(this.link === picture2 ){
                 this.handlePicture1()
            }else if(this.link === picture3 ){
                 this.handlePicture2()
            }else{
                 this.handlePicture3()
            }
        },
        onScreenResize() {
            window.addEventListener("resize", () => {
            this.updateScreenWidth();
        });
        },

        updateScreenWidth() {
            this.screenWidth = window.innerWidth;

            if(this.screenWidth > 992) {
                this.showModal = true
            } else {
                this.showModal = false
            }
            },
        },

          mounted() {
            this.updateScreenWidth();
            this.onScreenResize();
        },
}
</script>

<style scoped>

* {
    font-family: Kumbh Sans;
}

#wrapper {
    height: 85vh;
    min-height: max-content;
}

.row {
    height: 100%;
}

.modal {
    display: none;
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
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#current-image {
    height: 100%;
    border-radius: 1.2rem;
}

#current-image:hover {
cursor: pointer;
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

.thumb:hover {
    cursor: pointer;
    scale: 1.1;
    transition: 0.2s ease-in-out;
}

#thumb1 {
    opacity: v-bind('opacity1');
    border: v-bind('border1');
}

#thumb1:hover {
    opacity: 0.5;
}

#thumb2 {
    opacity: v-bind('opacity2');
    border: v-bind('border2');
}
#thumb2:hover {
    opacity: 0.5;
}
#thumb3 {
    opacity: v-bind('opacity3');
    border: v-bind('border3');
}
#thumb3:hover {
    opacity: 0.5;
}
#thumb4 {
    opacity: v-bind('opacity4');
    border: v-bind('border4');
}
#thumb4:hover {
    opacity: 0.5;
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
    color: black;
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
    color: gray;
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


#addbtn {
    background-color: hsl(26, 100%, 55%);
    width: 55%;
    height: 55%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 14px;
    font-weight: 700;
}

#addbtn:hover {
    background-color: hsl(26, 100%, 65%);
    cursor: pointer;
    transition: 0.2s ease-in-out;

}

#inner {
    width: 50%;
    display: flex;
    justify-content: space-around;
}

#btncart {
    height: 100%;
}

#quantity {
    width: 40%;
    height: 55%;
    display: flex;
    flex-direction: row;
    background-color: hsl(228, 100%, 98%);
}

#quantity span {
    width: 33.33%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
}

#operation {
    color: hsl(26, 100%, 55%);
    font-size: 24px;
}

#operation:hover {
    color: hsl(26, 100%, 65%);
    cursor: pointer;
}

@media only screen and (max-width: 992px){
#wrapper {
    min-height: max-content;
    height: 90vh;
}

.row {
    height: 100%;
    display: flex;
    flex-direction: column;
}

#product-images {
    max-height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#inner-images-div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

#current-display {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#current-image {
   height: 100%;
    border-radius: 1.2rem;
}

#product-details {
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#inner-details-div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}

#dets1 {
    width: 60%;
    height: 50%;
    text-align: center;
    display: flex;
    flex-direction: column;
}

#prices-section {
    width: 60%;
    height: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

#price {
    width: 30%;
}

#select-section {
    width: 60%;
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

#addbtn {
    background-color: hsl(26, 100%, 55%);
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 14px;
    font-weight: 700;
}

#addbtn:hover {
    background-color: hsl(26, 100%, 65%);
}

#inner {
    width: 30%;
    display: flex;
    justify-content: space-around;
}

#btncart {
    height: 100%;
}

#quantity {
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    background-color: hsl(228, 100%, 98%);
}

#quantity span {
    width: 33.33%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* font-size: 20px; */
    font-weight: 700;
}

#operation {
        color: hsl(26, 100%, 55%);
        font-size: 24px;
}

#operation:hover {
        color: hsl(26, 100%, 65%);
        cursor: pointer;
}

.scrollbtn1 {
    width: 60px;
    height: 60px;
    background-color: hsl(228, 100%, 98%);
    position: absolute;
    left: 14%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.scrollbtn2 {
    width: 60px;
    height: 60px;
    background-color: hsl(228, 100%, 98%);
    position: absolute;
    right: 14%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#arrows {
    width: 30%;
}

}

@media only screen and (max-width: 992px) and (max-height:500px){
#wrapper{
    height: 200vh;
    min-height: max-content;
}

.scrollbtn1 {
    left: 24%;
}

.scrollbtn2 {
    right: 24%;
}

#arrows {
    width: 30%;
}
}


@media only screen and (max-width: 768px){

#wrapper {
    min-height: max-content;
    height: 100vh;
}

.row {
    height: 100%;
    display: flex;
    flex-direction: column;
}

#product-images {
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#inner-images-div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

#current-display {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#current-image {
    height: 100%;
    width: unset;
    border-radius: 0;
}

.scrollbtn1 {
    width: 40px;
    height: 40px;
    background-color: white;
    position: absolute;
    left: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.scrollbtn2 {
    width: 40px;
    height: 40px;
    background-color: white;
    position: absolute;
    right: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#arrows {
    width: 30%;
}

#product-details {
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#inner-details-div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}

#dets1 {
    width: 90%;
    height: 50%;
    text-align: start;
    display: flex;
    flex-direction: column;
}

#prices-section {
    width: 90%;
    height: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

#price {
    width: 40%;
}


#select-section {
    width: 90%;
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

#addbtn {
    background-color: hsl(26, 100%, 55%);
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 14px;
    font-weight: 700;
}

#addbtn:hover {
    background-color:  hsl(26, 100%, 65%);
}

#inner {
    width: 50%;
    display: flex;
    justify-content: space-around;
}

#btncart {
    height: 100%;
}

#quantity {
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    background-color: hsl(228, 100%, 98%);
}

#quantity span {
    width: 33.33%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* font-size: 20px; */
    font-weight: 700;
}

#operation {
        color: hsl(26, 100%, 55%);
        font-size: 24px;
}

#operation:hover {
        color: hsl(26, 100%, 65%);
        cursor: pointer;
}

}


@media screen and (max-height:720px) and (max-width:768px) {

#wrapper {
    height: 150vh;
    min-height: max-content;
}

#price {
    width: 45%;
}

#current-image {
    height: 100%;
    width: unset;
}


}


</style>
