

// const currentStyle = window.getComputedStyle(document.querySelector(".navbar-right"));
// console.log(currentStyle);
// var x=window.matchMedia;
// if (!x.matches){
//     document.querySelector(".navbar-right").style.display = "none";
// }

let x = 0;

document.querySelector(".nav-menu-btn").addEventListener("click", function(){
  // if (document.querySelector(".navbar-right").style.display === "none") {
  if (x===0){
    document.querySelector(".navbar-right").style.display= "flex";
    console.log(x);
    x=1;
    console.log(x);
    // alert("I got clicked!");
  }
  else {
    document.querySelector(".navbar-right").style.display= "none";
    // alert("I got clicked!");
    x=0;
  }
});