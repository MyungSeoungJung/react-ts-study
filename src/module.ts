// js: es-module 방법에서 모듈을 내보내는 방법
// 내보내고 싶은 모듈앞에 export를 쓰면됨
// 모듈: 코드집합 - 변수, 함수, 객체, 클래스, 인터페이스....

// export(수출): 내보내기  ...잘보기
export function greet(
  name : string,
  gendor? : "unspecified" | "female" | "male",  // 매개변수 : 값1 | 값2 | 값3 = 유니온 타입
  // ㄴ> 문자열을 넣는 게 아닌 3개로 정해진 타입
  age? : number,  // 매개변수? : 타입 = 옵셔널(널 값이 허용되지않음)
  nation : string = "korea", // 디폴트값(고정값)
  ) {
  console.log(age)//매개변수로 대입을 안 하면
  return `Hello, ${name}!`;
}


export const appName = "MyApp!!";

// 인터페이스 : 객체 구조를 선언
interface Person {
name : string;
age? : number;
gendor? : "unspecified" | "female" | "male",
}
// person 인터페이스
export const userPerson : Person = {
  name : "alice",
  age : 30,
  gendor : "female"
 }

 // User인터페이스에서 Person 확장
interface User extends Person {
  nickname? : string;
  printInfo? : () => void //함수 
}

// User인터페이스에서 Person 확장
export const user : User = {
  name: "Alice",
  age: 30,
  gendor : "female",
  nickname : "Alice",
  printInfo : () => {
 console.log(user.nickname);
  }
};



function identity<T>(arg: T){
  return arg;
}


const result1 = identity<string>(user.name)
const result2 = identity<number>(user.age)
const result3 = identity<Person>(user)

// 속성 추가 안됨
// user.country = "korea"


// 기본 모듈 내보내기
export default {
  version: "1.0",
  creator: "Myung SJ",
};