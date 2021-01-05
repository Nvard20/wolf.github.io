//Loader
let load = false;
window.onload = function() {
  load = true
  if(load == true){
    $(".load-page").css("display","none");


  }
};
//hamburger mobile
 const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});
$(document).ready(function(){
  $(".menu-btn").click(function(){
    $(".mobile-menu").toggle(500);
  });
});

//slider
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3000); // Change image every 2 seconds
}
if ($('.card-games').length > 0) {

    var containerEl = document.querySelector('.card-games');
     var mixer = mixitup(containerEl);
 }


