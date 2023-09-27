import { MutableRefObject, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useContactsData } from "../data";

const ContactForm = () => {
  // programatic방식으로 라우팅 처리
  const navigate = useNavigate();
  const nameRef = useRef() as MutableRefObject<HTMLInputElement>;
  const phoneRef = useRef() as MutableRefObject<HTMLInputElement>;

  const { contactsData, createContactData } = useContactsData(0);

  const handleSave = () => {
    // 검증
    // 서버연동
    // 상태값(데이터)변경
    createContactData({
      name: nameRef.current.value,
      phone: phoneRef.current.value,
    });

    // 완료가 되면 목록 화면으로 이동
    navigate("/contacts");
  };

  return (
    <div>
      <h3>Contact Form</h3>
      <input ref={nameRef} />
      <input ref={phoneRef} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default ContactForm;
