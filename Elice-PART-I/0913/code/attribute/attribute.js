
const link = document.querySelector('a');
console.log(link.getAttribute('href'));

const p = document.querySelector('p');
p.getAttribute('class')

link.setAttribute('href', 'https://www.google.com');
link.innerHTML = '역시 검색은 구글';

// p.setAttribute('style', 'color:green');

const h2 = document.querySelector('h2');

h2.style.margin = '50px';
h2.style.color = 'red';
h2.style.fontSize = '50px';

p.classList.remove('error');
p.classList.add('success');

// class 를 집어넣고 빼고 

// console.log(getAttribute('p'));

// function getAt() {
//     console.log('hi');
// }

// getAt();

