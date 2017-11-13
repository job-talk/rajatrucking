// Get elements
var navbarBurger = document.querySelectorAll('.navbar-burger');
var navbarMenu   = document.querySelectorAll('.navbar-menu');



// Declare functions
function toggleMenu() {
  // Check if there are any navbar burgers
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

function isMenuOpen() {
  if (navbarMenu.classList.contains('is-active') && navbarBurger.classList.contains('is-active')) {
    console.log('Menu is active/open');
    return true;
  }
  else {
    console.log('Menu is closed');
    return false;
  }
}



// Close menu when open using ESC key, toggle X
document.onkeydown = function(evt) {
  evt = evt || window.event;

  // if ($navbarBurgers.length > 0) {
  //
  //   $navbarBurgers.forEach(function($el) {
  //     if (evt.keyCode == 27) {
  //
  //       var target = $el.dataset.target;
  //       var $target = document.getElementById(target);
  //
  //       if ($el.classList.contains('is-active') && $target.classList.contains('is-active')) {
  //         $el.classList.toggle('is-active');
  //         $target.classList.toggle('is-active');
  //       }
  //
  //     }
  //   });
  //
  // }

  // if ((evt.keyCode == 27) && (isMenuOpen() == true)) {
  //   toggleMenu();
  // }
};


//Close menu with click outside of menu
for (i = 0; i < navbarMenu.length; i++) {
  navbarMenu[i].addEventListener('click', function(event) {
    if (event.target.closest('.navbar')) {
      // navbarMenu.classList.remove('is-active');
      // do nothing
      console.log('click');
    } else {
      closeMenuClick();
    }

  });
}

// Close menu when clicking a list item
var navMenuItems = document.querySelectorAll('.navbar-menu .navbar-item');
for (i = 0; i < navMenuItems.length; i++) {
  navMenuItems[i].addEventListener('click', function() {

    if (this.parentNode.classList.contains('is-active')) {
      this.parentNode.classList.remove('is-active'); // hide menu

      var hamburger = document.querySelector('.navbar-burger'); // get hamburger
      hamburger.classList.remove('is-active'); // change x to hamburger
    }

  });
}


// Event listeners
// Add navbar hamburger functionality and 'X' animation
document.addEventListener('DOMContentLoaded', function() {
  toggleMenu();
});
