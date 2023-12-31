import { useCallback, useEffect, useState } from "react";
import Alert from "./Alert";

//  1. props와 state 둘 다 렌더링 결과물에 영향을 주는 변수
//  2. props는 함수 매개변수처럼 컴포넌트에 전달
//  3. state는 함수 내에 선언된 변수(변수 변경함수가 존재)
const Counter = () => {
  // const [상태변수, 상태변경함수] = useState<상태타입> (초깃값)
  // 상태값 정의
  // 상태값이 변경이 생기면 컴포넌트를 다시 렌더링한다
  // 1. 상태값이 변경이 생기면 컴포넌트 렌더링 요청이 발생
  // 2. 컴포넌트의 속성값 변동이 있으면 렌더링 한다.
  const [count, setCount] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  // 렌더링하는 시점에 변경된 상태 값이 적용
  console.log("--렌더링 상태 값---");
  console.log(count, showAlert);

  const handleIncrement = () => {
    //  숫자값 증가
    // 상태값 변경 함수에 변경값을 대입
    // 상태값 변경 요청 -> innerText가 변경 => 렌더링
    console.log("--카운트값 증가--");

    setCount(count + 1);
    // setShowAlert(true);
    // 변형된 상태값 출력 => 상태값은 변경이 안됨
    console.log("--변경된 상태 값---");
    console.log(count, showAlert);

    // 리액트 18부터는 이벤트 핸들러 함수 안에서는 비동기 블럭에 상태변경 요청을 해도
    //  변경요청 한번 몰아서 처리한다.
    // (async () => {
    //   setShowAlert(true);
    // })();
  };

  // 함수를 메모이징
  // 함수의 현재 상태를 저장
  // useCallBack(함수블록, 의존변수배열)
  // 의존변수 배열의 값이 바뀔때만 함수를 재생성
  const haddleAlertClosed = useCallback(() => {
    if (showAlert) {
      setShowAlert(false);
    }
  }, [showAlert]); // 의존성 배열 = 배열에 나열된 값중 하나라도 변경되면 useEffect 안의 코드 블록이 실행

  // 상태값 변경이나 컴포넌트 라이프사이클 변동에 따른 처리
  useEffect(() => {
    // useEffect(함수블럭,의존변수배열)
    // 의존변수가 바뀌면 함수 블럭이 실행됨
    // 가장 처음에(의존변수가 초기화되는 시점)실행됨
    if (count != 0) {
      console.log("--얼럿박스표시--");
      if (!showAlert) {
        setShowAlert(true);
      }
    } // 함수블럭 실행
  }, [count]); //카운트가 실행되면

  return (
    <>
      {/* 조건부 렌더링 */}
      {showAlert && (
        <Alert message={`증가되었습니다`} onClose={haddleAlertClosed} />
      )}
      <div>
        <p>현재 카운트 : {count}</p>
        {/* 변경된 값이 App.tsx로 내보내짐(return)*/}
        <button onClick={handleIncrement}>증가</button>
      </div>
    </>
  );
};
export default Counter;
