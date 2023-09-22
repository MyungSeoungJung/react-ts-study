import { MutableRefObject, useRef } from "react";
import { useProfileData } from "../ProfileView/data";

const ProfileEdit = () => {
  // 선택자 같은 거
  const nicknameRef = useRef() as MutableRefObject<HTMLInputElement>;
  const emailRef = useRef() as MutableRefObject<HTMLInputElement>;

  const { ProfileData, mutateProfileData } = useProfileData();
  const { nickname, email } = ProfileData;

  const handleSave = () => {
    // 서버하고 연동한 다음에 mutate하면 됨

    mutateProfileData({
      nickname: nicknameRef.current.value,
      email: emailRef.current.value,
    });
  };

  return (
    <div>
      <input ref={nicknameRef} defaultValue={nickname} />
      <input ref={emailRef} defaultValue={email} />
      <button onClick={handleSave}>save</button>
    </div>
  );
};

export default ProfileEdit;
