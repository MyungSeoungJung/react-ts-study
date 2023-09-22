//  인터페이스를 사용하는 이유는 이렇게 정의하지않으면 받는 매개변수 타입을 일일히
//   nickname: string, email: string; 이런 식으로 써줘야됨

import useSWR from "swr";

//형식 돌려쓸거라 폴더따로 파주고 export해줌
export interface ProfileData {
  nickname: string;
  email: string;
}

// 함수 호출을 하면, 함수를 내보내는 함수이다.
// use...@@@이름짓기
// 클로저를 생성
export function useProfileData() {
  //const {데이터, 데이터 변경함수}
  //  useSwr<데이터 형식>("데이터 키", 데이터 조회함수, 옵션);
  const { data: ProfileData, mutate: mutateProfileData } =
    // useState는 같은 컴포넌트에서 공유되기때문에 키가 필요없음
    // useSwr는 모든 컴포넌트랑 공유하기때문에 키 값이 필요함
    useSWR<ProfileData>("@data/profile", {
      // 초기값(데이터 조회함수를 통해서 최초 받아오기전에 반환할 값)   //옵션 부분
      fallbackData: {
        nickname: "Alice",
        email: "alice@gmail.com",
      },
    });

  return { ProfileData, mutateProfileData };
}
