// document.querySelector('#scroll-top').addEventListener('click', function() {
//   var scrollToTop = window.setInterval(function() {
//     var pos = window.pageYOffset;
//
//     if (pos > 0) {
//       window.scrollTo(0, pos - 20); // how far to scroll on each step
//     } else {
//       window.clearInterval(scrollToTop);
//     }
//   }, 16); // how fast to scroll (this equals roughly 60 fps)
// })

var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 700,
  offset: 0,
  easing: 'easeInOutCubic'
});
