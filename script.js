let slideIndex = 1; // This variable represents current slide number, initially it is the first slide
showSlides(slideIndex); //Show the first slide

// Next/previous slide buttons
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slideshow = document.getElementsByClassName("slideshow");
  let slideIndex = 1; 

  //Reset Cases
  //This resets the slide index to 1 if it goes too high
  if (n > slideshow.length) 
    slideIndex = 1 
  //This resets the slide index to max if it goes too low
  if (n < 1) 
    slideIndex = slideshow.length

  //Hide every other image
  for (i = 0; i < slideshow.length; i++) {
    slideshow[i].style.display = "none";
  }
  //show the current image
  slideshow[slideIndex-1].style.display = "block";
} 