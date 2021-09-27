(function () {
  const goTopBtn = document.querySelector(".back_to_top");

  window.addEventListener("scroll", trackScroll);
  goTopBtn.addEventListener("click", backToTop);

  function trackScroll() {
    const scrolled = window.pageYOffset;
    const coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add("back_to_top-show");
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove("back_to_top-show");
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  }
})();

function loadData() {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
}
loadData().then(() => {
  let preloaderEl = document.getElementById("preloader");
  preloaderEl.classList.add("hidden");
  preloaderEl.classList.remove("visible");
});

$(document).ready(function () {
  $(".menu2").click(function () {
    $(this).toggleClass("active");
  });
});

function updateMenuButton() {
  $(".js-menu-button").find(".menu-icon").toggleClass("is-active");
}

$(document).ready(function () {
  $(".js-menu-button").click(function (e) {
    e.preventDefault();
    updateMenuButton();
  });
});
//scroll animation
let isScrolling = false;

window.addEventListener("scroll", throttleScroll, false);

function throttleScroll(e) {
  if (isScrolling === false) {
    window.requestAnimationFrame(function () {
      scrolling(e);
      isScrolling = false;
    });
  }
  isScrolling = true;
}

document.addEventListener("DOMContentLoaded", scrolling, false);

const skillBox = document.querySelector("#skills");

function scrolling(e) {
  if (isFullyVisible(skillBox)) {
    skillBox.classList.add("active");
  }

  function isFullyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;

    return top >= 0 && bottom <= window.innerHeight;
  }
}
