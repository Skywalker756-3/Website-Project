let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function incrementSlides(n) {
  showSlides(slideIndex += n);
}



function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
} 

//Prevent the site from being visible before elements are loaded in, this uses an event
let domReady = (cb) => {
    document.readyState === 'interactive' || document.readyState === 'complete'
      ? cb()
      : document.addEventListener('DOMContentLoaded', cb);
  };
  domReady(() => {
    // Display body when DOM is loaded
    document.body.style.visibility = 'visible';
  });


//Prevent the video from playing in a seperate player
  const video = document.getElementById('myVideo');
  video.disablePictureInPicture = true; // Ensure PiP mode is disabled