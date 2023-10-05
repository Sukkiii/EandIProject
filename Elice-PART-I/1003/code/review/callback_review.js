// callback => 함수 실행 뒤에 또다른 함수를 실행시킨다.

// const words = ['a', 'abc', 'abcdefg'];

// const result = words.filter((word) => word.length > 6);

console.log('주문이 들어왔어요')

function orderCallBack() {
    console.log('결제 진행중');
    setTimeout(() => {
        console.log('결제완료');
        setTimeout(() => {
            console.log('배달시작')
            setTimeout(() => {
                console.log('배달이 완료되었습니다');
                setTimeout(() => {
                    console.log('배달 수당이 지급 되었습니다');
                }, 3000);
            }, 3000)
        }, 3000)
    }, 3000);
}
orderCallBack();