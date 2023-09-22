import { useNavigate } from "react-router-dom";
import { useContactsData } from "../data";
import { useState } from "react";

const ContactList = () => {
  const [page, setPage] = useState(0);
  // 컴포넌트가 마운팅될때 1번찍히고
  // contactData를 fetcher로 가져온 다음에 상태가 업데이트 된다음에 1번찍힘
  // console.log(page);

  const { contactsData: contacts } = useContactsData(page);

  const navigate = useNavigate();

  const handleClickItem = (id: number) => {
    navigate(`/contacts/detail/${id}`);
  };

  return (
    <div>
      <h3>Contact List</h3>
      {/* 페이지 버튼 */}
      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Next
      </button>
      <ul>
        {contacts.map((c) => (
          <li
            style={{ cursor: "pointer" }}
            key={`item-${c.id}`}
            onClick={() => {
              handleClickItem(c.id);
            }}
          >
            <span>
              {c.name} - {c.phone}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
