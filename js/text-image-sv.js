$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(100)
    .next()
    .fadeIn(100)
    .end()
    .appendTo('#slideshow');
},  3000);
// var slideIndex1 = 0;
// slideTextSv();

// function slideTextSv() {
//   var i;
//   var slides = document.getElementsByClassName("slide-image-text-1");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex1++;
//   if (slideIndex1 > slides.length) {slideIndex1 = 1}    
//   slides[slideIndex1-1].style.display = "block";  
//   setTimeout(slideTextSv, 2000); // Change image every 2 seconds
// }