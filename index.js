"use strict";

/************* 
Logo animation
************/

const logoAnimation = () => {
  const caruselThumb = document.querySelector(".logo-carusel-thumb");
  let count = 1;
  setInterval(() => {
    if (count % 2 === 0) {
      caruselThumb.style.left = "0";
    } else {
      caruselThumb.style.left = "-100%";
    }
    count++;
  }, 6000);
};

const findJobAccardion = () => {
  const accardionBox = document.querySelector(".accardion-box");
  let counter = 1;
  for (let i = 0; i < accardionBox.children.length; i++) {
    accardionBox.children[i].addEventListener("click", (e) => {
      if (e.currentTarget.classList.contains("accardion")) {
        if (counter % 2 === 0) {
          accardionBox.children[i].style.height = "5.8rem";
          accardionBox.children[i].style.overflowY = "hidden";
          accardionBox.children[i].style.padding = "0 2.1rem 0 0";
          accardionBox.children[i].children[0].children[1].style.rotate =
            "180deg";
        } else {
          // accardionBox.children[i].classList.toggle("accardion-active");
          accardionBox.children[i].style.height = "auto";
          accardionBox.children[i].style.overflowY = "visible";
          accardionBox.children[i].style.padding = "0 2.1rem 2.1rem 0";
          accardionBox.children[i].children[0].children[1].style.rotate =
            "0deg";
        }

        counter++;
      }
    });
  }
};

const findJobsSlider = () => {
  let slideNum = 0;
  // buttons
  const prevBtn = document.querySelector(".jobs-prev");
  const nextBtn = document.querySelector(".jobs-next");
  // elements
  const sliderBox = document.querySelector(".featured-jobs-slider-box");
  const slideBoxLength = sliderBox.children.length;
  // events
  nextBtn.addEventListener("click", () => {
    slideNum++;
    if (slideNum === slideBoxLength) {
      slideNum = 0;
    }
    sliderBox.style.left = "-" + slideNum * 44.5 + "rem";
  });

  prevBtn.addEventListener("click", () => {
    slideNum--;
    if (slideNum < 0) {
      slideNum = slideBoxLength - 1;
    }
    sliderBox.style.left = "-" + slideNum * 44.5 + "rem";
  });
};

const articleSlider = () => {
  let slideNum = 0;
  // buttons
  const prevBtn = document.querySelector(".article-prev");
  const nextBtn = document.querySelector(".article-next");
  // elements;
  const slides = document.querySelector(".article-slider-box");
  const slidesLength = slides.children.length;
  //  events
  nextBtn.addEventListener("click", (e) => {
    slideNum++;
    if (slideNum > slidesLength - 1) {
      slideNum = 0;
    }
    slides.style.left = "-" + slideNum * 120 + "rem";
  });
  prevBtn.addEventListener("click", (e) => {
    slideNum--;
    if (slideNum < 0) {
      slideNum = slidesLength - 1;
    }

    slides.style.left = "-" + slideNum * 120 + "rem";
  });
};

const openNavigation = () => {
  const openBtn = document.querySelector(".menu-btn");
  const menuIcon = document.querySelector(".menu-icon");
  const cancelIcon = document.querySelector(".cancel-icon");
  const navigation = document.querySelector(".navigation");
  const header = document.querySelector("header");
  openBtn.addEventListener("click", (e) => {
    if (cancelIcon.classList.contains("display-none")) {
      header.classList.add("sticky");
      cancelIcon.classList.remove("display-none");
      menuIcon.classList.add("display-none");
    } else {
      header.classList.remove("sticky");
      cancelIcon.classList.add("display-none");
      menuIcon.classList.remove("display-none");
    }
  });
};

const scroolNavigation = () => {
  const navigation = document.querySelector(".navigation");
  const header = document.querySelector("header");
  navigation.addEventListener("click", (e) => {
    e.preventDefault();
    const href = e.target.getAttribute("href");
    if (href && href !== "/") {
      // console.dir(e.target.href); absolute path
      // console.dir(e.target.getAttribute("href")); relative path
      document.querySelector(href).scrollIntoView({
        behavior: "smooth",
      });
      if (header.classList.contains("sticky")) {
        header.classList.remove("sticky");
        cancelIcon.classList.add("display-none");
        menuIcon.classList.remove("display-none");
      }
    }
  });
};

const sectionObserver = () => {
  const observer = new IntersectionObserver(
    function ([entry]) {
      console.log(entry);
      const navbar = document.querySelector(".navbar");
      if (!entry.isIntersecting) {
        navbar.classList.add("navbar-sticky");
      } else {
        navbar.classList.remove("navbar-sticky");
      }
    },
    {
      root: null,
      threshold: 0,
    }
  );

  const header = document.querySelector("header");
  observer.observe(header);
};

(() => {
  logoAnimation();
  findJobAccardion();
  findJobsSlider();
  articleSlider();
  openNavigation();
  scroolNavigation();
  // sectionObserver();
})();
