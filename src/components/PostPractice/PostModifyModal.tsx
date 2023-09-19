import { MutableRefObject, useRef } from "react";

interface PostModifyProps {
  index: number;
  title: string;
  content: string;
  onConfirm: (payload: {
    index: number;
    title: string;
    content: string;
  }) => void;
  onClose: () => void;
}
const PostModifyModal = ({
  index,
  title,
  content,
  onConfirm,
  onClose,
}: PostModifyProps) => {
  const titleInput = useRef() as MutableRefObject<HTMLInputElement>;
  const contentInput = useRef() as MutableRefObject<HTMLInputElement>;

  const handleModfiy = () => {
    onConfirm({
      index,
      title: titleInput.current.value,
      content: contentInput.current.value,
    });
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
        defaultValue={title}
        ref={titleInput}
        placeholder="수정할 제목을 입력해주세요"
      />
      <input
        ref={contentInput}
        defaultValue={content}
        placeholder="수정할 컨텐츠를 입력해주세요"
      />
      <button onClick={handleModfiy}>수정하기</button>
      <button onClick={onClose}>창 닫기</button>
    </div>
  );
};

export default PostModifyModal;
