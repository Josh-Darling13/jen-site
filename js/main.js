// const header = document.getElementById("header");

// const bio = document.getElementById("bio");

// const acting = document.getElementById("acting");

// const writing = document.getElementById("writing");

// const gallery = document.getElementById("gallery");

// const contact = document.getElementById("contact")

// const picAndBio = document.getElementById('picAndBio');



const moarActing = document.getElementById("moarActing");
const moarWriting = document.getElementById("moarWriting");
const addtionalActing = document.getElementById("addtionalActing");
const addtionalWriting = document.getElementById("addtionalWriting");
const hideWriting = document.getElementById("hideWriting");
const hideActing = document.getElementById("hideActing");

const pic1 = document.getElementById('pic1');
const pic2 = document.getElementById('pic2');
const pic3 = document.getElementById('pic3');
const pic4 = document.getElementById('pic4');


moarActing.addEventListener("click", (event) => {
  addtionalActing.removeAttribute("hidden");
});

moarWriting.addEventListener("click", (event) => {
  addtionalWriting.removeAttribute("hidden");
});

hideActing.addEventListener("click", (event) => {
  addtionalActing.setAttribute("hidden", "");
});

hideWriting.addEventListener("click", (event) => {
  addtionalWriting.setAttribute("hidden", "");
});

let testBool = true;
function toggle() {
  testBool = !testBool;
  return testBool;
  }

pic1.addEventListener('click', (event)=>{
  const showPic = toggle();
  if(!showPic){
    pic1.src = "./img/bo_big.png";
  } else {
    pic1.src = "./img/bo_little.png";
  }
});

pic2.addEventListener('click', (event)=>{
  const showPic = toggle();
  if(!showPic){
    pic2.src = "./img/ru_big.png";
  } else {
    pic2.src = "./img/ru_little.png";
  }
});

pic3.addEventListener('click', (event)=>{
  const showPic = toggle();
  if(!showPic){
    pic3.src = "./img/Ingrid_big.png";
  } else {
    pic3.src = "./img/Ingrid_little.png";
  }
});

pic4.addEventListener('click', (event)=>{
  const showPic = toggle();
  if(!showPic){
    pic4.src = "./img/baby_big.png";
  } else {
    pic4.src = "./img/baby_little.png";
  }
});



