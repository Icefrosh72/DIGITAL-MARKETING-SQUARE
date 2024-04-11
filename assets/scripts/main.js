// // let items = document.querySelectorAll('.slider .item');
// // let next = document.querySelectorId('#next');
// // let prev = document.querySelectorId('prev');
// // let thumbnails = document.querySelectorAll('.thumbnail .item');

// // // param

// // let countItem = items.length;
// // let itemActive = 0;

// // // event next click
// // next.onclick = function () {
// //   itemActive = itemActive + 1;
// //   if (itemActive >= countItem) {
// //     itemActive = 0;
// //   }
// //   showSlider();
// // };

// // prev.onclick = function () {
// //   itemActive = itemActive - 1;
// //   if (itemActive < 0) {
// //     itemActive = countItem - 1;
// //   }
// //   showSlider();
// // };

// // //
// // let refreshInterval = setInterval(() => {
// //   next.click();
// // }, 3000);

// // //
// // clearInterval(refreshInterval);
// // refreshInterval = setInterval(() => {
// //     next.click();
// // }, 5000)

// // function showSlider() {
// //   let itemActiveOld = document.querySelector('.slider .list .item.active');
// //   let thumbnailActiveOld = document.querySelectorAll('.thumbnail .item.active');
// //   itemActiveOld.classList.remove('active');
// //   thumbnailActiveOld.classList.remove('.active');
// //   //

// //   items[itemActive].classList.add('active');
// //   thumbnails[itemActive].classList.add('active');
// // }

// // //
// // thumbnails.forEach((thumbnails, index) => {
// //   thumbnails.addEventListener('click', () => {
// //     itemActive = index;
// //     showSlider();
// //   });
// // });

let items = document.querySelectorAll(".slider .list .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let thumbnails = document.querySelectorAll(".thumbnail .item");

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function () {
  itemActive = itemActive + 1;
  if (itemActive >= countItem) {
    itemActive = 0;
  }
  showSlider();
};
//event prev click
prev.onclick = function () {
  itemActive = itemActive - 1;
  if (itemActive < 0) {
    itemActive = countItem - 1;
  }
  showSlider();
};
// auto run slider
let refreshInterval = setInterval(() => {
  next.click();
}, 5000);
function showSlider() {
  // remove item active old
  let itemActiveOld = document.querySelector(".slider .list .item.active");
  let thumbnailActiveOld = document.querySelector(".thumbnail .item.active");
  itemActiveOld.classList.remove("active");
  thumbnailActiveOld.classList.remove("active");

  // active new item
  items[itemActive].classList.add("active");
  thumbnails[itemActive].classList.add("active");

  // clear auto time run slider
  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => {
    next.click();
  }, 5000);
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    itemActive = index;
    showSlider();
  });
});

// Mission

// Slides
$(".mission-slides").owlCarousel({
  loop: true,
  nav: true,
  dots: false,
  smartSpeed: 500,
  margin: 25,
  center: true,
  autoplayHoverPause: true,
  autoplay: true,
  navText: [
    "<i class='fas fa-arrow-left'></i>",
    "<i class='fas fa-arrow-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1024: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
});


// Services Slides
$('.dmscore-slides').owlCarousel({
  loop: true,
  nav: false,
  dots: true,
  smartSpeed: 500,
  margin: 25,
  center: true,
  autoplayHoverPause: true,
  autoplay: false,

  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    1024: {
      items: 3
    },
    1200: {
      items: 3
    }
  }
});


// Slides
$(".dmscase-slides").owlCarousel({
  loop: true,
  nav: false,
  dots: false,
  smartSpeed: 500,
  margin: 25,
  center: true,
  autoplayHoverPause: true,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1024: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
});

// Slides
$(".dmspartner-slides").owlCarousel({
  loop: true,
  nav: false,
  dots: false,
  smartSpeed: 500,
  margin: 25,
  center: true,
  autoplayHoverPause: true,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1024: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
});