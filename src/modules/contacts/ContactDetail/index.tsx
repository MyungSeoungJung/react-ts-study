import { useParams } from "react-router-dom";

const ContactDetail = () => {
  //  /contacts/detail/:id
  // :매개변수명
  //  useParams<{필드명: 문자명}>
  //  :매개변수명 == 필드명  하고 같아야함
  useParams<{ id: string }>; // 매개변수 받는 훅(무조건 string타입만 쓸 수 있음)
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h3>Contact Detail</h3>
      <p>{id}</p>
    </div>
  );
};

export default ContactDetail;
