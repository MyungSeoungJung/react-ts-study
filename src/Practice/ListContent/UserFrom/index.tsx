import { MutableRefObject, useRef } from "react";

const UserForm = () => {
  const nameRef = useRef() as MutableRefObject<HTMLInputElement>;
  const phoneRef = useRef() as MutableRefObject<HTMLInputElement>;

  const handelsaveProfile = () => {};
  return (
    <div>
      <h3>UserForm</h3>
      <input ref={nameRef} />
      <input ref={phoneRef} />
      <button onClick={handelsaveProfile}> save </button>
    </div>
  );
};

export default UserForm;
