const images = document.querySelectorAll(".main-img");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const totalImages = images.length;
let index = 0;
// console.log(totalImages)
prevBtn.addEventListener("click", () => {
  hideAll();
  if (index === 0) {
    index = totalImages - 1;
  } else {
    index--;
  }

  images[index].classList.add("visible");
});
nextBtn.addEventListener("click", () => {
  hideAll();
  if (index === totalImages - 1) {
    index = 0;
  } else {
    index++;
  }
  images[index].classList.add("visible");
});
function hideAll() {
  for (image of images) {
    image.classList.remove("visible");
  }
}
//customer service
const servicebox = document.querySelector(".service");
const modalbox = document.querySelector(".modal");
const callLater = document.querySelector(".closeBtn");
servicebox.addEventListener("click", () => {
  modalbox.showModal();
});
callLater.addEventListener("click",()=>{
  // modalbox.close() close method does not work tr, I don't know why;
  modalbox.style.display = "none";
})
  

//coffee porduct
const card = document.querySelector(".coffee-card");
//const featuredItem = document.querySelector(".feature");
const coffeeProducts = document.querySelectorAll(".coffee");
const productLenght = coffeeProducts.length;
let product = 0;
// let coffeeArray = [];
function featuredBtn() {
  hideAllCoffee();
  for (cafe of coffeeProducts) {
    if (cafe.classList.contains("feature")) {
      cafe.style.display = "block";
    } else {
      cafe.style.display = "none";
    }
  }
}

function latestBtn() {
  for (cafe of coffeeProducts) {
    if (cafe.classList.contains("latest")) {
      cafe.style.display = "block";
    } else {
      cafe.style.display = "none";
    }
  }
}

function bestsellerBtn() {
  for (cafe of coffeeProducts) {
    if (cafe.classList.contains("bestseller")) {
      cafe.style.display = "block";
    } else {
      cafe.style.display = "none";
    }
  }
}
function hideAllCoffee() {
  for (coffe of coffeeProducts) {
    coffe.style.display = "none";
  }
}
