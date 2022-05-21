<template>
  <div>
    <!-- Slideshow container -->
    <div class="slideshow-container">
      <!-- Full-width images with number and caption text -->
      <div class="mySlides fade">
        <img src="../assets/img/cafe_irlandes.png" class="img" alt="coffee" />
        <div class="dots">
          <span class="dot active"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
        <div class="text-box">
          <span class="text">
            Experimente o novo Irish Coffee
          </span>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  name: "image-slider"
};
</script>

<style scoped>
* {
  box-sizing: border-box
}

/* Slideshow container */
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

/* Hide the images by default */
.mySlides {
  display: block;
}

.img {
  width: 100%;
  border-radius: 20px;
}

/* Caption text */
.text {
  color: #692C2C;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  display: table;
  margin: 0 auto;
}

.text-box {
  background-color: rgba(187, 187, 187, 0.5);
  padding: 8px 12px;
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 70px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

.dots {
  padding: 8px 12px;
  position: absolute;
  bottom: 70px;
  text-align: center;
  width: 100%;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active,
.dot:hover {
  background-color: #717171;
}

/* Fading animation */
.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {
    opacity: .4
  }

  to {
    opacity: 1
  }
}
</style>
