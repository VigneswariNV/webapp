const toggle = document.getElementById('toggle');
const body = document.body;

toggle.addEventListener('input', e => {
    const isChecked = e.target.checked;

    if (isChecked) {
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
    }
});


var slideIndex = [1,1];
var slideId = ["sub-element", "element"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "inline-block";  
}


let dropdownBtn = document.querySelector('.drop-btn');
let menuContent = document.querySelector('.dropdown-content');
let upIcon = document.querySelector('.up');
let downIcon = document.querySelector('.down');
dropdownBtn.addEventListener('click',()=>{
   if(menuContent.style.display===""){
      menuContent.style.display="block";
      downIcon.style.display="";
      upIcon.style.display="inline-block";
   } else {
      menuContent.style.display="";
      downIcon.style.display="inline-block";
      upIcon.style.display="";
   }
})