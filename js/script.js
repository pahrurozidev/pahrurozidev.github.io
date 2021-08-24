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

const personalDetails = document.querySelectorAll('.personal-details .list ul');

const lastUl = personalDetails[1];
const lastLi = lastUl.getElementsByTagName('li')[5];
lastLi.classList.add('job');

const span3 = document.getElementsByTagName('span')[3];
const span4 = document.getElementsByTagName('span')[4];
const span5 = document.getElementsByTagName('span')[5];
const span6 = document.getElementsByTagName('span')[6];
const span7 = document.getElementsByTagName('span')[7];
const span8 = document.getElementsByTagName('span')[8];
const span9 = document.getElementsByTagName('span')[9];
const span10 = document.getElementsByTagName('span')[10];

setInterval(() => {

    setTimeout(() => {
        span3.classList.add('large');
        span4.classList.add('large');
        span5.classList.add('large');
        span6.classList.add('large');
        span7.classList.add('large');
        span8.classList.add('large');
        span9.classList.add('large');
        span10.classList.add('large');
    }, 1000);

    setTimeout(() => {
        span3.classList.remove('large');
        span4.classList.remove('large');
        span5.classList.remove('large');
        span6.classList.remove('large');
        span7.classList.remove('large');
        span8.classList.remove('large');
        span9.classList.remove('large');
        span10.classList.remove('large');
    }, 2000);

}, 2000);


const liAll = document.querySelector('#contact .container ul li');
const li3 = liAll.nextElementSibling.nextElementSibling;
const textarea = li3.getElementsByTagName('textarea')[0];
textarea.setAttribute('class', 'textareaTablet');