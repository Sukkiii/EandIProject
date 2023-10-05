// callback hell.

// 주문이 들어오고 => 결재진행중 => 결제완료  1번 시나리오.

// 배달 시작 -> 배달이 완료되었다고 => 배달 수수료 3000원을 입금.

console.log('주문이 들어왔습니다');

// 콜백 지옥. => promise
function orderCallBack() {
    console.log('결제 진행중')
    setTimeout(() => {
        console.log('결제완료');
        setTimeout(() => {
            console.log('배달 시작');
            setTimeout(() => {
                console.log('배달 완료');
                let delivery = fasle;
                setTimeout(() => {
                    console.log('홍길동 님에게 수당 3000원이 입금되었습니다');
                }, 3000);
            }, 2000);
        }, 1000);
    }, 3000);
}

orderCallBack();