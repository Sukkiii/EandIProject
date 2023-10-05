
let a = 100;
let b = 1;
let c = 3;
let d = 4;

// function Add() {
//     console.log(a);
// }

function Add(a, b) {
    console.log(a + b);
}

Add(a, b);
Add(c, d);


let category = 1;


// 상의, 하의, 신발, 악세사리
// data type => String
// 하의 픽.

// string 은 기본적으로 컴퓨터가 읽는 값이 큽니다.
// 숫자는 작아요. 검색, 분류 number data type 을 통해서 분류.



// switch (level) {
//     case 0:
//         break;

//     case 1:
//         break;

//     case 50:
//         break;
// }




function Category(category) {
    switch (category) {
        case 0:
            console.log('100000 ~ 80000');
            console.log('상의를 선택했습니다')
            console.log('레벨1, 100,200,100');
            break;

        case 1:
            console.log('80000~ 60000');
            console.log('하의를 선택했습니다');
            console.log('레벨2, 200,400,600');
            break;

        case 2:
            console.log('신발')
            break;

        case 3:
            console.log('악세사리')
            break;
    }
}

Category(1);
Category(0);
Category(3);

// if (category === 1) {
//     console.log('하의야')
// }

// if (category === 2) {
//     console.log('상의야');
// }