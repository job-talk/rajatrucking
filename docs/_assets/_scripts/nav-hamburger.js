// Get elements
var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);


// Add navbar hamburger functionality and 'X' animation
document.addEventListener('DOMContentLoaded', function() {

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each item
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function() {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });

    });
  }

});


// Close menu when open using ESC key, toggle X
document.onkeydown = function(evt) {
  evt = evt || window.event;

  if ($navbarBurgers.length > 0) {

    $navbarBurgers.forEach(function($el) {
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


// Close menu with click outside of menu
//
// var navbarMenu = document.querySelector('.navbar-menu');
//
// document.addEventListener('click', function(event) {
//   if (event.target !== navbarMenu) {
//     navbarMenu.classList.remove('is-active');
//   }
// });

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
