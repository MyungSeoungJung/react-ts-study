import { useNavigate } from "react-router-dom";

const ContactList = () => {
  const contacts = [
    {
      id: 1,
      name: "Alice",
      phone: "010-1234-5678",
    },
    {
      id: 2,
      name: "John",
      phone: "010-0987-6543",
    },
  ];

  const navigate = useNavigate(); //이동

  const handleClickItem = (id: number) => {
    navigate(`/contacts/detail/${id}`); // li id값에 URL이동
  };

  return (
    <div>
      <h3>Contact List</h3>
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
