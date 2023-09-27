import http from "@/utils/http";
import { useEffect, useRef, useState } from "react";

interface PostItem {
  id: number;
  title: string;
  content: string;
  files: PostFile[];
}

interface PostFile {
  contentType: string;
  originalFileName: String;
  uuidFileName: string;
}

function MediaElement({
  contentType,
  uuidFileName,
}: {
  contentType: string;
  uuidFileName: string;
}) {
  if (contentType.includes("image")) {
    return (
      <img
        width={300}
        src={`http://localhost:8080/posts/files/${uuidFileName}`}
      />
    );
  } else {
    return (
      <video>
        <source
          src={`http://localhost:8080/posts/files/${uuidFileName}`}
          type={contentType}
        ></source>
      </video>
    );
  }
}

const PostList = () => {
  const [posts, setPosts] = useState<PostItem[]>([]);

  const fileRef = useRef<HTMLInputElement>();
  const titleRef = useRef<HTMLInputElement>();
  const contentRef = useRef<HTMLTextAreaElement>();
  const formRef = useRef<HTMLFormElement>();

  useEffect(() => {}, []);

  const handlePost = (e: React.FormEvent) => {
    // 이걸 안하면 현제 페이지에 폼데이터 전송
    e.preventDefault();

    // multipart/form-data 파일업로드하려면
    const formData = new FormData();

    Array.from(fileRef.current.files).forEach((file) => {
      formData.append("files", file);
    });

    formData.append("title", titleRef.current.value);
    formData.append("content", contentRef.current.value);

    (async () => {
      const response = await http.post<PostItem>("/posts/with-file", formData);

      console.log(response);
      if (response.status === 201) {
        formRef.current.reset();
        setPosts([{ ...response.data }, ...posts]);
      }
    })();
  };

  return (
    <div>
      <h2>Post List</h2>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "400px",
        }}
        onSubmit={handlePost}
        ref={formRef}
      >
        <input
          type="file"
          multiple
          accept="image/*, video/*"
          ref={fileRef}
        ></input>
        <input placeholder="제목.." ref={titleRef}></input>
        <textarea placeholder="내용.." ref={contentRef}></textarea>
        <button>게시</button>
      </form>
      <div>
        <ul>
          {posts.map((post) => (
            <li key={`post-item-${post.id}`}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <div>
                {post.files.map((file) => (
                  <MediaElement
                    uuidFileName={file.uuidFileName}
                    contentType={file.contentType}
                  />
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostList;
