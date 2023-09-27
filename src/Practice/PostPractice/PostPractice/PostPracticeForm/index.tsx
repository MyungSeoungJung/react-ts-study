import http from "@/utils/http";
import { FormEvent, useRef, useState } from "react";

interface postItem {
  id: number;
  file: string;
  title: string;
  content: string;
}

const PostpracticeFrom = () => {
  const fileRef = useRef<HTMLInputElement>();
  const titleRef = useRef<HTMLInputElement>();
  const contenteRef = useRef<HTMLTextAreaElement>();

  const handlePost = (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData();

    Array.from(fileRef.current.files).forEach((file) => {
      // 배열 아닌 것을 배열로 변환
      formData.append("file", file);
    });
    formData.append("title", titleRef.current.value);
    formData.append("content", contenteRef.current.value);

    async () => {
      // const response  = await http.get()
    };
  };

  const [posts, setPost] = useState<postItem[]>([]);

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handlePost} // 기본적으로 form 태그안에 버튼이 있으면 버튼 클릭하면  연결 안되어있어도 form에 submit 이벤트 발생
      >
        <input type="file" multiple ref={fileRef} />
        <input ref={titleRef} placeholder="제목을 입력해주세요" />
        <textarea
          ref={contenteRef}
          placeholder="내용을 입력해주세요"
        ></textarea>
        <button>글 작성</button>
      </form>
    </div>
  );
};

export default PostpracticeFrom;
