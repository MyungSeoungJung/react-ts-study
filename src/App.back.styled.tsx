import {
  Button,
  ButtonProps,
  OutlinedButton,
  PrimaryButton,
} from "./components/Button/styles";
import FCButton from "./components/Button";
import { useState } from "react";

const App = () => {
  // 인터페이스의 필드형식을 가져오려면
  // 인터페이스["필드명"] -> ex) "md" | "lg" | "sm"
  const [size, setSize] = useState<ButtonProps["size"]>("md");

  return (
    <>
      {/* HTML의 기본 속성을 모두 사용할 수 있음 */}
      <PrimaryButton
        onClick={() => {
          alert("Click");
        }}
      >
        버튼
      </PrimaryButton>

      {/* Fuction Compnent에 선언된 속성만 사용가능 (타입스크립트) */}
      <FCButton label="버튼" />
      <Button primary>primary</Button>
      <Button>default</Button>
      <br></br>
      <br></br>
      {/* ----------------------------------- */}
      {/* <Button size="sm">default - sm</Button>
      <Button size="md">default - md</Button>
      <Button size="lg">default - lg</Button> */}
      <button
        onClick={() => {
          setSize("lg");
        }}
      >
        스타일 변경 -라지
      </button>
      <button
        onClick={() => {
          setSize("sm");
        }}
      >
        스타일 변경 -스몰
      </button>
      {/* 
         styled-components의 속성이 바뀌면 "클래스"가 변경이된다. 
         근데, 없는 클래스면 style태그와 클래스를 header에 생성
      */}
      <Button size={size}>default - dynamic</Button>
      {/* 기존 버튼 스타일 재활용한 버튼 */}
      <OutlinedButton>기본</OutlinedButton>
    </>
  );
};

export default App;
