const list = document.querySelector('ul');

console.log(list.children);
console.log(Array.from(list.children));


Array.from(list.children).forEach(child => {
    child.classList.add('movie-name');
});

const moviecenter = document.querySelector('.middle');

console.log(moviecenter.parentElement);
console.log(moviecenter.parentElement.parentElement);
console.log(moviecenter.nextElementSibling);
console.log(moviecenter.previousElementSibling);

// function(child) { 
// }