const UserList = () => {
  const List = [
    { id: 1, name: "명승정", phone: "010-5342-2145" },
    { id: 2, name: "김민형", phone: "010-4562-6443" },
  ];

  return (
    <div>
      <h2>UserList</h2>
      <ul>
        {List.map((c) => (
          <li>
            <span>
              {c.id}, {c.name},{c.phone}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
