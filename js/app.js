var button = document.querySelector('.hamburger');
var menu = document.querySelector('.page-nav');

button.addEventListener('click', function menuAction(e) {
  this.classList.toggle("transform");
  menu.classList.toggle('nav-opened');
});
