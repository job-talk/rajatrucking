/*! smooth-scroll v12.1.5 | (c) 2017 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),o=this;do{for(t=n.length;--t>=0&&n.item(t)!==o;);}while(t<0&&(o=o.parentElement));return o}),(function(){for(var e=0,t=["ms","moz","webkit","o"],n=0;n<t.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,n){var o=(new Date).getTime(),i=Math.max(0,16-(o-e)),a=window.setTimeout((function(){t(o+i)}),i);return e=o+i,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})})(),(function(e,t){"function"==typeof define&&define.amd?define([],(function(){return t(e)})):"object"==typeof exports?module.exports=t(e):e.SmoothScroll=t(e)})("undefined"!=typeof global?global:"undefined"!=typeof window?window:this,(function(e){"use strict";var t="querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype,n={ignore:"[data-scroll-ignore]",header:null,speed:500,offset:0,easing:"easeInOutCubic",customEasing:null,before:function(){},after:function(){}},o=function(){for(var e={},t=0,n=arguments.length;t<n;t++){var o=arguments[t];!(function(t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(o)}return e},i=function(t){return parseInt(e.getComputedStyle(t).height,10)},a=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,i=-1,a="",r=n.charCodeAt(0);++i<o;){if(0===(t=n.charCodeAt(i)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");t>=1&&t<=31||127==t||0===i&&t>=48&&t<=57||1===i&&t>=48&&t<=57&&45===r?a+="\\"+t.toString(16)+" ":a+=t>=128||45===t||95===t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122?n.charAt(i):"\\"+n.charAt(i)}return"#"+a},r=function(e,t){var n;return"easeInQuad"===e.easing&&(n=t*t),"easeOutQuad"===e.easing&&(n=t*(2-t)),"easeInOutQuad"===e.easing&&(n=t<.5?2*t*t:(4-2*t)*t-1),"easeInCubic"===e.easing&&(n=t*t*t),"easeOutCubic"===e.easing&&(n=--t*t*t+1),"easeInOutCubic"===e.easing&&(n=t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e.easing&&(n=t*t*t*t),"easeOutQuart"===e.easing&&(n=1- --t*t*t*t),"easeInOutQuart"===e.easing&&(n=t<.5?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e.easing&&(n=t*t*t*t*t),"easeOutQuint"===e.easing&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e.easing&&(n=t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t),e.customEasing&&(n=e.customEasing(t)),n||t},u=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},c=function(e,t,n){var o=0;if(e.offsetParent)do{o+=e.offsetTop,e=e.offsetParent}while(e);return o=Math.max(o-t-n,0)},l=function(e){return e?i(e)+e.offsetTop:0},s=function(t,n,o){o||(t.focus(),document.activeElement.id!==t.id&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,n))},d=function(t){return!!("matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches)};return function(i,f){var m,h,g,w,p,v,y,b={};b.cancelScroll=function(){cancelAnimationFrame(y)},b.animateScroll=function(t,i,a){var d=o(m||n,a||{}),f="[object Number]"===Object.prototype.toString.call(t),h=f||!t.tagName?null:t;if(f||h){var g=e.pageYOffset;d.header&&!w&&(w=document.querySelector(d.header)),p||(p=l(w));var v,y,A,E=f?t:c(h,p,parseInt("function"==typeof d.offset?d.offset():d.offset,10)),S=E-g,I=u(),q=0,F=function(n,o){var a=e.pageYOffset;if(n==o||a==o||(g<o&&e.innerHeight+a)>=I)return b.cancelScroll(),s(t,o,f),d.after(t,i),v=null,!0},O=function(t){v||(v=t),q+=t-v,y=q/parseInt(d.speed,10),y=y>1?1:y,A=g+S*r(d,y),e.scrollTo(0,Math.floor(A)),F(A,E)||(e.requestAnimationFrame(O),v=t)};0===e.pageYOffset&&e.scrollTo(0,0),d.before(t,i),b.cancelScroll(),e.requestAnimationFrame(O)}};var A=function(e){h&&(h.id=h.getAttribute("data-scroll-id"),b.animateScroll(h,g),h=null,g=null)},E=function(t){if(!d()&&0===t.button&&!t.metaKey&&!t.ctrlKey&&(g=t.target.closest(i))&&"a"===g.tagName.toLowerCase()&&!t.target.closest(m.ignore)&&g.hostname===e.location.hostname&&g.pathname===e.location.pathname&&/#/.test(g.href)){var n;try{n=a(decodeURIComponent(g.hash))}catch(e){n=a(g.hash)}if("#"===n){t.preventDefault(),h=document.body;var o=h.id?h.id:"smooth-scroll-top";return h.setAttribute("data-scroll-id",o),h.id="",void(e.location.hash.substring(1)===o?A():e.location.hash=o)}h=document.querySelector(n),h&&(h.setAttribute("data-scroll-id",h.id),h.id="",g.hash===e.location.hash&&(t.preventDefault(),A()))}},S=function(e){v||(v=setTimeout((function(){v=null,p=l(w)}),66))};return b.destroy=function(){m&&(document.removeEventListener("click",E,!1),e.removeEventListener("resize",S,!1),b.cancelScroll(),m=null,h=null,g=null,w=null,p=null,v=null,y=null)},b.init=function(i){t&&(b.destroy(),m=o(n,i||{}),w=m.header?document.querySelector(m.header):null,p=l(w),document.addEventListener("click",E,!1),e.addEventListener("hashchange",A,!1),w&&e.addEventListener("resize",S,!1))},b.init(f),b}}));
// Defer loading of GA script

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();
i.initAnalytics=function(){a=s.createElement(o),m=s.getElementsByTagName(o)[0];
a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
}})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-93252649-1', 'auto');
ga('send', 'pageview');

// Init GA 

initAnalytics();

function validEmail(email) { // see:
  var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return re.test(email);
}

function validateHuman(honeypot) {
  if (honeypot) {  //if hidden form filled up
    console.log("Robot Detected!");
    return true;
  } else {
    console.log("Welcome Human!");
  }
}

// get all data in form and return object
function getFormData() {
  var form = document.getElementById("contact-form");
  var elements = form.elements; // all form elements
  var fields = Object.keys(elements).filter(function(k) {
    return (elements[k].name != 'honeypot');
  }).map(function(k) {
    if(elements[k].name !== undefined) {
      return elements[k].name;
    // special case for Edge's html collection
    }else if(elements[k].length > 0){
      return elements[k].item(0).name;
    }
  }).filter(function(item, pos, self) {
    return self.indexOf(item) == pos && item;
  });
  var data = {};
  fields.forEach(function(k){
    data[k] = elements[k].value;
    var str = ""; // declare empty string outside of loop to allow
                  // it to be appended to for each item in the loop
    if(elements[k].type === "checkbox"){ // special case for Edge's html collection
      str = str + elements[k].checked + ", "; // take the string and append
                                              // the current checked value to
                                              // the end of it, along with
                                              // a comma and a space
      data[k] = str.slice(0, -2); // remove the last comma and space
                                  // from the  string to make the output
                                  // prettier in the spreadsheet
    }else if(elements[k].length){
      for(var i = 0; i < elements[k].length; i++){
        if(elements[k].item(i).checked){
          str = str + elements[k].item(i).value + ", "; // same as above
          data[k] = str.slice(0, -2);
        }
      }
    }
  });

  // add form-specific values into the data
  data.formDataNameOrder = JSON.stringify(fields);
  data.formGoogleSheetName = form.dataset.sheet || "Raja Website - Contact Form"; // default sheet name
  data.formGoogleSendEmail = form.dataset.email || ""; // no email by default

  console.log(data);
  return data;
}

function handleFormSubmit(event) {  // handles form submit withtout any jquery
  event.preventDefault();           // we are submitting via xhr below
  var data = getFormData();         // get the values submitted in the form

  //OPTION: Remove this comment to enable SPAM prevention, see README.md
  if (validateHuman(data.honeypot)) {  //if form is filled, form will not be submitted
    return false;
  }


  if( !validEmail(data.email) ) {   // if email is not valid show error
    document.getElementById('email-invalid').style.display = 'block';
    return false;
  } else {
    var url = event.target.action;  //
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    // xhr.withCredentials = true;
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        console.log( xhr.status, xhr.statusText )
        console.log(xhr.responseText);
        document.getElementById('contact-form').style.display = 'none'; // hide form
        document.getElementById('thankyou_message').style.display = 'block';
        return;
    };
    // url encode form data for sending as post data
    var encoded = Object.keys(data).map(function(k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&')
    xhr.send(encoded);
  }
}
function loaded() {
  //console.log('contact form submission handler loaded successfully');
  // bind to the submit event of our form
  var form = document.getElementById('contact-form');
  form.addEventListener("submit", handleFormSubmit, false);
};
document.addEventListener('DOMContentLoaded', loaded, false);

// Get elements
var navbar       = document.querySelector('.navbar'),
    navbarBurger = document.querySelectorAll('.navbar-burger'),
    navbarMenu   = document.querySelector('.navbar-menu'),
    navMenuItems = document.querySelectorAll('.navbar-menu .navbar-item');
var hamburger = document.querySelector('.navbar-burger'); // get hamburger


// Declare functions
function toggleMenu() {
  if(navbarBurger.length > 0) { //  Check if there are any navbar burgers

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

//Close menu with click outside of menu
document.addEventListener('touchstart', function(event) {
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

var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800,
  offset: 0,
  easing: 'easeOutQuad'
});


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtb290aC1zY3JvbGwucG9seWZpbGxzLm1pbi5qcyIsImFuYWx5dGljcy5qcyIsImZvcm0tc3VibWlzc2lvbi1oYW5kbGVyLmpzIiwibmF2LWhhbWJ1cmdlci5qcyIsInNjcm9sbC10by10b3AuanMiLCJ0aGFua3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNMQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohIHNtb290aC1zY3JvbGwgdjEyLjEuNSB8IChjKSAyMDE3IENocmlzIEZlcmRpbmFuZGkgfCBNSVQgTGljZW5zZSB8IGh0dHA6Ly9naXRodWIuY29tL2NmZXJkaW5hbmRpL3Ntb290aC1zY3JvbGwgKi9cbndpbmRvdy5FbGVtZW50JiYhRWxlbWVudC5wcm90b3R5cGUuY2xvc2VzdCYmKEVsZW1lbnQucHJvdG90eXBlLmNsb3Nlc3Q9ZnVuY3Rpb24oZSl7dmFyIHQsbj0odGhpcy5kb2N1bWVudHx8dGhpcy5vd25lckRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKGUpLG89dGhpcztkb3tmb3IodD1uLmxlbmd0aDstLXQ+PTAmJm4uaXRlbSh0KSE9PW87KTt9d2hpbGUodDwwJiYobz1vLnBhcmVudEVsZW1lbnQpKTtyZXR1cm4gb30pLChmdW5jdGlvbigpe2Zvcih2YXIgZT0wLHQ9W1wibXNcIixcIm1velwiLFwid2Via2l0XCIsXCJvXCJdLG49MDtuPHQubGVuZ3RoJiYhd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTsrK24pd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZT13aW5kb3dbdFtuXStcIlJlcXVlc3RBbmltYXRpb25GcmFtZVwiXSx3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWU9d2luZG93W3Rbbl0rXCJDYW5jZWxBbmltYXRpb25GcmFtZVwiXXx8d2luZG93W3Rbbl0rXCJDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcIl07d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZXx8KHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU9ZnVuY3Rpb24odCxuKXt2YXIgbz0obmV3IERhdGUpLmdldFRpbWUoKSxpPU1hdGgubWF4KDAsMTYtKG8tZSkpLGE9d2luZG93LnNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7dChvK2kpfSksaSk7cmV0dXJuIGU9bytpLGF9KSx3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWV8fCh3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWU9ZnVuY3Rpb24oZSl7Y2xlYXJUaW1lb3V0KGUpfSl9KSgpLChmdW5jdGlvbihlLHQpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sKGZ1bmN0aW9uKCl7cmV0dXJuIHQoZSl9KSk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9dChlKTplLlNtb290aFNjcm9sbD10KGUpfSkoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbD9nbG9iYWw6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6dGhpcywoZnVuY3Rpb24oZSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHQ9XCJxdWVyeVNlbGVjdG9yXCJpbiBkb2N1bWVudCYmXCJhZGRFdmVudExpc3RlbmVyXCJpbiBlJiZcInJlcXVlc3RBbmltYXRpb25GcmFtZVwiaW4gZSYmXCJjbG9zZXN0XCJpbiBlLkVsZW1lbnQucHJvdG90eXBlLG49e2lnbm9yZTpcIltkYXRhLXNjcm9sbC1pZ25vcmVdXCIsaGVhZGVyOm51bGwsc3BlZWQ6NTAwLG9mZnNldDowLGVhc2luZzpcImVhc2VJbk91dEN1YmljXCIsY3VzdG9tRWFzaW5nOm51bGwsYmVmb3JlOmZ1bmN0aW9uKCl7fSxhZnRlcjpmdW5jdGlvbigpe319LG89ZnVuY3Rpb24oKXtmb3IodmFyIGU9e30sdD0wLG49YXJndW1lbnRzLmxlbmd0aDt0PG47dCsrKXt2YXIgbz1hcmd1bWVudHNbdF07IShmdW5jdGlvbih0KXtmb3IodmFyIG4gaW4gdCl0Lmhhc093blByb3BlcnR5KG4pJiYoZVtuXT10W25dKX0pKG8pfXJldHVybiBlfSxpPWZ1bmN0aW9uKHQpe3JldHVybiBwYXJzZUludChlLmdldENvbXB1dGVkU3R5bGUodCkuaGVpZ2h0LDEwKX0sYT1mdW5jdGlvbihlKXtcIiNcIj09PWUuY2hhckF0KDApJiYoZT1lLnN1YnN0cigxKSk7Zm9yKHZhciB0LG49U3RyaW5nKGUpLG89bi5sZW5ndGgsaT0tMSxhPVwiXCIscj1uLmNoYXJDb2RlQXQoMCk7KytpPG87KXtpZigwPT09KHQ9bi5jaGFyQ29kZUF0KGkpKSl0aHJvdyBuZXcgSW52YWxpZENoYXJhY3RlckVycm9yKFwiSW52YWxpZCBjaGFyYWN0ZXI6IHRoZSBpbnB1dCBjb250YWlucyBVKzAwMDAuXCIpO3Q+PTEmJnQ8PTMxfHwxMjc9PXR8fDA9PT1pJiZ0Pj00OCYmdDw9NTd8fDE9PT1pJiZ0Pj00OCYmdDw9NTcmJjQ1PT09cj9hKz1cIlxcXFxcIit0LnRvU3RyaW5nKDE2KStcIiBcIjphKz10Pj0xMjh8fDQ1PT09dHx8OTU9PT10fHx0Pj00OCYmdDw9NTd8fHQ+PTY1JiZ0PD05MHx8dD49OTcmJnQ8PTEyMj9uLmNoYXJBdChpKTpcIlxcXFxcIituLmNoYXJBdChpKX1yZXR1cm5cIiNcIithfSxyPWZ1bmN0aW9uKGUsdCl7dmFyIG47cmV0dXJuXCJlYXNlSW5RdWFkXCI9PT1lLmVhc2luZyYmKG49dCp0KSxcImVhc2VPdXRRdWFkXCI9PT1lLmVhc2luZyYmKG49dCooMi10KSksXCJlYXNlSW5PdXRRdWFkXCI9PT1lLmVhc2luZyYmKG49dDwuNT8yKnQqdDooNC0yKnQpKnQtMSksXCJlYXNlSW5DdWJpY1wiPT09ZS5lYXNpbmcmJihuPXQqdCp0KSxcImVhc2VPdXRDdWJpY1wiPT09ZS5lYXNpbmcmJihuPS0tdCp0KnQrMSksXCJlYXNlSW5PdXRDdWJpY1wiPT09ZS5lYXNpbmcmJihuPXQ8LjU/NCp0KnQqdDoodC0xKSooMip0LTIpKigyKnQtMikrMSksXCJlYXNlSW5RdWFydFwiPT09ZS5lYXNpbmcmJihuPXQqdCp0KnQpLFwiZWFzZU91dFF1YXJ0XCI9PT1lLmVhc2luZyYmKG49MS0gLS10KnQqdCp0KSxcImVhc2VJbk91dFF1YXJ0XCI9PT1lLmVhc2luZyYmKG49dDwuNT84KnQqdCp0KnQ6MS04Ki0tdCp0KnQqdCksXCJlYXNlSW5RdWludFwiPT09ZS5lYXNpbmcmJihuPXQqdCp0KnQqdCksXCJlYXNlT3V0UXVpbnRcIj09PWUuZWFzaW5nJiYobj0xKy0tdCp0KnQqdCp0KSxcImVhc2VJbk91dFF1aW50XCI9PT1lLmVhc2luZyYmKG49dDwuNT8xNip0KnQqdCp0KnQ6MSsxNiotLXQqdCp0KnQqdCksZS5jdXN0b21FYXNpbmcmJihuPWUuY3VzdG9tRWFzaW5nKHQpKSxufHx0fSx1PWZ1bmN0aW9uKCl7cmV0dXJuIE1hdGgubWF4KGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0LGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQsZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQsZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldEhlaWdodCxkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KX0sYz1mdW5jdGlvbihlLHQsbil7dmFyIG89MDtpZihlLm9mZnNldFBhcmVudClkb3tvKz1lLm9mZnNldFRvcCxlPWUub2Zmc2V0UGFyZW50fXdoaWxlKGUpO3JldHVybiBvPU1hdGgubWF4KG8tdC1uLDApfSxsPWZ1bmN0aW9uKGUpe3JldHVybiBlP2koZSkrZS5vZmZzZXRUb3A6MH0scz1mdW5jdGlvbih0LG4sbyl7b3x8KHQuZm9jdXMoKSxkb2N1bWVudC5hY3RpdmVFbGVtZW50LmlkIT09dC5pZCYmKHQuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIixcIi0xXCIpLHQuZm9jdXMoKSx0LnN0eWxlLm91dGxpbmU9XCJub25lXCIpLGUuc2Nyb2xsVG8oMCxuKSl9LGQ9ZnVuY3Rpb24odCl7cmV0dXJuISEoXCJtYXRjaE1lZGlhXCJpbiBlJiZlLm1hdGNoTWVkaWEoXCIocHJlZmVycy1yZWR1Y2VkLW1vdGlvbilcIikubWF0Y2hlcyl9O3JldHVybiBmdW5jdGlvbihpLGYpe3ZhciBtLGgsZyx3LHAsdix5LGI9e307Yi5jYW5jZWxTY3JvbGw9ZnVuY3Rpb24oKXtjYW5jZWxBbmltYXRpb25GcmFtZSh5KX0sYi5hbmltYXRlU2Nyb2xsPWZ1bmN0aW9uKHQsaSxhKXt2YXIgZD1vKG18fG4sYXx8e30pLGY9XCJbb2JqZWN0IE51bWJlcl1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KSxoPWZ8fCF0LnRhZ05hbWU/bnVsbDp0O2lmKGZ8fGgpe3ZhciBnPWUucGFnZVlPZmZzZXQ7ZC5oZWFkZXImJiF3JiYodz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGQuaGVhZGVyKSkscHx8KHA9bCh3KSk7dmFyIHYseSxBLEU9Zj90OmMoaCxwLHBhcnNlSW50KFwiZnVuY3Rpb25cIj09dHlwZW9mIGQub2Zmc2V0P2Qub2Zmc2V0KCk6ZC5vZmZzZXQsMTApKSxTPUUtZyxJPXUoKSxxPTAsRj1mdW5jdGlvbihuLG8pe3ZhciBhPWUucGFnZVlPZmZzZXQ7aWYobj09b3x8YT09b3x8KGc8byYmZS5pbm5lckhlaWdodCthKT49SSlyZXR1cm4gYi5jYW5jZWxTY3JvbGwoKSxzKHQsbyxmKSxkLmFmdGVyKHQsaSksdj1udWxsLCEwfSxPPWZ1bmN0aW9uKHQpe3Z8fCh2PXQpLHErPXQtdix5PXEvcGFyc2VJbnQoZC5zcGVlZCwxMCkseT15PjE/MTp5LEE9ZytTKnIoZCx5KSxlLnNjcm9sbFRvKDAsTWF0aC5mbG9vcihBKSksRihBLEUpfHwoZS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoTyksdj10KX07MD09PWUucGFnZVlPZmZzZXQmJmUuc2Nyb2xsVG8oMCwwKSxkLmJlZm9yZSh0LGkpLGIuY2FuY2VsU2Nyb2xsKCksZS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoTyl9fTt2YXIgQT1mdW5jdGlvbihlKXtoJiYoaC5pZD1oLmdldEF0dHJpYnV0ZShcImRhdGEtc2Nyb2xsLWlkXCIpLGIuYW5pbWF0ZVNjcm9sbChoLGcpLGg9bnVsbCxnPW51bGwpfSxFPWZ1bmN0aW9uKHQpe2lmKCFkKCkmJjA9PT10LmJ1dHRvbiYmIXQubWV0YUtleSYmIXQuY3RybEtleSYmKGc9dC50YXJnZXQuY2xvc2VzdChpKSkmJlwiYVwiPT09Zy50YWdOYW1lLnRvTG93ZXJDYXNlKCkmJiF0LnRhcmdldC5jbG9zZXN0KG0uaWdub3JlKSYmZy5ob3N0bmFtZT09PWUubG9jYXRpb24uaG9zdG5hbWUmJmcucGF0aG5hbWU9PT1lLmxvY2F0aW9uLnBhdGhuYW1lJiYvIy8udGVzdChnLmhyZWYpKXt2YXIgbjt0cnl7bj1hKGRlY29kZVVSSUNvbXBvbmVudChnLmhhc2gpKX1jYXRjaChlKXtuPWEoZy5oYXNoKX1pZihcIiNcIj09PW4pe3QucHJldmVudERlZmF1bHQoKSxoPWRvY3VtZW50LmJvZHk7dmFyIG89aC5pZD9oLmlkOlwic21vb3RoLXNjcm9sbC10b3BcIjtyZXR1cm4gaC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNjcm9sbC1pZFwiLG8pLGguaWQ9XCJcIix2b2lkKGUubG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSk9PT1vP0EoKTplLmxvY2F0aW9uLmhhc2g9byl9aD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKG4pLGgmJihoLnNldEF0dHJpYnV0ZShcImRhdGEtc2Nyb2xsLWlkXCIsaC5pZCksaC5pZD1cIlwiLGcuaGFzaD09PWUubG9jYXRpb24uaGFzaCYmKHQucHJldmVudERlZmF1bHQoKSxBKCkpKX19LFM9ZnVuY3Rpb24oZSl7dnx8KHY9c2V0VGltZW91dCgoZnVuY3Rpb24oKXt2PW51bGwscD1sKHcpfSksNjYpKX07cmV0dXJuIGIuZGVzdHJveT1mdW5jdGlvbigpe20mJihkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIixFLCExKSxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIixTLCExKSxiLmNhbmNlbFNjcm9sbCgpLG09bnVsbCxoPW51bGwsZz1udWxsLHc9bnVsbCxwPW51bGwsdj1udWxsLHk9bnVsbCl9LGIuaW5pdD1mdW5jdGlvbihpKXt0JiYoYi5kZXN0cm95KCksbT1vKG4saXx8e30pLHc9bS5oZWFkZXI/ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihtLmhlYWRlcik6bnVsbCxwPWwodyksZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsRSwhMSksZS5hZGRFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLEEsITEpLHcmJmUuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLFMsITEpKX0sYi5pbml0KGYpLGJ9fSkpOyIsIi8vIERlZmVyIGxvYWRpbmcgb2YgR0Egc2NyaXB0XG5cbihmdW5jdGlvbihpLHMsbyxnLHIsYSxtKXtpWydHb29nbGVBbmFseXRpY3NPYmplY3QnXT1yO2lbcl09aVtyXXx8ZnVuY3Rpb24oKXtcbihpW3JdLnE9aVtyXS5xfHxbXSkucHVzaChhcmd1bWVudHMpfSxpW3JdLmw9MSpuZXcgRGF0ZSgpO1xuaS5pbml0QW5hbHl0aWNzPWZ1bmN0aW9uKCl7YT1zLmNyZWF0ZUVsZW1lbnQobyksbT1zLmdldEVsZW1lbnRzQnlUYWdOYW1lKG8pWzBdO1xuYS5hc3luYz0xO2Euc3JjPWc7bS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLG0pXG59fSkod2luZG93LGRvY3VtZW50LCdzY3JpcHQnLCcvL3d3dy5nb29nbGUtYW5hbHl0aWNzLmNvbS9hbmFseXRpY3MuanMnLCdnYScpO1xuXG5nYSgnY3JlYXRlJywgJ1VBLTkzMjUyNjQ5LTEnLCAnYXV0bycpO1xuZ2EoJ3NlbmQnLCAncGFnZXZpZXcnKTtcblxuLy8gSW5pdCBHQSBcblxuaW5pdEFuYWx5dGljcygpOyIsIlxuZnVuY3Rpb24gdmFsaWRFbWFpbChlbWFpbCkgeyAvLyBzZWU6XG4gIHZhciByZSA9IC9eKFtcXHctXSsoPzpcXC5bXFx3LV0rKSopQCgoPzpbXFx3LV0rXFwuKSpcXHdbXFx3LV17MCw2Nn0pXFwuKFthLXpdezIsNn0oPzpcXC5bYS16XXsyfSk/KSQvaTtcbiAgcmV0dXJuIHJlLnRlc3QoZW1haWwpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUh1bWFuKGhvbmV5cG90KSB7XG4gIGlmIChob25leXBvdCkgeyAgLy9pZiBoaWRkZW4gZm9ybSBmaWxsZWQgdXBcbiAgICBjb25zb2xlLmxvZyhcIlJvYm90IERldGVjdGVkIVwiKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyhcIldlbGNvbWUgSHVtYW4hXCIpO1xuICB9XG59XG5cbi8vIGdldCBhbGwgZGF0YSBpbiBmb3JtIGFuZCByZXR1cm4gb2JqZWN0XG5mdW5jdGlvbiBnZXRGb3JtRGF0YSgpIHtcbiAgdmFyIGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhY3QtZm9ybVwiKTtcbiAgdmFyIGVsZW1lbnRzID0gZm9ybS5lbGVtZW50czsgLy8gYWxsIGZvcm0gZWxlbWVudHNcbiAgdmFyIGZpZWxkcyA9IE9iamVjdC5rZXlzKGVsZW1lbnRzKS5maWx0ZXIoZnVuY3Rpb24oaykge1xuICAgIHJldHVybiAoZWxlbWVudHNba10ubmFtZSAhPSAnaG9uZXlwb3QnKTtcbiAgfSkubWFwKGZ1bmN0aW9uKGspIHtcbiAgICBpZihlbGVtZW50c1trXS5uYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBlbGVtZW50c1trXS5uYW1lO1xuICAgIC8vIHNwZWNpYWwgY2FzZSBmb3IgRWRnZSdzIGh0bWwgY29sbGVjdGlvblxuICAgIH1lbHNlIGlmKGVsZW1lbnRzW2tdLmxlbmd0aCA+IDApe1xuICAgICAgcmV0dXJuIGVsZW1lbnRzW2tdLml0ZW0oMCkubmFtZTtcbiAgICB9XG4gIH0pLmZpbHRlcihmdW5jdGlvbihpdGVtLCBwb3MsIHNlbGYpIHtcbiAgICByZXR1cm4gc2VsZi5pbmRleE9mKGl0ZW0pID09IHBvcyAmJiBpdGVtO1xuICB9KTtcbiAgdmFyIGRhdGEgPSB7fTtcbiAgZmllbGRzLmZvckVhY2goZnVuY3Rpb24oayl7XG4gICAgZGF0YVtrXSA9IGVsZW1lbnRzW2tdLnZhbHVlO1xuICAgIHZhciBzdHIgPSBcIlwiOyAvLyBkZWNsYXJlIGVtcHR5IHN0cmluZyBvdXRzaWRlIG9mIGxvb3AgdG8gYWxsb3dcbiAgICAgICAgICAgICAgICAgIC8vIGl0IHRvIGJlIGFwcGVuZGVkIHRvIGZvciBlYWNoIGl0ZW0gaW4gdGhlIGxvb3BcbiAgICBpZihlbGVtZW50c1trXS50eXBlID09PSBcImNoZWNrYm94XCIpeyAvLyBzcGVjaWFsIGNhc2UgZm9yIEVkZ2UncyBodG1sIGNvbGxlY3Rpb25cbiAgICAgIHN0ciA9IHN0ciArIGVsZW1lbnRzW2tdLmNoZWNrZWQgKyBcIiwgXCI7IC8vIHRha2UgdGhlIHN0cmluZyBhbmQgYXBwZW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGN1cnJlbnQgY2hlY2tlZCB2YWx1ZSB0b1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBlbmQgb2YgaXQsIGFsb25nIHdpdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhIGNvbW1hIGFuZCBhIHNwYWNlXG4gICAgICBkYXRhW2tdID0gc3RyLnNsaWNlKDAsIC0yKTsgLy8gcmVtb3ZlIHRoZSBsYXN0IGNvbW1hIGFuZCBzcGFjZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZyb20gdGhlICBzdHJpbmcgdG8gbWFrZSB0aGUgb3V0cHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJldHRpZXIgaW4gdGhlIHNwcmVhZHNoZWV0XG4gICAgfWVsc2UgaWYoZWxlbWVudHNba10ubGVuZ3RoKXtcbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBlbGVtZW50c1trXS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmKGVsZW1lbnRzW2tdLml0ZW0oaSkuY2hlY2tlZCl7XG4gICAgICAgICAgc3RyID0gc3RyICsgZWxlbWVudHNba10uaXRlbShpKS52YWx1ZSArIFwiLCBcIjsgLy8gc2FtZSBhcyBhYm92ZVxuICAgICAgICAgIGRhdGFba10gPSBzdHIuc2xpY2UoMCwgLTIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICAvLyBhZGQgZm9ybS1zcGVjaWZpYyB2YWx1ZXMgaW50byB0aGUgZGF0YVxuICBkYXRhLmZvcm1EYXRhTmFtZU9yZGVyID0gSlNPTi5zdHJpbmdpZnkoZmllbGRzKTtcbiAgZGF0YS5mb3JtR29vZ2xlU2hlZXROYW1lID0gZm9ybS5kYXRhc2V0LnNoZWV0IHx8IFwiUmFqYSBXZWJzaXRlIC0gQ29udGFjdCBGb3JtXCI7IC8vIGRlZmF1bHQgc2hlZXQgbmFtZVxuICBkYXRhLmZvcm1Hb29nbGVTZW5kRW1haWwgPSBmb3JtLmRhdGFzZXQuZW1haWwgfHwgXCJcIjsgLy8gbm8gZW1haWwgYnkgZGVmYXVsdFxuXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuICByZXR1cm4gZGF0YTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlRm9ybVN1Ym1pdChldmVudCkgeyAgLy8gaGFuZGxlcyBmb3JtIHN1Ym1pdCB3aXRodG91dCBhbnkganF1ZXJ5XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7ICAgICAgICAgICAvLyB3ZSBhcmUgc3VibWl0dGluZyB2aWEgeGhyIGJlbG93XG4gIHZhciBkYXRhID0gZ2V0Rm9ybURhdGEoKTsgICAgICAgICAvLyBnZXQgdGhlIHZhbHVlcyBzdWJtaXR0ZWQgaW4gdGhlIGZvcm1cblxuICAvL09QVElPTjogUmVtb3ZlIHRoaXMgY29tbWVudCB0byBlbmFibGUgU1BBTSBwcmV2ZW50aW9uLCBzZWUgUkVBRE1FLm1kXG4gIGlmICh2YWxpZGF0ZUh1bWFuKGRhdGEuaG9uZXlwb3QpKSB7ICAvL2lmIGZvcm0gaXMgZmlsbGVkLCBmb3JtIHdpbGwgbm90IGJlIHN1Ym1pdHRlZFxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG5cbiAgaWYoICF2YWxpZEVtYWlsKGRhdGEuZW1haWwpICkgeyAgIC8vIGlmIGVtYWlsIGlzIG5vdCB2YWxpZCBzaG93IGVycm9yXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsLWludmFsaWQnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHVybCA9IGV2ZW50LnRhcmdldC5hY3Rpb247ICAvL1xuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB4aHIub3BlbignUE9TVCcsIHVybCk7XG4gICAgLy8geGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCB4aHIuc3RhdHVzLCB4aHIuc3RhdHVzVGV4dCApXG4gICAgICAgIGNvbnNvbGUubG9nKHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdC1mb3JtJykuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgLy8gaGlkZSBmb3JtXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGFua3lvdV9tZXNzYWdlJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIHJldHVybjtcbiAgICB9O1xuICAgIC8vIHVybCBlbmNvZGUgZm9ybSBkYXRhIGZvciBzZW5kaW5nIGFzIHBvc3QgZGF0YVxuICAgIHZhciBlbmNvZGVkID0gT2JqZWN0LmtleXMoZGF0YSkubWFwKGZ1bmN0aW9uKGspIHtcbiAgICAgICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChrKSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChkYXRhW2tdKVxuICAgIH0pLmpvaW4oJyYnKVxuICAgIHhoci5zZW5kKGVuY29kZWQpO1xuICB9XG59XG5mdW5jdGlvbiBsb2FkZWQoKSB7XG4gIC8vY29uc29sZS5sb2coJ2NvbnRhY3QgZm9ybSBzdWJtaXNzaW9uIGhhbmRsZXIgbG9hZGVkIHN1Y2Nlc3NmdWxseScpO1xuICAvLyBiaW5kIHRvIHRoZSBzdWJtaXQgZXZlbnQgb2Ygb3VyIGZvcm1cbiAgdmFyIGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdC1mb3JtJyk7XG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVGb3JtU3VibWl0LCBmYWxzZSk7XG59O1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGxvYWRlZCwgZmFsc2UpO1xuIiwiLy8gR2V0IGVsZW1lbnRzXG52YXIgbmF2YmFyICAgICAgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhcicpLFxuICAgIG5hdmJhckJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZiYXItYnVyZ2VyJyksXG4gICAgbmF2YmFyTWVudSAgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhci1tZW51JyksXG4gICAgbmF2TWVudUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdmJhci1tZW51IC5uYXZiYXItaXRlbScpO1xudmFyIGhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXItYnVyZ2VyJyk7IC8vIGdldCBoYW1idXJnZXJcblxuXG4vLyBEZWNsYXJlIGZ1bmN0aW9uc1xuZnVuY3Rpb24gdG9nZ2xlTWVudSgpIHtcbiAgaWYobmF2YmFyQnVyZ2VyLmxlbmd0aCA+IDApIHsgLy8gIENoZWNrIGlmIHRoZXJlIGFyZSBhbnkgbmF2YmFyIGJ1cmdlcnNcblxuICAgIC8vIEFkZCBhIGNsaWNrIGV2ZW50IG9uIGVhY2ggaXRlbVxuICAgIG5hdmJhckJ1cmdlci5mb3JFYWNoKGZ1bmN0aW9uKCRlbCkge1xuICAgICAgJGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIHRhcmdldCA9ICRlbC5kYXRhc2V0LnRhcmdldDsgLy8gZGF0YS10YXJnZXQ9XCJuYXZNZW51XCJcbiAgICAgICAgdmFyICR0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXQpOyAvLyBpZD1cIm5hdk1lbnVcIlxuXG4gICAgICAgICRlbC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTsgLy8gdG9nZ2xlIG5hdiBpY29uXG4gICAgICAgICR0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7IC8vIHRvZ2dsZSBuYXYgbWVudVxuICAgICAgfSk7XG5cbiAgICB9KTtcblxuICB9XG59XG5cbmZ1bmN0aW9uIGNsb3NlTWVudU9uTGlua0NsaWNrKCkge1xuICBuYXZNZW51SXRlbXNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcblxuICAgIGlmICh0aGlzLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1hY3RpdmUnKSkge1xuICAgICAgdGhpcy5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpOyAvLyBoaWRlIG1lbnVcblxuICAgICAgaGFtYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpOyAvLyBjaGFuZ2UgeCB0byBoYW1idXJnZXJcbiAgICB9XG5cbiAgfSk7XG59XG5cbi8vQ2xvc2UgbWVudSB3aXRoIGNsaWNrIG91dHNpZGUgb2YgbWVudVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gIHZhciBpc0NsaWNrSW5zaWRlID0gbmF2YmFyLmNvbnRhaW5zKGV2ZW50LnRhcmdldCk7XG5cbiAgaWYgKCFpc0NsaWNrSW5zaWRlKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJvdXRzaWRlIVwiKTtcbiAgICBoYW1idXJnZXIuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gICAgbmF2YmFyTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcbiAgfVxufSk7XG5cblxuLy8gQ2xvc2UgbWVudSB3aGVuIGNsaWNraW5nIGEgbGlzdCBpdGVtXG5mb3IgKGkgPSAwOyBpIDwgbmF2TWVudUl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gIGNsb3NlTWVudU9uTGlua0NsaWNrKCk7XG59XG5cblxuXG4vLyBFdmVudCBsaXN0ZW5lcnNcbi8vIEFkZCBuYXZiYXIgaGFtYnVyZ2VyIGZ1bmN0aW9uYWxpdHkgYW5kICdYJyBhbmltYXRpb25cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgdG9nZ2xlTWVudSgpO1xufSk7XG5cbi8vIENsb3NlIG1lbnUgd2hlbiBvcGVuIHVzaW5nIEVTQyBrZXksIHRvZ2dsZSBYXG5kb2N1bWVudC5vbmtleWRvd24gPSBmdW5jdGlvbihldnQpIHtcbiAgZXZ0ID0gZXZ0IHx8IHdpbmRvdy5ldmVudDtcblxuICBpZiAobmF2YmFyQnVyZ2VyLmxlbmd0aCA+IDApIHtcbiAgICBuYXZiYXJCdXJnZXIuZm9yRWFjaChmdW5jdGlvbigkZWwpIHtcbiAgICAgIGlmIChldnQua2V5Q29kZSA9PSAyNykge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gJGVsLmRhdGFzZXQudGFyZ2V0O1xuICAgICAgICB2YXIgJHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldCk7XG5cbiAgICAgICAgaWYgKCRlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWFjdGl2ZScpICYmICR0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1hY3RpdmUnKSkge1xuICAgICAgICAgICRlbC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAkdGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG4iLCJ2YXIgc2Nyb2xsID0gbmV3IFNtb290aFNjcm9sbCgnYVtocmVmKj1cIiNcIl0nLCB7XG4gIHNwZWVkOiA4MDAsXG4gIG9mZnNldDogMCxcbiAgZWFzaW5nOiAnZWFzZU91dFF1YWQnXG59KTtcbiIsIiJdfQ==
