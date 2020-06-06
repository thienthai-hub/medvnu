

function myFunctionPC(btn) {
  var parent = btn.previousElementSibling;
  var p = parent.children[1];
  var dots = p.children[0];
  var moreText = p.children[1];
  var btnText = btn;
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
 