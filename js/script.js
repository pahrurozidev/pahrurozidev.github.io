// * job des
new Typed('#typed', {
    strings: ['I\'m Pahrurozi', 'I\'m Web Programmer', 'I\'m Student'],
    showCursor: false,
    loop: true,
    typeSpeed: 100,
    backSpeed: 100,
    startDelay: 1000,
    backDelay: 1000
});

// * portfolio | category
const category = document.querySelectorAll('.category-body .category');
const imgCategory = document.querySelectorAll('.img-thumbnail');
const categoryh4 = document.querySelectorAll('.category h4');

for (let i = 0; i < category.length; i++) {
    categoryh4[0].style.background = 'orangered'
    category[i].addEventListener('click', e => {
        if (e.target.textContent == 'All') {
            for (let j = 0; j < 4; j++) {
                categoryh4[j].style.background = 'transparent';
                categoryh4[0].style.background = 'orangered'
                imgCategory[j].classList.remove('slide-img');
                imgCategory[j].classList.add('slide-img');
                setTimeout(() => {
                    imgCategory[j].classList.remove('slide-img');
                }, 300);
            }
            setTimeout(() => {
                const img1 = imgCategory[0].querySelector('img')
                const img2 = imgCategory[1].querySelector('img')
                const img3 = imgCategory[2].querySelector('img')
                const img4 = imgCategory[3].querySelector('img')
                img1.setAttribute('src', 'img/img1.jpeg');
                img2.setAttribute('src', 'img/img2.jpeg');
                img3.setAttribute('src', 'img/img3.jpeg');
                img4.setAttribute('src', 'img/img4.jpeg');
            }, 500);
        } else if (e.target.textContent == 'Branding') {
            for (let j = 0; j < 4; j++) {
                categoryh4[j].style.background = 'transparent';
                categoryh4[1].style.background = 'orangered'
                imgCategory[j].classList.remove('slide-img');
                imgCategory[j].classList.add('slide-img');
                setTimeout(() => {
                    imgCategory[j].classList.remove('slide-img');
                }, 300);
            }
            setTimeout(() => {
                const img1 = imgCategory[0].querySelector('img')
                const img2 = imgCategory[1].querySelector('img')
                const img3 = imgCategory[2].querySelector('img')
                const img4 = imgCategory[3].querySelector('img')
                img1.setAttribute('src', 'img/img4.jpeg');
                img2.setAttribute('src', 'img/img5.jpeg');
                // img3.setAttribute('src', 'img/img2.jpeg');
                img4.setAttribute('src', 'img/img3.jpeg');
            }, 500);
        } else if (e.target.textContent == 'Web Design') {
            for (let j = 0; j < 4; j++) {
                categoryh4[j].style.background = 'transparent';
                categoryh4[2].style.background = 'orangered'
                imgCategory[j].classList.remove('slide-img');
                imgCategory[j].classList.add('slide-img');
                setTimeout(() => {
                    imgCategory[j].classList.remove('slide-img');
                }, 300);
            }
            setTimeout(() => {
                const img1 = imgCategory[0].querySelector('img')
                const img2 = imgCategory[1].querySelector('img')
                const img3 = imgCategory[2].querySelector('img')
                const img4 = imgCategory[3].querySelector('img')
                img1.setAttribute('src', 'img/img3.jpeg');
                img2.setAttribute('src', 'img/img2.jpeg');
                img3.setAttribute('src', 'img/img5.jpeg');
                img4.setAttribute('src', 'img/img4.jpeg');
            }, 500);
        } else if (e.target.textContent == 'Photography') {
            for (let j = 0; j < 4; j++) {
                categoryh4[j].style.background = 'transparent';
                categoryh4[3].style.background = 'orangered'
                imgCategory[j].classList.remove('slide-img');
                imgCategory[j].classList.add('slide-img');
                setTimeout(() => {
                    imgCategory[j].classList.remove('slide-img');
                }, 300);
            }
            setTimeout(() => {
                const img1 = imgCategory[0].querySelector('img')
                const img2 = imgCategory[1].querySelector('img')
                const img3 = imgCategory[2].querySelector('img')
                const img4 = imgCategory[3].querySelector('img')
                img1.setAttribute('src', 'img/img5.jpeg');
                img2.setAttribute('src', 'img/img2.jpeg');
                img3.setAttribute('src', 'img/img1.jpeg');
                img4.setAttribute('src', 'img/img3.jpeg');
            }, 500);
        }
    })
}

// * slidergetElementsByClassName
const sliderRow = document.getElementsByClassName('slide-row')[0];
const btn = document.querySelectorAll('.indicator div.btn');

setInterval(() => {
    setTimeout(() => {
        sliderRow.style.transform = 'translate(0px)';
        btn[1].classList.remove('direction')
        btn[0].classList.add('direction');
    }, 1000);
    setTimeout(() => {
        sliderRow.style.transform = 'translate(-340px)';
        btn[0].classList.remove('direction')
        btn[1].classList.add('direction');
    }, 5000);
    setTimeout(() => {
        sliderRow.style.transform = 'translate(-680px)';
        btn[1].classList.remove('direction')
        btn[2].classList.add('direction');
    }, 9000);
    setTimeout(() => {
        sliderRow.style.transform = 'translate(-1020px)';
        btn[2].classList.remove('direction')
        btn[3].classList.add('direction');
    }, 13000);


    setTimeout(() => {
        sliderRow.style.transform = 'translate(-680px)';
        btn[3].classList.remove('direction')
        btn[2].classList.add('direction');
    }, 17000);
    setTimeout(() => {
        sliderRow.style.transform = 'translate(-340px)';
        btn[2].classList.remove('direction')
        btn[1].classList.add('direction');
    }, 21000);
}, 24000);

btn[0].addEventListener('click', () => {
    sliderRow.style.transform = 'translate(0px)';
    for (let i = 0; i < 4; i++) {
        btn[i].classList.remove('direction')
        console.log(btn[i]);
    }
    btn[0].classList.add('direction');
})
btn[1].addEventListener('click', () => {
    sliderRow.style.transform = 'translate(-340px)';
    for (let i = 0; i < 4; i++) {
        btn[i].classList.remove('direction')
    }
    btn[1].classList.add('direction');
})
btn[2].addEventListener('click', () => {
    sliderRow.style.transform = 'translate(-680px)';
    for (let i = 0; i < 4; i++) {
        btn[i].classList.remove('direction')
    }
    btn[2].classList.add('direction');
})
btn[3].addEventListener('click', () => {
    sliderRow.style.transform = 'translate(-1020px)';
    for (let i = 0; i < 4; i++) {
        btn[i].classList.remove('direction')
    }
    btn[3].classList.add('direction');
})


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

// // * image from api with async await
// const searchButton = document.querySelector('#search-button');
// searchButton.addEventListener('click', async function () {
//     const inputKeyword = document.querySelector('#search-input');
//     const movies = await getMovies(inputKeyword.value);
//     updateUI(movies)
// })
// // * getMovie
// function getMovies(keyword) {
//     return fetch('http://www.omdbapi.com/?apikey=487eb934&s=' + keyword)
//         .then(response => response.json())
//         .then(response => response.Search)
// }
// // * updateUI
// function updateUI(movies) {
//     let cards = '';
//     movies.forEach(m => cards += showCards(m));
//     const movieContainer = document.querySelector('#galery .container');
//     movieContainer.innerHTML = cards;
// }
// // * showCards
// function showCards(m) {
//     return `<div class="card">
//                 <div class="header">
//                     <img src="` + m.Poster + `" alt="">
//                 </div>
//             </div>`
// }