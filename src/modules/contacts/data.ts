import useSWR from "swr";

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
const CONTACTS_DATA_KEY = "@data/contacts";

// 데이터를 가져오는 함수(서버, 로컬스토리지, 캐시, webSQL)
const contactsFetcher = ([key, page]) => {
  // console.log(key);
  // console.log(page);
  console.log("--call fetcher--");

  // fetch /contacts/paging?page={page}&size=20

  const jsonStr = localStorage.getItem(CONTACTS_DATA_KEY);

  // 로컬스토리지에 있으면 읽은 값을 객체 변환해서 반환
  if (jsonStr) {
    return JSON.parse(jsonStr) as ContactData[];
  }

  // 로컬스토리지에 없으면 초기값 반환
  return INIT_DATA;
};
// useContactsData()
export const useContactsData = (page: number) => {
  // contactsData
  const { data: contactsData, mutate } = useSWR<ContactData[]>(
    [CONTACTS_DATA_KEY, page],
    contactsFetcher,
    {
      // 캐시/또는 데이터가져오기 이후에 데이터가 없을 때 반환하는 데이터
      fallbackData: INIT_DATA,
      // 포커스될때 fetcher로 가져오기 해제
      // rebalidate: 캐시와 fetcher로 가져온 데이터를 비교 후 반환
      revalidateOnFocus: false,
      // // 특정 주기별로 데이터 가져오기
      // refreshInterval: 5000,
    }
  );
  //createContactData
  function createContactData(contact: ContactData) {
    // 배열데이터 변경(mutation)
    // 기존배열에 매개변수로 받은 객체를 추가하고 새로운 배열 반환

    // mutate(변경할데이터) -> 데이터를 변경

    // mutate 함수
    // 데이터를 변경하고 변경된 데이터를 반환
    // mutate((이전데이터) => {... return 변경된데이터})
    mutate((prevData: ContactData[]) => {
      // console.log("--contacts-prev-data--");
      // // 데이터 가져오기 이전이고, 최초의 상태변경이면 undefined로 되어있음
      // console.log(prevData);

      // 변경된 데이터
      let nextData: ContactData[];

      if (!prevData) {
        // 캐시에 데이터가 없는 경우 초기 데이터로
        nextData = [...INIT_DATA];
      } else {
        // 캐시에 데이터 있는 경우 이전 데이터로
        nextData = [...prevData];
      }

      // ex) 서버연동 fetch post contact -> id

      // 배열 앞쪽에 추가
      nextData.unshift({
        id: nextData.length + 1,
        ...contact,
      });

      // 로컬스토리지에 저장
      localStorage.setItem(
        CONTACTS_DATA_KEY,
        JSON.stringify(nextData) // 배열을 저장
      );

      // 변경된 데이터(상태값)를 반환
      return nextData;
    }, false);
    //mutate(처리함수, false);
    //mutate 이후에 캐시만 업데이트 하고, fetcher를 처리하지 않음
  }

  return { contactsData, createContactData };
};
