// * slidback navbar
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

// * button read more
const personalDetails = document.querySelectorAll('.personal-details .list ul');
const lastUl = personalDetails[1];
const lastLi = lastUl.getElementsByTagName('li')[5];
lastLi.classList.add('job');

const span = document.getElementsByTagName('span');
for (let i = 0; i < span.length; i++) {
    setInterval(() => {
        setTimeout(() => {
            span[i].classList.add('large');
        }, 1000);

        setTimeout(() => {
            span[i].classList.remove('large');
        }, 2000);
    }, 2000);
}

// * toggle before login
const bodyBox = document.getElementsByClassName('body-box')[0];
const box = bodyBox.querySelectorAll('.box');
setInterval(() => {
    setTimeout(() => {
        box[2].classList.remove('jingga');
        box[0].classList.add('jingga');
    }, 1000);
    setTimeout(() => {
        box[0].classList.remove('jingga');
        box[1].classList.add('jingga');
    }, 2000);
    setTimeout(() => {
        box[1].classList.remove('jingga');
        box[2].classList.add('jingga');
    }, 3000);
}, 3000);

// * image from api with async await
const searchButton = document.querySelector('#search-button');
searchButton.addEventListener('click', async function () {
    const inputKeyword = document.querySelector('#search-input');
    const movies = await getMovies(inputKeyword.value);
    updateUI(movies)
})
// * getMovie
function getMovies(keyword) {
    return fetch('http://www.omdbapi.com/?apikey=487eb934&s=' + keyword)
        .then(response => response.json())
        .then(response => response.Search)
}
// * updateUI
function updateUI(movies) {
    let cards = '';
    movies.forEach(m => cards += showCards(m));
    const movieContainer = document.querySelector('#galery .container');
    movieContainer.innerHTML = cards;
}
// * showCards
function showCards(m) {
    return `<div class="card">
                <div class="header">
                    <img src="` + m.Poster + `" alt="">
                </div>
            </div>`
}