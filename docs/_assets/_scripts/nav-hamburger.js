// Get elements
var navbar       = document.querySelector('.navbar'),
    navbarBurger = document.querySelectorAll('.navbar-burger'),
    navbarMenu   = document.querySelector('.navbar-menu'),
    navMenuItems = document.querySelectorAll('.navbar-menu .navbar-item');
var hamburger = document.querySelector('.navbar-burger'); // get hamburger


// Declare functions
function toggleMenu() {
//  Check if there are any navbar burgers
  if(navbarBurger.length > 0) {

    // Add a click event on each item
    navbarBurger.forEach(function($el) {
      $el.addEventListener('click', function() {

        var target = $el.dataset.target; // data-target="navMenu"
        var $target = document.getElementById(target); // id="navMenu"

        $el.classList.toggle('is-active'); // toggle nav icon
        $target.classList.toggle('is-active'); // toggle nav menu
      });

    });

  }
}

function closeMenuOnLinkClick() {
  navMenuItems[i].addEventListener('click', function() {

    if (this.parentNode.classList.contains('is-active')) {
      this.parentNode.classList.remove('is-active'); // hide menu

      hamburger.classList.remove('is-active'); // change x to hamburger
    }

  });
}

// //Close menu with click outside of menu
// function closeMenuonOutsideClick() {
//   for (i = 0; i < navbarMenu.length; i++) {
//     navbarMenu[i].addEventListener('touchstart', function(event) {
//       if (event.target.closest('.navbar')) {
//         // navbarMenu.classList.remove('is-active');
//         // navbarBurger.classList.remove('is-active');
//         // do nothing
//         console.log('click outside');
//       } else {
//         navbarMenu.classList.remove('is-active');
//         navbarBurger.classList.remove('is-active');
//         // closeMenuClick();
//       }
//
//     });
//   }
// }
document.addEventListener('click', function(event) {
  var isClickInside = navbar.contains(event.target);

  if (!isClickInside) {
    // console.log("outside!");
    hamburger.classList.remove('is-active');
    navbarMenu.classList.remove('is-active');
  }
});

// Close menu when clicking a list item
for (i = 0; i < navMenuItems.length; i++) {
  closeMenuOnLinkClick();
}



// Event listeners
// Add navbar hamburger functionality and 'X' animation
document.addEventListener('DOMContentLoaded', function() {
  toggleMenu();
});

// Close menu when open using ESC key, toggle X
document.onkeydown = function(evt) {
  evt = evt || window.event;

  if (navbarBurger.length > 0) {
    navbarBurger.forEach(function($el) {
      if (evt.keyCode == 27) {
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        if ($el.classList.contains('is-active') && $target.classList.contains('is-active')) {
          $el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        }
      }
    });
  }
};
