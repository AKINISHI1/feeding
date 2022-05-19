const images = [
  "../images/break.png",
  "../images/smartphone.png"
];
console.log(images.length);
const image = document.getElementById("slide");
let i = 0;
function slideshow(){
  image.src = images[i]
  i++;
  console.log(i);
  if(i == images.length){
    i = 0;
  }
}

const timer = setInterval(slideshow,3000);

