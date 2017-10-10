const nav = document.querySelector('.navbar');
const topOfNav = nav.offsetTop;


function fixNav() {
  if (window.scrollY >= topOfNav) {
    document.body.classList.add('fixed-nav');
  } else {
    document.body.classList.remove('fixed-nav');
  }
}

window.addEventListener('scroll', fixNav);
