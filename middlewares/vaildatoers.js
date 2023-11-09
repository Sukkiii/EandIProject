const addressDetailValidator = (address) => {
   // 주소가 비어있는지 확인
   if (!address) {
      return "주소를 입력해주세요.";
   }
   // 주소 길이 확인
   if (address.length < 5) {
      return "주소가 너무 짧습니다.";
   }
   // 모든 검사를 통과한 경우
   return "주소가 유효합니다.";
}

const zipCodeValidator = (zipCode) => {
   // 우편번호가 비어있는지 확인
   if (!zipCode) {
      return "우편번호를 입력해주세요.";
   }
   // 우편번호 길이 확인
   if (zipCode.length !== 5) {
      return "우편번호는 5자리 숫자여야 합니다.";
   }
   // 우편번호가 숫자로만 이루어져 있는지 확인
   if (!/^\d+$/.test(zipCode)) {
      return "우편번호는 숫자로만 이루어져야 합니다.";
   }
   // 모든 검사를 통과한 경우
   return "우편번호가 유효합니다.";
}

const phoneNumberValidator = (phoneNumber) => {
   // 전화번호가 비어있는지 확인
   if (!phoneNumber) {
      return "전화번호를 입력해주세요.";
   }
   // 전화번호 길이 확인
   if (phoneNumber.length < 9 || phoneNumber.length > 11) {
      return "전화번호는 9~11자리 숫자여야 합니다.";
   }
   // 전화번호가 숫자로만 이루어져 있는지 확인
   if (!/^\d+$/.test(phoneNumber)) {
      return "전화번호는 숫자로만 이루어져야 합니다.";
   }
   // 모든 검사를 통과한 경우
   return "전화번호가 유효합니다.";
}

const userNameValidator = (userName) => {
   // 사용자 이름이 비어있는지 확인
   if (!userName) {
      return "사용자 이름을 입력해주세요.";
   }
   // 사용자 이름 길이 확인
   if (userName.length < 3 || userName.length > 20) {
      return "사용자 이름은 3~20자 사이여야 합니다.";
   }
   // 사용자 이름이 알파벳, 숫자, 밑줄로만 이루어져 있는지 확인
   if (!/^[a-zA-Z0-9_]+$/.test(userName)) {
      return "사용자 이름은 알파벳, 숫자, 밑줄로만 이루어져야 합니다.";
   }
   // 모든 검사를 통과한 경우
   return "사용자 이름이 유효합니다.";
}

const passwordValidator = (password) => {
   // 비밀번호가 비어있는지 확인
   if (!password) {
      return "비밀번호를 입력해주세요.";
   }
   // 비밀번호 길이 확인
   if (password.length < 8) {
      return "비밀번호는 최소 8자리 이상이어야 합니다.";
   }
   // 비밀번호가 대문자, 소문자, 숫자, 특수문자를 모두 포함하고 있는지 확인
   if (!/[A-Z]/.test(password)) {
      return "비밀번호는 최소 한 개의 대문자를 포함해야 합니다.";
   }
   if (!/[a-z]/.test(password)) {
      return "비밀번호는 최소 한 개의 소문자를 포함해야 합니다.";
   }
   if (!/[0-9]/.test(password)) {
      return "비밀번호는 최소 한 개의 숫자를 포함해야 합니다.";
   }
   if (!/[!@#$%^&*]/.test(password)) {
      return "비밀번호는 최소 한 개의 특수문자를 포함해야 합니다.";
   }
   // 모든 검사를 통과한 경우
   return "비밀번호가 유효합니다.";
}


 // 특수문자가 포함되어 있는지 확인
 const specialChars = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?";
 for (let i = 0; i < specialChars.length; i++) {
    if (address.includes(specialChars[i])) {
       return "특수문자를 포함할 수 없습니다.";
    }
 }