import axios from "axios";
import useSWR from "swr";

const contactsApi = axios.create({
  baseURL: "http://localhost:9090",
});

interface ContactData {
  // ?:옵셔널, "a"|"b":유니온
  id?: number; // id값은 나중에 생성
  name: string;
  phone: string;
}

// // 페이징 정보를 글로벌 상태로 관리하게 된다면,,
// interface ContactPagingData {
//   page?: number;
//   size?: number;
//   last?: boolean;
//   contents: ContactData[];
// }

const INIT_DATA: ContactData[] = [];
const CONTACTS_DATA_KEY = "/contacts";
// const CONTACTS_DATA_KEY = "@data/contacts";

// 데이터를 가져오는 함수(서버, 로컬스토리지, 캐시, webSQL)
const contactsFetcher = async ([key, page]) => {
  console.log("--call fetcher--");

  try {
    const response = await contactsApi.get<ContactData[]>(
      `${key}?_sort=id?_sort=id&_order=desc`
    );
    return response.data;
  } catch (e: any) {
    return INIT_DATA;
  }

  // fetch /contacts/paging?page={page}&size=20

  // const jsonStr = localStorage.getItem(
  //   CONTACTS_DATA_KEY
  // );
  // // 로컬스토리지에 있으면 읽은 값을 객체 변환해서 반환
  // if (jsonStr) {
  //   return JSON.parse(jsonStr) as ContactData[];
  // }
  // // 로컬스토리지에 없으면 초기값 반환
  // return INIT_DATA;
};

export const useContactsData = (page: number) => {
  const {
    data: contactsData,
    mutate,
    isValidating: isContactDataValidating,
  } = useSWR<ContactData[]>([CONTACTS_DATA_KEY, page], contactsFetcher, {
    // 캐시/또는 데이터가져오기 이후에 데이터가 없을 때 반환하는 데이터
    fallbackData: INIT_DATA,
    // 포커스될때 fetcher로 가져오기 해제
    // rebalidate: 캐시와 fetcher로 가져온 데이터를 비교 후 반환
    revalidateOnFocus: false,
    // // 특정 주기별로 데이터 가져오기
    // refreshInterval: 5000,
  });

  function createContactData(contact: ContactData) {
    // 배열데이터 변경(mutation)
    // 기존배열에 매개변수로 받은 객체를 추가하고 새로운 배열 반환

    // mutate(변경할데이터) -> 데이터를 변경

    // mutate 함수
    // 데이터를 변경하고 변경된 데이터를 반환
    // mutate((이전데이터) => {... return 변경된데이터})
    mutate(
      async (
        // 데이터 가져오기 이전이고, 최초의 상태변경이면 undefined로 되어있음
        prevData: ContactData[] = [...INIT_DATA]
      ) => {
        // console.log("--contacts-prev-data--");
        console.log(prevData);

        // 기존 데이터로 신규 배열 생성
        let nextData = [...prevData];

        try {
          // ex) 서버연동 fetch post contact -> id
          const response = await contactsApi.post(CONTACTS_DATA_KEY, contact);

          if (response.status === 201) {
            // 배열 앞쪽에 추가
            // 서버에서 추가된 데이터로 상태 변경
            nextData.unshift({
              ...response.data,
            });
          }
        } catch (e: any) {
          console.log(e);
        }

        // // 로컬스토리지에 저장
        // localStorage.setItem(
        //   CONTACTS_DATA_KEY,
        //   JSON.stringify(nextData) // 배열을 저장
        // );

        // 변경된 데이터(상태값)를 반환
        return nextData;
      },
      false
    );
    //mutate(처리함수, false);
    //mutate 이후에 캐시만 업데이트 하고, fetcher를 처리하지 않음
  }

  return {
    contactsData,
    createContactData,
    isContactDataValidating,
  };
};
