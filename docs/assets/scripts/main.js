/*! Copyright (c) 2016 Naufal Rabbani (http://github.com/BosNaufal)
* Licensed Under MIT (http://opensource.org/licenses/MIT)
*
* Click Outside JS - Version@0.0.1
*
*/
(function(){function a(a,b){this.evt=function(c){var d=a.contains(c.target);if(c.target!=a&&!d)return b?b():null};document.addEventListener("click",this.evt,!1);return this}a.prototype.remove=function(){document.removeEventListener("click",this.evt,!1)};a.prototype.reinit=function(){document.addEventListener("click",this.evt,!1)};"object"===typeof module&&"object"===typeof exports?module.exports=a:"function"===typeof define&&define.amd?define([],a):"object"===typeof exports?exports.onClickOutside=
a:window.onClickOutside=a})();

/*! smooth-scroll v12.1.5 | (c) 2017 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),o=this;do{for(t=n.length;--t>=0&&n.item(t)!==o;);}while(t<0&&(o=o.parentElement));return o}),(function(){for(var e=0,t=["ms","moz","webkit","o"],n=0;n<t.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,n){var o=(new Date).getTime(),i=Math.max(0,16-(o-e)),a=window.setTimeout((function(){t(o+i)}),i);return e=o+i,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})})(),(function(e,t){"function"==typeof define&&define.amd?define([],(function(){return t(e)})):"object"==typeof exports?module.exports=t(e):e.SmoothScroll=t(e)})("undefined"!=typeof global?global:"undefined"!=typeof window?window:this,(function(e){"use strict";var t="querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype,n={ignore:"[data-scroll-ignore]",header:null,speed:500,offset:0,easing:"easeInOutCubic",customEasing:null,before:function(){},after:function(){}},o=function(){for(var e={},t=0,n=arguments.length;t<n;t++){var o=arguments[t];!(function(t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(o)}return e},i=function(t){return parseInt(e.getComputedStyle(t).height,10)},a=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,i=-1,a="",r=n.charCodeAt(0);++i<o;){if(0===(t=n.charCodeAt(i)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");t>=1&&t<=31||127==t||0===i&&t>=48&&t<=57||1===i&&t>=48&&t<=57&&45===r?a+="\\"+t.toString(16)+" ":a+=t>=128||45===t||95===t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122?n.charAt(i):"\\"+n.charAt(i)}return"#"+a},r=function(e,t){var n;return"easeInQuad"===e.easing&&(n=t*t),"easeOutQuad"===e.easing&&(n=t*(2-t)),"easeInOutQuad"===e.easing&&(n=t<.5?2*t*t:(4-2*t)*t-1),"easeInCubic"===e.easing&&(n=t*t*t),"easeOutCubic"===e.easing&&(n=--t*t*t+1),"easeInOutCubic"===e.easing&&(n=t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e.easing&&(n=t*t*t*t),"easeOutQuart"===e.easing&&(n=1- --t*t*t*t),"easeInOutQuart"===e.easing&&(n=t<.5?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e.easing&&(n=t*t*t*t*t),"easeOutQuint"===e.easing&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e.easing&&(n=t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t),e.customEasing&&(n=e.customEasing(t)),n||t},u=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},c=function(e,t,n){var o=0;if(e.offsetParent)do{o+=e.offsetTop,e=e.offsetParent}while(e);return o=Math.max(o-t-n,0)},l=function(e){return e?i(e)+e.offsetTop:0},s=function(t,n,o){o||(t.focus(),document.activeElement.id!==t.id&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,n))},d=function(t){return!!("matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches)};return function(i,f){var m,h,g,w,p,v,y,b={};b.cancelScroll=function(){cancelAnimationFrame(y)},b.animateScroll=function(t,i,a){var d=o(m||n,a||{}),f="[object Number]"===Object.prototype.toString.call(t),h=f||!t.tagName?null:t;if(f||h){var g=e.pageYOffset;d.header&&!w&&(w=document.querySelector(d.header)),p||(p=l(w));var v,y,A,E=f?t:c(h,p,parseInt("function"==typeof d.offset?d.offset():d.offset,10)),S=E-g,I=u(),q=0,F=function(n,o){var a=e.pageYOffset;if(n==o||a==o||(g<o&&e.innerHeight+a)>=I)return b.cancelScroll(),s(t,o,f),d.after(t,i),v=null,!0},O=function(t){v||(v=t),q+=t-v,y=q/parseInt(d.speed,10),y=y>1?1:y,A=g+S*r(d,y),e.scrollTo(0,Math.floor(A)),F(A,E)||(e.requestAnimationFrame(O),v=t)};0===e.pageYOffset&&e.scrollTo(0,0),d.before(t,i),b.cancelScroll(),e.requestAnimationFrame(O)}};var A=function(e){h&&(h.id=h.getAttribute("data-scroll-id"),b.animateScroll(h,g),h=null,g=null)},E=function(t){if(!d()&&0===t.button&&!t.metaKey&&!t.ctrlKey&&(g=t.target.closest(i))&&"a"===g.tagName.toLowerCase()&&!t.target.closest(m.ignore)&&g.hostname===e.location.hostname&&g.pathname===e.location.pathname&&/#/.test(g.href)){var n;try{n=a(decodeURIComponent(g.hash))}catch(e){n=a(g.hash)}if("#"===n){t.preventDefault(),h=document.body;var o=h.id?h.id:"smooth-scroll-top";return h.setAttribute("data-scroll-id",o),h.id="",void(e.location.hash.substring(1)===o?A():e.location.hash=o)}h=document.querySelector(n),h&&(h.setAttribute("data-scroll-id",h.id),h.id="",g.hash===e.location.hash&&(t.preventDefault(),A()))}},S=function(e){v||(v=setTimeout((function(){v=null,p=l(w)}),66))};return b.destroy=function(){m&&(document.removeEventListener("click",E,!1),e.removeEventListener("resize",S,!1),b.cancelScroll(),m=null,h=null,g=null,w=null,p=null,v=null,y=null)},b.init=function(i){t&&(b.destroy(),m=o(n,i||{}),w=m.header?document.querySelector(m.header):null,p=l(w),document.addEventListener("click",E,!1),e.addEventListener("hashchange",A,!1),w&&e.addEventListener("resize",S,!1))},b.init(f),b}}));
// Get elements
var navbar       = document.querySelector('.navbar'),
    navbarBurger = document.querySelectorAll('.navbar-burger'),
    navbarMenu   = document.querySelector('.navbar-menu'),
    navMenuItems = document.querySelectorAll('.navbar-menu .navbar-item');

// var navbar = document.getElementsByClassName('navbar'),
//     navbarBurger = document.getElementsByClassName('navbar-burger'),
//     navbarMenu = document.getElementsByClassName('navbar-menu'),
//     navMenuItems = document.querySelectorAll('.navbar-menu .navbar-item');

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

function closeMenuOnLinkClick() {
  navMenuItems[i].addEventListener('click', function() {

    if (this.parentNode.classList.contains('is-active')) {
      this.parentNode.classList.remove('is-active'); // hide menu

      var hamburger = document.querySelector('.navbar-burger'); // get hamburger
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
    console.log("outside!");
    // navbarMenu.classList.remove('is-active');
    // navbarBurger.classList.remove('is-active');
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

var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800,
  offset: 0,
  easing: 'easeInOutCubic'
});


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWNrLW91dHNpZGUubWluLmpzIiwic21vb3RoLXNjcm9sbC5wb2x5ZmlsbHMubWluLmpzIiwibmF2LWhhbWJ1cmdlci5qcyIsInNjcm9sbC10by10b3AuanMiLCJ0aGFua3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUkE7QUFDQTtBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNMQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohIENvcHlyaWdodCAoYykgMjAxNiBOYXVmYWwgUmFiYmFuaSAoaHR0cDovL2dpdGh1Yi5jb20vQm9zTmF1ZmFsKVxuKiBMaWNlbnNlZCBVbmRlciBNSVQgKGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQpXG4qXG4qIENsaWNrIE91dHNpZGUgSlMgLSBWZXJzaW9uQDAuMC4xXG4qXG4qL1xuKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYShhLGIpe3RoaXMuZXZ0PWZ1bmN0aW9uKGMpe3ZhciBkPWEuY29udGFpbnMoYy50YXJnZXQpO2lmKGMudGFyZ2V0IT1hJiYhZClyZXR1cm4gYj9iKCk6bnVsbH07ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdGhpcy5ldnQsITEpO3JldHVybiB0aGlzfWEucHJvdG90eXBlLnJlbW92ZT1mdW5jdGlvbigpe2RvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHRoaXMuZXZ0LCExKX07YS5wcm90b3R5cGUucmVpbml0PWZ1bmN0aW9uKCl7ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdGhpcy5ldnQsITEpfTtcIm9iamVjdFwiPT09dHlwZW9mIG1vZHVsZSYmXCJvYmplY3RcIj09PXR5cGVvZiBleHBvcnRzP21vZHVsZS5leHBvcnRzPWE6XCJmdW5jdGlvblwiPT09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sYSk6XCJvYmplY3RcIj09PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMub25DbGlja091dHNpZGU9XG5hOndpbmRvdy5vbkNsaWNrT3V0c2lkZT1hfSkoKTtcbiIsIi8qISBzbW9vdGgtc2Nyb2xsIHYxMi4xLjUgfCAoYykgMjAxNyBDaHJpcyBGZXJkaW5hbmRpIHwgTUlUIExpY2Vuc2UgfCBodHRwOi8vZ2l0aHViLmNvbS9jZmVyZGluYW5kaS9zbW9vdGgtc2Nyb2xsICovXG53aW5kb3cuRWxlbWVudCYmIUVsZW1lbnQucHJvdG90eXBlLmNsb3Nlc3QmJihFbGVtZW50LnByb3RvdHlwZS5jbG9zZXN0PWZ1bmN0aW9uKGUpe3ZhciB0LG49KHRoaXMuZG9jdW1lbnR8fHRoaXMub3duZXJEb2N1bWVudCkucXVlcnlTZWxlY3RvckFsbChlKSxvPXRoaXM7ZG97Zm9yKHQ9bi5sZW5ndGg7LS10Pj0wJiZuLml0ZW0odCkhPT1vOyk7fXdoaWxlKHQ8MCYmKG89by5wYXJlbnRFbGVtZW50KSk7cmV0dXJuIG99KSwoZnVuY3Rpb24oKXtmb3IodmFyIGU9MCx0PVtcIm1zXCIsXCJtb3pcIixcIndlYmtpdFwiLFwib1wiXSxuPTA7bjx0Lmxlbmd0aCYmIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7KytuKXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU9d2luZG93W3Rbbl0rXCJSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcIl0sd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lPXdpbmRvd1t0W25dK1wiQ2FuY2VsQW5pbWF0aW9uRnJhbWVcIl18fHdpbmRvd1t0W25dK1wiQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lXCJdO3dpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fCh3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lPWZ1bmN0aW9uKHQsbil7dmFyIG89KG5ldyBEYXRlKS5nZXRUaW1lKCksaT1NYXRoLm1heCgwLDE2LShvLWUpKSxhPXdpbmRvdy5zZXRUaW1lb3V0KChmdW5jdGlvbigpe3QobytpKX0pLGkpO3JldHVybiBlPW8raSxhfSksd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lfHwod2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lPWZ1bmN0aW9uKGUpe2NsZWFyVGltZW91dChlKX0pfSkoKSwoZnVuY3Rpb24oZSx0KXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLChmdW5jdGlvbigpe3JldHVybiB0KGUpfSkpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP21vZHVsZS5leHBvcnRzPXQoZSk6ZS5TbW9vdGhTY3JvbGw9dChlKX0pKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWw/Z2xvYmFsOlwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OnRoaXMsKGZ1bmN0aW9uKGUpe1widXNlIHN0cmljdFwiO3ZhciB0PVwicXVlcnlTZWxlY3RvclwiaW4gZG9jdW1lbnQmJlwiYWRkRXZlbnRMaXN0ZW5lclwiaW4gZSYmXCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWVcImluIGUmJlwiY2xvc2VzdFwiaW4gZS5FbGVtZW50LnByb3RvdHlwZSxuPXtpZ25vcmU6XCJbZGF0YS1zY3JvbGwtaWdub3JlXVwiLGhlYWRlcjpudWxsLHNwZWVkOjUwMCxvZmZzZXQ6MCxlYXNpbmc6XCJlYXNlSW5PdXRDdWJpY1wiLGN1c3RvbUVhc2luZzpudWxsLGJlZm9yZTpmdW5jdGlvbigpe30sYWZ0ZXI6ZnVuY3Rpb24oKXt9fSxvPWZ1bmN0aW9uKCl7Zm9yKHZhciBlPXt9LHQ9MCxuPWFyZ3VtZW50cy5sZW5ndGg7dDxuO3QrKyl7dmFyIG89YXJndW1lbnRzW3RdOyEoZnVuY3Rpb24odCl7Zm9yKHZhciBuIGluIHQpdC5oYXNPd25Qcm9wZXJ0eShuKSYmKGVbbl09dFtuXSl9KShvKX1yZXR1cm4gZX0saT1mdW5jdGlvbih0KXtyZXR1cm4gcGFyc2VJbnQoZS5nZXRDb21wdXRlZFN0eWxlKHQpLmhlaWdodCwxMCl9LGE9ZnVuY3Rpb24oZSl7XCIjXCI9PT1lLmNoYXJBdCgwKSYmKGU9ZS5zdWJzdHIoMSkpO2Zvcih2YXIgdCxuPVN0cmluZyhlKSxvPW4ubGVuZ3RoLGk9LTEsYT1cIlwiLHI9bi5jaGFyQ29kZUF0KDApOysraTxvOyl7aWYoMD09PSh0PW4uY2hhckNvZGVBdChpKSkpdGhyb3cgbmV3IEludmFsaWRDaGFyYWN0ZXJFcnJvcihcIkludmFsaWQgY2hhcmFjdGVyOiB0aGUgaW5wdXQgY29udGFpbnMgVSswMDAwLlwiKTt0Pj0xJiZ0PD0zMXx8MTI3PT10fHwwPT09aSYmdD49NDgmJnQ8PTU3fHwxPT09aSYmdD49NDgmJnQ8PTU3JiY0NT09PXI/YSs9XCJcXFxcXCIrdC50b1N0cmluZygxNikrXCIgXCI6YSs9dD49MTI4fHw0NT09PXR8fDk1PT09dHx8dD49NDgmJnQ8PTU3fHx0Pj02NSYmdDw9OTB8fHQ+PTk3JiZ0PD0xMjI/bi5jaGFyQXQoaSk6XCJcXFxcXCIrbi5jaGFyQXQoaSl9cmV0dXJuXCIjXCIrYX0scj1mdW5jdGlvbihlLHQpe3ZhciBuO3JldHVyblwiZWFzZUluUXVhZFwiPT09ZS5lYXNpbmcmJihuPXQqdCksXCJlYXNlT3V0UXVhZFwiPT09ZS5lYXNpbmcmJihuPXQqKDItdCkpLFwiZWFzZUluT3V0UXVhZFwiPT09ZS5lYXNpbmcmJihuPXQ8LjU/Mip0KnQ6KDQtMip0KSp0LTEpLFwiZWFzZUluQ3ViaWNcIj09PWUuZWFzaW5nJiYobj10KnQqdCksXCJlYXNlT3V0Q3ViaWNcIj09PWUuZWFzaW5nJiYobj0tLXQqdCp0KzEpLFwiZWFzZUluT3V0Q3ViaWNcIj09PWUuZWFzaW5nJiYobj10PC41PzQqdCp0KnQ6KHQtMSkqKDIqdC0yKSooMip0LTIpKzEpLFwiZWFzZUluUXVhcnRcIj09PWUuZWFzaW5nJiYobj10KnQqdCp0KSxcImVhc2VPdXRRdWFydFwiPT09ZS5lYXNpbmcmJihuPTEtIC0tdCp0KnQqdCksXCJlYXNlSW5PdXRRdWFydFwiPT09ZS5lYXNpbmcmJihuPXQ8LjU/OCp0KnQqdCp0OjEtOCotLXQqdCp0KnQpLFwiZWFzZUluUXVpbnRcIj09PWUuZWFzaW5nJiYobj10KnQqdCp0KnQpLFwiZWFzZU91dFF1aW50XCI9PT1lLmVhc2luZyYmKG49MSstLXQqdCp0KnQqdCksXCJlYXNlSW5PdXRRdWludFwiPT09ZS5lYXNpbmcmJihuPXQ8LjU/MTYqdCp0KnQqdCp0OjErMTYqLS10KnQqdCp0KnQpLGUuY3VzdG9tRWFzaW5nJiYobj1lLmN1c3RvbUVhc2luZyh0KSksbnx8dH0sdT1mdW5jdGlvbigpe3JldHVybiBNYXRoLm1heChkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0LGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0LGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRIZWlnaHQsZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQsZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCl9LGM9ZnVuY3Rpb24oZSx0LG4pe3ZhciBvPTA7aWYoZS5vZmZzZXRQYXJlbnQpZG97bys9ZS5vZmZzZXRUb3AsZT1lLm9mZnNldFBhcmVudH13aGlsZShlKTtyZXR1cm4gbz1NYXRoLm1heChvLXQtbiwwKX0sbD1mdW5jdGlvbihlKXtyZXR1cm4gZT9pKGUpK2Uub2Zmc2V0VG9wOjB9LHM9ZnVuY3Rpb24odCxuLG8pe298fCh0LmZvY3VzKCksZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5pZCE9PXQuaWQmJih0LnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsXCItMVwiKSx0LmZvY3VzKCksdC5zdHlsZS5vdXRsaW5lPVwibm9uZVwiKSxlLnNjcm9sbFRvKDAsbikpfSxkPWZ1bmN0aW9uKHQpe3JldHVybiEhKFwibWF0Y2hNZWRpYVwiaW4gZSYmZS5tYXRjaE1lZGlhKFwiKHByZWZlcnMtcmVkdWNlZC1tb3Rpb24pXCIpLm1hdGNoZXMpfTtyZXR1cm4gZnVuY3Rpb24oaSxmKXt2YXIgbSxoLGcsdyxwLHYseSxiPXt9O2IuY2FuY2VsU2Nyb2xsPWZ1bmN0aW9uKCl7Y2FuY2VsQW5pbWF0aW9uRnJhbWUoeSl9LGIuYW5pbWF0ZVNjcm9sbD1mdW5jdGlvbih0LGksYSl7dmFyIGQ9byhtfHxuLGF8fHt9KSxmPVwiW29iamVjdCBOdW1iZXJdXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCksaD1mfHwhdC50YWdOYW1lP251bGw6dDtpZihmfHxoKXt2YXIgZz1lLnBhZ2VZT2Zmc2V0O2QuaGVhZGVyJiYhdyYmKHc9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihkLmhlYWRlcikpLHB8fChwPWwodykpO3ZhciB2LHksQSxFPWY/dDpjKGgscCxwYXJzZUludChcImZ1bmN0aW9uXCI9PXR5cGVvZiBkLm9mZnNldD9kLm9mZnNldCgpOmQub2Zmc2V0LDEwKSksUz1FLWcsST11KCkscT0wLEY9ZnVuY3Rpb24obixvKXt2YXIgYT1lLnBhZ2VZT2Zmc2V0O2lmKG49PW98fGE9PW98fChnPG8mJmUuaW5uZXJIZWlnaHQrYSk+PUkpcmV0dXJuIGIuY2FuY2VsU2Nyb2xsKCkscyh0LG8sZiksZC5hZnRlcih0LGkpLHY9bnVsbCwhMH0sTz1mdW5jdGlvbih0KXt2fHwodj10KSxxKz10LXYseT1xL3BhcnNlSW50KGQuc3BlZWQsMTApLHk9eT4xPzE6eSxBPWcrUypyKGQseSksZS5zY3JvbGxUbygwLE1hdGguZmxvb3IoQSkpLEYoQSxFKXx8KGUucmVxdWVzdEFuaW1hdGlvbkZyYW1lKE8pLHY9dCl9OzA9PT1lLnBhZ2VZT2Zmc2V0JiZlLnNjcm9sbFRvKDAsMCksZC5iZWZvcmUodCxpKSxiLmNhbmNlbFNjcm9sbCgpLGUucmVxdWVzdEFuaW1hdGlvbkZyYW1lKE8pfX07dmFyIEE9ZnVuY3Rpb24oZSl7aCYmKGguaWQ9aC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNjcm9sbC1pZFwiKSxiLmFuaW1hdGVTY3JvbGwoaCxnKSxoPW51bGwsZz1udWxsKX0sRT1mdW5jdGlvbih0KXtpZighZCgpJiYwPT09dC5idXR0b24mJiF0Lm1ldGFLZXkmJiF0LmN0cmxLZXkmJihnPXQudGFyZ2V0LmNsb3Nlc3QoaSkpJiZcImFcIj09PWcudGFnTmFtZS50b0xvd2VyQ2FzZSgpJiYhdC50YXJnZXQuY2xvc2VzdChtLmlnbm9yZSkmJmcuaG9zdG5hbWU9PT1lLmxvY2F0aW9uLmhvc3RuYW1lJiZnLnBhdGhuYW1lPT09ZS5sb2NhdGlvbi5wYXRobmFtZSYmLyMvLnRlc3QoZy5ocmVmKSl7dmFyIG47dHJ5e249YShkZWNvZGVVUklDb21wb25lbnQoZy5oYXNoKSl9Y2F0Y2goZSl7bj1hKGcuaGFzaCl9aWYoXCIjXCI9PT1uKXt0LnByZXZlbnREZWZhdWx0KCksaD1kb2N1bWVudC5ib2R5O3ZhciBvPWguaWQ/aC5pZDpcInNtb290aC1zY3JvbGwtdG9wXCI7cmV0dXJuIGguc2V0QXR0cmlidXRlKFwiZGF0YS1zY3JvbGwtaWRcIixvKSxoLmlkPVwiXCIsdm9pZChlLmxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpPT09bz9BKCk6ZS5sb2NhdGlvbi5oYXNoPW8pfWg9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihuKSxoJiYoaC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNjcm9sbC1pZFwiLGguaWQpLGguaWQ9XCJcIixnLmhhc2g9PT1lLmxvY2F0aW9uLmhhc2gmJih0LnByZXZlbnREZWZhdWx0KCksQSgpKSl9fSxTPWZ1bmN0aW9uKGUpe3Z8fCh2PXNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7dj1udWxsLHA9bCh3KX0pLDY2KSl9O3JldHVybiBiLmRlc3Ryb3k9ZnVuY3Rpb24oKXttJiYoZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsRSwhMSksZS5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsUywhMSksYi5jYW5jZWxTY3JvbGwoKSxtPW51bGwsaD1udWxsLGc9bnVsbCx3PW51bGwscD1udWxsLHY9bnVsbCx5PW51bGwpfSxiLmluaXQ9ZnVuY3Rpb24oaSl7dCYmKGIuZGVzdHJveSgpLG09byhuLGl8fHt9KSx3PW0uaGVhZGVyP2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobS5oZWFkZXIpOm51bGwscD1sKHcpLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLEUsITEpLGUuYWRkRXZlbnRMaXN0ZW5lcihcImhhc2hjaGFuZ2VcIixBLCExKSx3JiZlLmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIixTLCExKSl9LGIuaW5pdChmKSxifX0pKTsiLCIvLyBHZXQgZWxlbWVudHNcbnZhciBuYXZiYXIgICAgICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyJyksXG4gICAgbmF2YmFyQnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdmJhci1idXJnZXInKSxcbiAgICBuYXZiYXJNZW51ICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyLW1lbnUnKSxcbiAgICBuYXZNZW51SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2YmFyLW1lbnUgLm5hdmJhci1pdGVtJyk7XG5cbi8vIHZhciBuYXZiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduYXZiYXInKSxcbi8vICAgICBuYXZiYXJCdXJnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduYXZiYXItYnVyZ2VyJyksXG4vLyAgICAgbmF2YmFyTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25hdmJhci1tZW51JyksXG4vLyAgICAgbmF2TWVudUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdmJhci1tZW51IC5uYXZiYXItaXRlbScpO1xuXG4vLyBEZWNsYXJlIGZ1bmN0aW9uc1xuZnVuY3Rpb24gdG9nZ2xlTWVudSgpIHtcbiAgLy8gQ2hlY2sgaWYgdGhlcmUgYXJlIGFueSBuYXZiYXIgYnVyZ2Vyc1xuICBpZihuYXZiYXJCdXJnZXIubGVuZ3RoID4gMCkge1xuXG4gICAgLy8gQWRkIGEgY2xpY2sgZXZlbnQgb24gZWFjaCBpdGVtXG4gICAgbmF2YmFyQnVyZ2VyLmZvckVhY2goZnVuY3Rpb24oJGVsKSB7XG4gICAgICAkZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgdGFyZ2V0ID0gJGVsLmRhdGFzZXQudGFyZ2V0OyAvLyBkYXRhLXRhcmdldD1cIm5hdk1lbnVcIlxuICAgICAgICB2YXIgJHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldCk7IC8vIGlkPVwibmF2TWVudVwiXG5cbiAgICAgICAgJGVsLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpOyAvLyB0b2dnbGUgbmF2IGljb25cbiAgICAgICAgJHRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTsgLy8gdG9nZ2xlIG5hdiBtZW51XG4gICAgICB9KTtcblxuICAgIH0pO1xuXG4gIH1cbn1cblxuZnVuY3Rpb24gY2xvc2VNZW51T25MaW5rQ2xpY2soKSB7XG4gIG5hdk1lbnVJdGVtc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXG4gICAgaWYgKHRoaXMucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWFjdGl2ZScpKSB7XG4gICAgICB0aGlzLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7IC8vIGhpZGUgbWVudVxuXG4gICAgICB2YXIgaGFtYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhci1idXJnZXInKTsgLy8gZ2V0IGhhbWJ1cmdlclxuICAgICAgaGFtYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpOyAvLyBjaGFuZ2UgeCB0byBoYW1idXJnZXJcbiAgICB9XG5cbiAgfSk7XG59XG5cbi8vIC8vQ2xvc2UgbWVudSB3aXRoIGNsaWNrIG91dHNpZGUgb2YgbWVudVxuLy8gZnVuY3Rpb24gY2xvc2VNZW51b25PdXRzaWRlQ2xpY2soKSB7XG4vLyAgIGZvciAoaSA9IDA7IGkgPCBuYXZiYXJNZW51Lmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgbmF2YmFyTWVudVtpXS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24oZXZlbnQpIHtcbi8vICAgICAgIGlmIChldmVudC50YXJnZXQuY2xvc2VzdCgnLm5hdmJhcicpKSB7XG4vLyAgICAgICAgIC8vIG5hdmJhck1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4vLyAgICAgICAgIC8vIG5hdmJhckJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcbi8vICAgICAgICAgLy8gZG8gbm90aGluZ1xuLy8gICAgICAgICBjb25zb2xlLmxvZygnY2xpY2sgb3V0c2lkZScpO1xuLy8gICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgbmF2YmFyTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcbi8vICAgICAgICAgbmF2YmFyQnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuLy8gICAgICAgICAvLyBjbG9zZU1lbnVDbGljaygpO1xuLy8gICAgICAgfVxuLy9cbi8vICAgICB9KTtcbi8vICAgfVxuLy8gfVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICB2YXIgaXNDbGlja0luc2lkZSA9IG5hdmJhci5jb250YWlucyhldmVudC50YXJnZXQpO1xuXG4gIGlmICghaXNDbGlja0luc2lkZSkge1xuICAgIGNvbnNvbGUubG9nKFwib3V0c2lkZSFcIik7XG4gICAgLy8gbmF2YmFyTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcbiAgICAvLyBuYXZiYXJCdXJnZXIuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gIH1cbn0pO1xuXG4vLyBDbG9zZSBtZW51IHdoZW4gY2xpY2tpbmcgYSBsaXN0IGl0ZW1cbmZvciAoaSA9IDA7IGkgPCBuYXZNZW51SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgY2xvc2VNZW51T25MaW5rQ2xpY2soKTtcbn1cblxuXG5cbi8vIEV2ZW50IGxpc3RlbmVyc1xuLy8gQWRkIG5hdmJhciBoYW1idXJnZXIgZnVuY3Rpb25hbGl0eSBhbmQgJ1gnIGFuaW1hdGlvblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICB0b2dnbGVNZW51KCk7XG59KTtcblxuLy8gQ2xvc2UgbWVudSB3aGVuIG9wZW4gdXNpbmcgRVNDIGtleSwgdG9nZ2xlIFhcbmRvY3VtZW50Lm9ua2V5ZG93biA9IGZ1bmN0aW9uKGV2dCkge1xuICBldnQgPSBldnQgfHwgd2luZG93LmV2ZW50O1xuXG4gIGlmIChuYXZiYXJCdXJnZXIubGVuZ3RoID4gMCkge1xuICAgIG5hdmJhckJ1cmdlci5mb3JFYWNoKGZ1bmN0aW9uKCRlbCkge1xuICAgICAgaWYgKGV2dC5rZXlDb2RlID09IDI3KSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSAkZWwuZGF0YXNldC50YXJnZXQ7XG4gICAgICAgIHZhciAkdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0KTtcblxuICAgICAgICBpZiAoJGVsLmNsYXNzTGlzdC5jb250YWlucygnaXMtYWN0aXZlJykgJiYgJHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWFjdGl2ZScpKSB7XG4gICAgICAgICAgJGVsLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICR0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcbiIsInZhciBzY3JvbGwgPSBuZXcgU21vb3RoU2Nyb2xsKCdhW2hyZWYqPVwiI1wiXScsIHtcbiAgc3BlZWQ6IDgwMCxcbiAgb2Zmc2V0OiAwLFxuICBlYXNpbmc6ICdlYXNlSW5PdXRDdWJpYydcbn0pO1xuIiwiIl19
