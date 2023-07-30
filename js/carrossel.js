document.addEventListener("DOMContentLoaded", function() {
    var carouselImages = document.querySelectorAll(".carousel img");
    var currentImage = 0;
    var prevButton = document.querySelector(".prev-button");
    var nextButton = document.querySelector(".next-button");
  
    function showImage(index) {
      carouselImages[currentImage].classList.remove("active");
      currentImage = (index + carouselImages.length) % carouselImages.length;
      carouselImages[currentImage].classList.add("active");
    }
  
    function nextImage() {
      showImage(currentImage + 1);
    }
  
    function prevImage() {
      showImage(currentImage - 1);
    }
  
    function startCarousel() {
      setInterval(nextImage, 5000); // Troca de imagem a cada 5 segundos
    }
  
    prevButton.addEventListener("click", prevImage);
    nextButton.addEventListener("click", nextImage);
  
    showImage(currentImage);
    startCarousel();
  });
  