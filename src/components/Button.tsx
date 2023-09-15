interface ButtonProps {
  label: string;
  color?: "primary" | "secondary";
  onClick?: () => void; //버튼 클릭이벤트 분기 처리하려면 매개변수가 없고 리턴값이 없는 함수를 받는다
}

//----------------------------------button-------------------------------------------------
const Button = ({ label, color = "primary", onClick }: ButtonProps) => {
  const buttonStyle =
    color === "primary"
      ? { backgroundColor: "blue", color: "white" } //primary면 이 색상
      : { backgroundColor: "gray" }; //secondary면 이 색상

  const handleClick = (e: React.MouseEvent) => {
    // HTML Mouse event
    //  ㄴ> e.nativeEvent;

    // 속성(props)으로 넘어온 함수가 있으면 함수를 호출합니다.
    onClick && onClick();
  };

  return (
    <button style={buttonStyle} onClick={handleClick}>
      {label}
    </button>
  );
};
//----------------------------------button-------------------------------------------------
export default Button;
