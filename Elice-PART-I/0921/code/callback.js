// 배달 주문이 들어옴. => 결제 => 결제 완료 => 배달을 시작한다.

// function orderCallBack() {
//     //결제진행, 결제완료
//     console.log('결제 진행중');
//     setTimeout(() => {
//         console.log('결제완료');
//     }, 3000);  //1000 1초.
// }

// 콜백 함수.
function orderCallBack() {
    console.log('결제 진행중');
    setTimeout(() => {
        console.log('결제완료')
        setTimeout(() => {
            console.log('배달 시작');
        }, 3000);
    }, 3000)
}

console.log('주문이 들어왔어요.');  // 1 // 1
orderCallBack(); // 2               // 3
console.log('배달시작');  // 3        // 2

// 비동기성 