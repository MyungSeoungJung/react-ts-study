import { MutableRefObject, useRef, useState } from "react";
import AddPostModal from "./AddPostModal"; // 파스칼케이스로 작성안하면 오류 발생
import PostModifyModal from "./PostModifyModal";
interface postContent {
  title: string;
  content: string;
  // addContent: (payload: { title: string; content: string }) => void;
}

const Post = () => {
  const [postList, setPostList] = useState<postContent[]>([]); // 포스트 배열
  const [addModal, setShowAddModal] = useState(false); // add포스트 모달
  const [ModifyModal, setModifyModal] = useState(false);
  const [ModifyItem, setModifyItem] = useState({
    index: 0,
    title: "",
    content: "",
  });

  //자식 컴포넌트로 함수 전달
  const handleAddPost = (title: string, content: string) => {
    //이 함수가 AddPostModalProps로 전달
    const newPost = { title, content };
    setPostList([newPost, ...postList]);
    setShowAddModal(false);
  };

  const handleModalBox = () => {
    setShowAddModal(false);
  };

  const openModalBox = () => {
    setShowAddModal(true);
  };

  const openModifyModal = (index: number) => {
    setModifyModal(true);
    setModifyItem({
      index,
      title: postList[index].title,
      content: postList[index].content,
    });
  };
  const closeModifyModal = () => {
    setModifyModal(false);
  };
  //  전달한 함수
  const handleModifyConfirm = ({
    index,
    title,
    content,
  }: {
    index: number;
    title: string;
    content: string;
  }) => {
    setPostList(
      postList.map((item, idx) => {
        // 수정중인 요소와 같은 인덱스이면
        if (index === idx) {
          // 메모를 수정
          return { index, title, content };
        }
        return item;
      })
    );
    setModifyModal(false);
  };
  return (
    <div>
      <button onClick={openModalBox}>글 작성</button>
      {addModal && (
        <AddPostModal onAddPost={handleAddPost} onClose={handleModalBox} />
      )}
      <ul>
        {postList.map((post, index) => (
          <li key={index}>
            <strong>Title:</strong> {post.title}, <strong>Content:</strong>{" "}
            {post.content}
            <button
              onClick={() => {
                openModifyModal(index);
              }}
            >
              수정
            </button>
            <button>삭제</button>
          </li>
        ))}
      </ul>
      {ModifyModal && (
        <PostModifyModal
          index={ModifyItem.index}
          title={ModifyItem.title}
          content={ModifyItem.content}
          onConfirm={handleModifyConfirm}
          onClose={closeModifyModal}
        />
      )}
    </div>
  );
};

export default Post;
