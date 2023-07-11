<template>
<!-- Modal -->

  <div class="modal-dialog modal-dialog-centered" id="wrapper">

    <div class="pt-4 pb-0 pe-3" id="header">
        <button class="p-0" id="closebtn" data-bs-dismiss="modal" aria-label="Close"><img id="closeimg" src="../assets/icon-close-orange.svg" alt=""></button>
    </div>

    <div class="modal-content rounded-5" id="content">

                <div id="current-display">
                    <div @click='handlePrevious'  id="arrowdiv1" class="scrollbtn1 rounded-circle bg-white">
                        <img id="arrow1" src="../assets/icon-previous.svg" alt="previous">
                    </div>
                    
                <img @click = 'handleModal' :src="link" class="img-fluid rounded-4" id="current-image">

                    <div @click='handleNext' id="arrowdiv2"  class="scrollbtn2 rounded-circle bg-white">
                        <img id="arrow2" src="../assets/icon-next.svg" alt="next">
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
</template>

<script>
export default {
    props:['link', 'handleNext', 'handlePrevious', 'handlePicture1', 'handlePicture2', 'handlePicture3', 'handlePicture4', 'opacity1', 'opacity2', 'opacity3', 'opacity4', 'border1', 'border2', 'border3', 'border4']

}
</script>

<style scoped>

#wrapper {
    max-width: none;
    max-height: none;
    min-height: none;
    max-height: none;
    width: 50vw;
    height: 10vh;
    display: flex;
    flex-direction: column;
}

#header {
    width: 65%;
    display: flex;
    justify-content: end;
}

#closebtn {
    /* background: aqua; */
    width:max-content;
    border: none;
    background: transparent;
    height: 20px;
    display: flex;
    justify-content: end;
}
#closebtn img {
    height: 100%;
}

/* #closebtn:hover{
    cursor: pointer;
} */
#closeimg:hover{
    cursor: pointer;
}

#content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: transparent;
    border: none;
}

#current-display{
    height:70%;
    width: max-content;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

#current-image {
    height: 100%;
}

#thumbnails {
    width:60%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.thumb {
    width: 20%;
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


#arrowdiv1 {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 17%;
}

#arrowdiv1:hover {
cursor: pointer;
}
#arrowdiv2:hover {
cursor: pointer;
}

#arrowdiv2 {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 17%;
}

</style>