var button = document.querySelector('.hamburger');
var menu = document.querySelector('.page-nav');

button.addEventListener('click', function myFunction(x) {
    this.classList.toggle("change");
    menu.classList.toggle('nav-opened');
});
