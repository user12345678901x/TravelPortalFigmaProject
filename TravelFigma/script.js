const loginBtn = document.querySelector(".login__btn");
const loginModal = document.querySelector(".wrapper__login");
const blurBody = document.querySelector("body :not(.wrapper__login)");
const linksignInModal = document.querySelector(".modal-footer__link-sign-in");
const signInModal = document.querySelector(".wrapper__sign-in");
const linkLogIn = document.querySelector(".link-login");
const closeBtn = document.querySelectorAll(".__close-btn");
const menuCloseBtn = document.querySelector(".burger-menu__close-btn");
const body = document.querySelector("body");
const burgerBtn = document.querySelector(".header__burger-btn");
const burgerMenu = document.querySelector(".popup__wrapper");
const leftArrow = document.querySelector("#left");
const rightArrow = document.querySelector("#right");
const header = document.querySelector(".header__container");


burgerBtn.addEventListener("click", () => {
  burgerMenu.style = "right: 0%;"
});

loginBtn.addEventListener("click", () => {
  loginModal.style = "top: 5%; transition: 1s; left: 33%;";
  blurBody.style = "filter: blur(10px);";
});

linksignInModal.addEventListener("click", () => {
  loginModal.style = "top: -100%;";
  signInModal.style = "top: 20%; transition: 1s; left: 33%;";
});

linkLogIn.addEventListener("click", () => {
signInModal.style = "top: -100%";
loginModal.style = "top: 5%; transition: 1s; left: 33%;";});

blurBody.addEventListener("click", () => {
  signInModal.style = "top: -100%; transition: 1s;";
});


closeBtn[0].addEventListener("click", () => {
  signInModal.style = "top: -100%;";
  blurBody.style = "filter: none";
});

closeBtn[1].addEventListener("click", () => {
  loginModal.style = "top: -100%;";
  blurBody.style = "filter: none";
});

menuCloseBtn.addEventListener("click", () => {
  burgerMenu.style = "right: -1000%;";
});

const slides = document.querySelectorAll(".slider-img__mobile");

let slideIndex = 0;

function showSlide(index){

    if(index >= slides.length){

        slideIndex = 0;

    }

    else if(index < 0){

        slideIndex = slides.length - 1;

    }



    slides.forEach(slide => {

        slide.classList.remove("displaySlide");

    });

    slides[slideIndex].classList.add("displaySlide");

}



function prev(){

    slideIndex--;

    showSlide(slideIndex);

}



function next(){

    slideIndex++;

    showSlide(slideIndex);

}

let previousPosition = 0;

function whichSide () {
  const currentPosition = document.documentElement.scrollTop;

  if (currentPosition < previousPosition) {
    console.log("upupup");
    header.classList.remove("hide");
  } else {
    console.log("down");
    header.classList.add("hide");
  }

  previousPosition = currentPosition;
}

document.addEventListener("scroll", whichSide);

const sliderElements = document.querySelectorAll(".swiper-slide__img");
const navDots = document.querySelectorAll(".nav__dot");

for (let i = 0; i < navDots.length; i++) {
  navDots[i].addEventListener("click", () => {
    sliderElements[i].scrollIntoView({behavior: "smooth"});
  })
}

navDots.forEach(navDot => {
  navDot.addEventListener("click", () => {
    document.querySelector(".isActive")?.classList.remove("isActive");
    navDot.classList.add("isActive");
  })
})