const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];


let activeIndex = 0;
const container = document.querySelector(".my-carousel-images")

images.forEach((item, index) => {
  console.log(item);

  container.innerHTML += 
  `
  <div class="my-carousel-item" carousel-item="${index + 1}">
    <img
      class="img-fluid"
      src="./${item.image}"
      alt="${item.title} picture"
    />
    <div class="item-description px-3">
      <h2>${item.title}</h2>
      <p>${item.text}</p>
    </div>
  </div>
  `

});


console.log(container);
const imageElems = document.querySelectorAll(".my-carousel-item")
console.log(imageElems);

imageElems[activeIndex].classList.add("active");

const nextBtn = document.querySelector(".my-next-hook")

const prevBtn = document.querySelector(".my-prev-hook")

nextBtn.addEventListener("click", showNext)

function showNext() {
  imageElems[activeIndex].classList.remove("active")

  if (activeIndex < imageElems.length - 1){
    activeIndex++;
  } else {
    activeIndex = 0
  }

  imageElems[activeIndex].classList.add("active")
}