const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
        console.log(request.responseText);
    } else if (request.readyState === 4) {
        console.log('통신에 장애가 발생하였습니다')
    }
})

//https://jsonplaceholder.typicode.com/todos/todotodo 404 (Not Found)
// 통신의 상태코드

// 절대적으로 정해진 규칙.
// 암묵적인 룰은 존재.

// 200 . 통신에 문제 없음 OK. 2XX. 201, 202. 
// 30X . 새로고침... 방문했던 페이지를 또 다시 방문하셨을때.
// 브라우저 한번 접속... 데이터를 저장 하는 경향 ... update 반드시 새로고침 해줘야 하는 경우들이
// 존재. 데이터가 온전히 전달되었는지 아닌지...
// 4XX. 404 ... 너가 요청한 주소가 존재하지 않는다. 너가 뭘 요청하는 모르겠다.
// 500. 5XX ... internal server error. 서버 내부에서 에러간 경우. 
// 요청 반드시 응답. 응답 불가상태. 



request.open('GET', 'https://jsonplaceholder.typicode.com/todos/40');

// https://jsonplaceholder.typicode.com/todos/:id
// https://www.apple.com/:id  ==> 국가코드 ==> 해당국가의 언어로 나오는 페이지를 호출하라.
//

// https://trends.google.co.kr/trends/explore?q=iphone15&date=now%201-d&geo=KR&hl=ko
// https://trends.google.co.kr/trends/explore
// q = iphone15 & date=now % 201 - d & geo=KR & hl=ko


// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/todotodo');
request.send();

// 1. 통신방식의 함수가 필요.
// GET => 정보를 가져오는 것. 
// naver, google 메인화면. 
// SNS, FEED 란 GET 통신의 예.

// POST => 클라이언트에서 서버쪽으로 정보를 전달해 주는것
// 로그인 (로그인 id , 비밀번호), SNS 여러분의 사진을 게시하는 것.

// PUT => 글을 수정할때에 사용하는 것. X 거의 사용 안함. 보안 이슈. 내부통신에서 사용할때.

// DELETE => 삭제를 위해서 사용하는 http 함수
// UPDATE

// 2. 통신을 할 주소가 필요. url. endpoint
