interface AlertProps {
  message: string;
  onClose: () => void;
}

// const Alert = ({message,onClose}: {message : string, onClose: () => void}) => {
const Alert = ({ message, onClose }: AlertProps) => {
  const handleClickClose = () => {
    onClose();
  };

  return (
    <div>
      <p>{message}</p>
      <button onClick={handleClickClose}>닫기</button>
    </div>
  );
};

export default Alert;
