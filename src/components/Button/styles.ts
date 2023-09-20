import styled from "@emotion/styled";

// styled-component
// style 집합에 대한 class를 생성을 함
// <button class="class-2wqeafef">....
// label: 클래스명 케밥 케이스 = class뒤에 label이름이 붙음
// 클래스명으로 컴포넌트 찾기가 쉽다.
export const PrimaryButton = styled.button`
  label: primary-btn;
  background-color: #8a4a00;
  color: white;
`;
// ButtonProps를 ButtonHTMLElenent의 HTML속성을 확장
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  // small? : boolean;
  // large? : boolean;
  // bold? : boolean;
  size?: "md" | "sm" | "lg";
}

const gethight = ({ size, hidden }: ButtonProps) => {
  if (size === "sm") {
    return 25;
  } else if (size === "lg") {
    return 40;
  } else {
    return 30; //
  }
};

// style.엘리먼트명<속성타입> `스타일 목록`
export const Button = styled.button<ButtonProps>`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  /*         ${(속성) => "반환식"}       */
  background-color: ${({ primary }) => (primary ? "blue" : "gray")};
  font-size: ${({ primary }) => (primary ? 14 : 13)}px;
  height: ${gethight}px;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;

  /* .css-1kekf:hover */
  /*  &- 현재 스타일드 컴포넌트의 클래스명 */
  &:hover {
    background-color: ${({ primary }) => (primary ? "darkblue" : "darkgray")};
  }
`;

//  기존 스타일 컴포넌트를 이용하여 다른 컴포넌트 생성
//  기존 스타일 + 신규스타일의 css 클래스가 생성됨
export const OutlinedButton = styled(Button)`
  border: 2px solid ${({ primary }) => (primary ? "blue" : "gray")};
  background-color: white;
  color: ${({ primary }) => (primary ? "blue" : "gray")};
`;
