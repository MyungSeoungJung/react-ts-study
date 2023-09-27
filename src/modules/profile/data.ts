import useSWR from "swr";

export interface ProfileData {
  nickname: string;
  email: string;
}

// 함수를 호출을하면, 함수를 내보내는 함수이다.
// use....
// 클로저를 생성
export function useProfileData() {
  // const {데이터, 데이터변경함수}
  // = useSWR<데이터형식>((필수)"데이터키", 데이터조회함수, 옵션);
  const {
    data: profileData,
    mutate: mutateProfileData,
  } = useSWR<ProfileData>("@data/profile", {
    // 초기값(데이터조회함수를 통해서 최초에 받아오기전에 반환할 값)
    fallbackData: {
      nickname: "Alice",
      email: "alice@gmail.com",
    },
  });

  return { profileData, mutateProfileData };
}
