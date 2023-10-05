
// const a = 10;
// a = 20;
// console.log(a); //error


// 01xx => name, age, email 
const user = {
    name: '홍길동',
    age: 30,
    email: 'test@test.com',
    address: '제주도 제주시',
    ridername: '라이더A',
    food: ['김치찌개', '제육볶음'],

    payment: function () {
        console.log('결제가 완료 되었습니다');
        // return this.deliverystart();
    },

    deliverystart: () => {
        console.log('배달이 시작되었습니다');
    },

    getAttribute: () => {

    }
}

// node.js Database

console.log(user.name);
console.log(user.age);
console.log(user.food[0]);
console.log(user.food[1]);

user.payment();
user.deliverystart();


function Payment() {

}

PayArrow = () => {

}


// console.log('변경전')
// console.log(user);

// console.log('변경후');
// user.name = '박두현';
// console.log(user);

// user = { name: 'hello' }
// console.log(user);