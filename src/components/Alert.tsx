import { useEffect } from "react";

interface AlertProps {
  message: string;
  onClose: () => void;
}

// const Alert = ({message,onClose}: {message : string, onClose: () => void}) => {
const Alert = ({ message, onClose }: AlertProps) => {
  const handleClickClose = () => {
    onClose();
  };

  useEffect(
    function () {
      console.log("메시지가 초기화되거나 변경되었습니다.");
      console.log(message);
    },
    [message]
  );
  return (
    <div>
      <p>{message}</p>
      <button onClick={handleClickClose}>닫기</button>
    </div>
  );
};

// memo(컴포넌트)
// 컴포넌트를 메모이제이션
// 컴포넌트의 속성값이 바뀌지않으면, diff나 렌더링을 수행하지않겠다.
// 메모이제이션을 해야되는 조건을 별도로 줄 수있음
// export default memo(
//   Alert,
//   (prevprops, nextProps) => prevprops.message === nextProps.message
// );

export default Alert;
