import { useParams } from "react-router-dom";

const ContactDetail = () => {
  // /contacts/detail/:id
  // :매개변수명
  // useParams<{필드명:문자열}>
  // :매개변수명 == 필드명
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h3>Contact Detail</h3>
      <p>{id}</p>
    </div>
  );
};

export default ContactDetail;
