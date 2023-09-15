interface WelcomeMessageProps {
  name?: string;
}

//  리엑트에서 컴포넌트 함수인데. JSX.Element를 반환하는 함수

// React 컴포넌트는 매개변수를 객체로 받아야함
// React Props : 함수의 객체형태 매개변수
const WelcomeMessage = ({ name = "ChatGPT" }: WelcomeMessageProps) => {
  // 변수명 파일 이름하고 동일해야함!!!
  // const name = "ChatGPT";

  // <></> fragment
  // JSX : js 가상 DOM에  객체, HTML 스타일로 작성
  // <></> : JSX Element

  // 컴포넌트에서 최상위 부모엘리먼트는 1개만 존재
  // return <></>;
  return (
    <div>
      {/* 바인딩(bind): 데이터(변수 값)을 템플릿에 출력 */}
      {/* 리액트는 단방향 바인딩만 지원,  코드 -> 템플릿 */}
      {/* {name}: jsx의 자바 스크립트 표현식 */}
      {/* jsx: 속성={값} */}
      {/* jsx: 속성={객체} */}
      <h1 style={{ color: "green" }}>Welcome, {name}! </h1>
      <p>This is an example of JSX in React.</p>
    </div>
  );
};

export default WelcomeMessage;
