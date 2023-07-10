<template>
<!-- Modal -->

  <div class="modal-dialog modal-dialog-centered bg-primary" id="wrapper">
    <div class="modal-header pt-0 pb-3" id="header">
        <button id="closebtn" type="button" data-bs-dismiss="modal" aria-label="Close"><img src="../assets/icon-close.svg" alt=""></button>
      </div>

    <div class="modal-content rounded-5" id="content">

                <div id="current-display">
                    <div @click='handlePrevious' class="scrollbtn1 rounded-circle d-flex d-lg-none">
                        <img id="arrows" src="../assets/icon-previous.svg" alt="previous">
                    </div>
                    
                <img @click = 'handleModal' :src="link" class="img-fluid rounded-4" id="current-image" data-bs-toggle="modal" data-bs-target="#exampleModal">

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
</template>

<script>
export default {
    props:['link', 'handleNext', 'handlePrevious', 'handlePicture1', 'handlePicture2', 'handlePicture3', 'handlePicture4']

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
    width: 100%;
    display: flex;
    justify-content: center;
}

#closebtn {
    /* background: aqua; */
    width:65%;
    border: none;
    background: transparent;
    height: 20px;
    display: flex;
    justify-content: end;
}
#closebtn img {
    height: 100%;
}

#content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

#current-display{
    height:70%;
    width: max-content;
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

</style>