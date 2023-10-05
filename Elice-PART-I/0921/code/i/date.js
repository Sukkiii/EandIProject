
const now = new Date();

console.log(now);

console.log('getFullYear:', now.getFullYear());
console.log('getMonth:', now.getMonth());
console.log('getDay:', now.getDay());
console.log(now.toLocaleString());

//  스마트폰           
//  제조사     애플   삼성   모토로라   asus
//  가격      1200  3000  4000   5000


let park = {
    name: '박',
    age: 30,
}

// let smartphone = {
//     company: 'apple',
//     price: 2000,
// }

// let samsung = {
//     company: 'samsung',
//     price: 3000,
// }

// 생성자
function User(name, age) {
    this.name = name;
    this.age = age;
}

// 100 , 1000, 10000

console.log(park);
let newName = new User('Lee', 40);
let kim = new User('kim', 10);
console.log(newName);
console.log(kim);