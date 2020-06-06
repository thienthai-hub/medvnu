	var slideIndexPc = 0;
showSlidePc();

function showSlidePc() {
  var i;
  var slides = document.getElementsByClassName("slide-pc");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndexPc++;
  if (slideIndexPc > slides.length) {slideIndexPc = 1}    
  slides[slideIndexPc-1].style.display = "block";  
  setTimeout(showSlidePc, 4000); // Change image every 2 seconds
}