// js: es-module 방법에서 모듈을 내보내는 방법
// 내보내고싶은 모듈 앞에 export를 쓰면 됨
// 모듈 = 코드집합,변수,함수,객체,클래스,인터페이스등..

//export : 내보내기
export function greet(name) {
  return `Hello, ${name}!`;
}

export const appName = "myapp";

// 기본 모듈 내보내기
export default {
  version: "1.0",
  creator: "Myung SJ",
};
