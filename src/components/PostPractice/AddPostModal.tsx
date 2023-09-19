import { useState } from "react";

// 부모 컴포넌트에서 자식 컴포넌트로 함수를 전달할 때 해당 함수의 형태를 명시적으로 정의하고자 사용
interface AddPostModalProps {
  onAddPost: (title: string, content: string) => void;
  onClose: () => void;
}

//  이곳에서 부모의 handleAddPost함수를 받음
const AddPostModal = ({ onAddPost, onClose }: AddPostModalProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const AddPost = () => {
    //컴포넌트 내부 함수

    onAddPost(title, content);
    setTitle("");
    setContent("");
    onClose();
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9990,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
      }}
    >
      <input
        type="text"
        placeholder="제목을 입력해주세요"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="컨텐츠를 입력해주세요"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={AddPost}>게시글 작성</button>
      <button onClick={onClose}>닫기</button>
    </div>
  );
};

export default AddPostModal;
