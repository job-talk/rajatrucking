// Navbar hamburger
document.addEventListener('DOMContentLoaded', function() {

  // Get all 'navbar-burger' elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

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

  var burger = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  if (burger.length > 0) {

    burger.forEach(function($el) {
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
