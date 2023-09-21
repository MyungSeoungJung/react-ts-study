import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  // programatic방식으로 라우팅 처리
  const navigate = useNavigate();

  const handleSave = () => {
    // 검증
    // 서버 연동
    //  완료가 되면 목록화면으로 이동
    navigate("/contacts");
  };
  return (
    <div>
      <h3>Contact Form</h3>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default ContactForm;
