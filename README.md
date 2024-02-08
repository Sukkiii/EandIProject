# 🎁프로젝트 소개

짱구 주요 굿즈를 쇼핑할 수 있는 서비스를 제공하는 온라인 쇼핑몰입니다. 
상품을 조회하고 장바구니에 담고 구매할 수 있는 기능을 제공합니다.

- 상품 상세 조회 기능
- 카테고리로 상품 조회 가능
- 장바구니 기능
- 주문 조회 기능

## 🔌프로젝트 정보

- 프로젝트 명: 짱구 굿즈 쇼핑몰 웹서비스
- 개발 기간: 2023년 10월 30일 ~ 11월 11일(2주)
- 팀원: 6명 -> 프론트엔드 4명 / 백엔드 2명

### 💻설치

1. 이 저장소를 클론합니다.
2. `npm install` 명령어를 실행하여 필요한 패키지를 설치합니다.
3. `npm start` 명령어를 실행하여 서버를 시작합니다.

### 👇테스트 계정

- 관리자
    `ID : admin@test.com `
    `PW : 12345678`
- 유저
    `ID : user@test.com `
    `PW : 12345678`

### ✨API 문서

API 문서는 [여기](https://documenter.getpostman.com/view/30669436/2s9YXh5NWB)에서 확인할 수 있습니다.

## 💿기술 스택
### Frontend

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=white"/>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/>

### Backend
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=white"/>
<img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white"/>
<img src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white"/>
<img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white"/>
<img src="https://img.shields.io/badge/JWT-D042F9?style=flat-square&logo=JWT&logoColor=white"/>

## 🎦 주요 화면 영상

### 1. 메인페이지, 로그인 
<img src='https://github.com/Study-Sukki/todo/assets/122197644/51eba5e6-fad9-4c88-9b3f-de3c4e8470cd' width='700' />

<br />

### 2. 카테고리 페이지
<img src='https://github.com/Study-Sukki/todo/assets/122197644/9136e317-9ae8-4344-84b8-0ccf2342859d' />
<img src='https://github.com/Study-Sukki/todo/assets/122197644/2701e535-f8d7-40e7-bc54-46737b42bc98' />
<br />

### 3. 제품 세부 정보 페이지

<img src='https://github.com/Study-Sukki/todo/assets/122197644/97617146-5431-41e5-8159-702b896e35e3' width='700' />
<br />

### 4. 장바구니 마이페이지
<img src='https://github.com/Study-Sukki/todo/assets/122197644/53597368-3389-4b2b-afa9-b6345c3fe968' width='700' />
<br />

## 🏞️ 페이지별 기능 설명
### 1. 메인 페이지

- 공통 Header, 공통 Footer
- 배너 image클릭시 하위 Card UI 오픈
- 메인 페이지 속 Item 노출 (Card UI)

### 2. 로그인, 회원가입 페이지

- 회원가입, 로그인

### 3. 제품 카테고리 페이지

- 카테고리 상위분류, 중분류에 따라서 item 보여주기
- 상위 Best Item 보여주기

### 4. 제품 상세 페이지

- 제품 상세 정보
(이미지, 가격 등 제공)
- 제품 가격 및 갯수 조정 후 장바구니 저장
(localStorage로 저장)

### 5. 장바구니, 구매 페이지

- localStorage에 저장된 데이터 불러오기
- 장바구니에 담긴 제품 표시
- 제품 클릭 후 구매 페이지로 이동 → 구매하기

### 6. 마아페이지 - 주문조회

- 마이페이지 속 주문 조회
- 구매 페이지에서 구매하기 완료 된 제품 주문조회

### 7. 관리자 페이지
- 제품, 카테고리, 배송관리

- 실제 기능 미구현, UI만 구현

## 🚨 기능 정리

- **사용자 주요 기능**
- [ ] JWT 토큰 사용
- [ ] 토큰에서 유저id 추출
- [ ] 관리자와 유저 권한 구분


- **상품(제품) 주요 기능**
- [ ] 상품 데이터와 상위&하위 카테고리 연동

- **장바구니 주요 기능**
- [ ] 상품 데이터 Local Stroage에 저장 
    
- **주문 주요 기능**
- [ ] 관리자 배송상태 변경 [1:결제완료 2:배송 준비중 3:배송중 4:배송 완료]
   
### 😎감사합니다!😘
