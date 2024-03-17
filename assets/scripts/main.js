// let items = document.querySelectorAll('.slider .item');
// let next = document.querySelectorId('#next');
// let prev = document.querySelectorId('prev');
// let thumbnails = document.querySelectorAll('.thumbnail .item');

// // param

// let countItem = items.length;
// let itemActive = 0;

// // event next click
// next.onclick = function () {
//   itemActive = itemActive + 1;
//   if (itemActive >= countItem) {
//     itemActive = 0;
//   }
//   showSlider();
// };

// prev.onclick = function () {
//   itemActive = itemActive - 1;
//   if (itemActive < 0) {
//     itemActive = countItem - 1;
//   }
//   showSlider();
// };

// //
// let refreshInterval = setInterval(() => {
//   next.click();
// }, 3000);

// // 
// clearInterval(refreshInterval);
// refreshInterval = setInterval(() => {
//     next.click();
// }, 5000)

// function showSlider() {
//   let itemActiveOld = document.querySelector('.slider .list .item.active');
//   let thumbnailActiveOld = document.querySelectorAll('.thumbnail .item.active');
//   itemActiveOld.classList.remove('active');
//   thumbnailActiveOld.classList.remove('.active');
//   //

//   items[itemActive].classList.add('active');
//   thumbnails[itemActive].classList.add('active');
// }

// //
// thumbnails.forEach((thumbnails, index) => {
//   thumbnails.addEventListener('click', () => {
//     itemActive = index;
//     showSlider();
//   });
// });



let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// parameters
let countItem = items.length;
let itemActive = 0;

// event next click
next.onclick = function () {
  itemActive = (itemActive + 1) % countItem;
  showSlider();
};

prev.onclick = function () {
  itemActive = (itemActive - 1 + countItem) % countItem;
  showSlider();
};

let refreshInterval;

function startSlider() {
  refreshInterval = setInterval(() => {
    next.click();
  }, 3000);
}

function stopSlider() {
  clearInterval(refreshInterval);
}

startSlider();

// function to display slider
function showSlider() {
  let itemActiveOld = document.querySelector('.slider .item.active');
  let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
  
  itemActiveOld.classList.remove('active');
  thumbnailActiveOld.classList.remove('active');
  
  items[itemActive].classList.add('active');
  thumbnails[itemActive].classList.add('active');
}

// event listener for thumbnail clicks
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    itemActive = index;
    stopSlider(); // Stop auto slideshow when user interacts with thumbnails
    showSlider();
    startSlider(); // Start auto slideshow again after user interaction
  });
});
