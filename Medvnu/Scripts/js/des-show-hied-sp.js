 
// var defaultHeight = 300;
// var text = $(".des-new-text-sp");
// var textHeight = text[0].scrollHeight;
// var button = $(".button");
// text.css({"max-height": defaultHeight, "overflow": "hidden"});

// button.on("click", function(){
//   var newHeight = 0;
//   if (text.hasClass("active")) {
//     newHeight = defaultHeight;
//     text.removeClass("active");
    
//   } else {
//     newHeight = textHeight;
//     text.addClass("active");
//   }
//   text.animate({
//     "max-height": newHeight
//   }, 800);
//   console.log(newHeight);
// });

function myFunctionSP(btn) {
  var parent = btn.parentElement;
  var p = parent.children[1];
  var dots = p.children[0];
  var moreText = p.children[1];
  var btnText = parent.children[2];
 
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
 
 
