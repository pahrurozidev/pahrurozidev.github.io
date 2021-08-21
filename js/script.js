const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');
const ul = document.querySelector('ul');
const li = ul.getElementsByTagName('li');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
    nav.classList.replace('slideBack', 'slide');
});

for (list of li) {
    list.addEventListener('click', function () {
        menuToggle.checked = false;
        nav.classList.toggle('slideBack');
    });
}