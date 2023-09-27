import { MutableRefObject, useRef } from "react";
import { useProfileData } from "../data";

const ProfileEdit = () => {
  const nicknameRef =
    useRef() as MutableRefObject<HTMLInputElement>;
  const emailRef =
    useRef() as MutableRefObject<HTMLInputElement>;

  const { profileData, mutateProfileData } =
    useProfileData();
  const { nickname, email } = profileData;

  const handleSave = () => {
    // 서버하고 연동한다음에
    // mutate
    mutateProfileData({
      nickname: nicknameRef.current.value,
      email: emailRef.current.value,
    });
  };

  return (
    <div>
      <input
        ref={nicknameRef}
        defaultValue={nickname}
      />
      <input
        ref={emailRef}
        defaultValue={email}
      />
      <button onClick={handleSave}>save</button>
    </div>
  );
};

export default ProfileEdit;
