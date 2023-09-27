import {
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
// 모듈 가져오기
// 1차시도: ../TodoModifyModal.ts/tsx/js/jsx
// 2차시도: ../TodoModifyModal/index.ts/tsx/js/jsx
import TodoModifyModal from "../TodoModifyModal";
import { TodoContainer } from "./styles";
import axios from "axios";

interface TodoItem {
  id?: number;
  memo: string;
}

const Todo = () => {
  // 할일목록 상태(string[])
  const [todoList, setTodoList] = useState<
    TodoItem[]
  >([]);
  const [showModifyModal, setShowModifyModal] =
    useState(false);
  const [modifyItem, setModifyItem] = useState({
    index: 0,
    memo: "",
  });
  // 입력박스 참조
  // useRef() 참조변수 생성, 기본이 null
  // as MutableRefObject<참조할 변수의 타입>
  const inputRef =
    useRef() as MutableRefObject<HTMLInputElement>;

  // 배열에 추가할 때는
  // 새로운 배열 생성, 기존 배열 나열, 신규 요소 넣음
  const handleAdd = () => {
    // 참조하는 객체의 현재상태는 참조변수.current
    const input = inputRef.current;

    console.log(input);
    console.log(input.value);

    (async () => {
      try {
        const response =
          await axios.post<TodoItem>(
            "http://localhost:9090/todos",
            {
              memo: input.value,
            }
          );

        console.log(response);
        if (response.status === 201) {
          // push, unshift X
          // 리액트 state를 변경할 때는 다른 참조로 넣어야함
          // 객체/배열...

          // 항상 상태변경은 상태변경 함수로만 처리해야함
          // 매개변수에는 기존 상태와 다른 참조를 매개변수로 넣어야함
          // 새로운 객체를 생성해야함

          // []: 새로운 배열생성
          // ...arr: 배열요소 나열
          // [...arr]: arr 배열요소를 나열해서 새로운 배열 생성

          // filter, map.. 이런형태의 새로운 배열을 반환하는 함수
          setTodoList([
            { ...response.data },
            ...todoList,
          ]);
          input.value = "";
        }
      } catch (e: any) {
        console.log(e);
      }
    })();
  };

  const handleRemove = (index: number) => {
    (async () => {
      const id = todoList[index].id;
      const response = await axios.delete(
        `http://localhost:9090/todos/${id}`
      );
      if (response.status === 200) {
        // 해당 조건에 맞는 요소만 제외된 배열을 만듦
        // filter
        setTodoList(
          todoList.filter(
            (_, idx) => idx !== index
          )
        );
      }
    })();
  };

  // 모달창을 열고 선택한 항목의 데이터를 모달로 넘겨주는 역할
  const handleOpenModifyModal = (
    index: number
  ) => {
    // 모달 열기
    setShowModifyModal(true);
    // 선택한 데이터 넘겨주기
    setModifyItem({
      index,
      memo: todoList[index].memo,
    });
  };

  // 수정후 확인 버튼
  const handleModifyModalConfirm = ({
    index,
    memo,
  }: {
    index: number;
    memo: string;
  }) => {
    (async () => {
      const response = await axios.put(
        `http://localhost:9090/todos/${todoList[index].id}`,
        {
          memo,
        }
      );
      console.log(response);

      // 특정 요소의 값만 변경된 배열을 생성하여 반환
      // map
      setTodoList(
        todoList.map((item, idx) => {
          // 수정중인 요소와 같은 인덱스이면
          if (index === idx) {
            // 메모를 수정
            return { index, memo };
          }
          return item;
        })
      );
      setShowModifyModal(false);
    })();
  };

  // 취소 버튼
  const handleModifyModalCancel = () => {
    setShowModifyModal(false);
  };

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  // useEffect(함수블럭, [의존변수])
  // 변수값(상태, 속성)이 변경되면 함수 블럭이 실행됨

  // []: 빈 배열로 넣게되면, 처음 컴포넌트 렌더링 됐을 때 한 번 될 때
  // 의존변수 배열을 안넣게 되면 컴포넌트가 업데이트 될 때 마다 실행된다.
  // useEffect(() => {});
  useEffect(() => {
    (async () => {
      // setLoading(true)
      try {
        const response = await axios.get<
          TodoItem[]
        >(
          "http://localhost:9090/todos?_sort=id&_order=desc"
        );
        console.log(response);
        setTodoList([...response.data]);
      } catch (e: any) {
        console.log(e);
      }
      // setLoading(false)
    })();
  }, []);

  return (
    <TodoContainer>
      {/* ref 속성에 참조변수 */}
      <header>
        <input
          placeholder="..할일"
          ref={inputRef}
        ></input>
        <button onClick={handleAdd}>추가</button>
      </header>
      {todoList.length === 0 && (
        <p>할 일 목록이 없습니다.</p>
      )}
      {todoList.length > 0 && (
        <>
          <ul>
            {/* li  */}
            {/* li  */}
            {/* li  */}

            {/* string[] => <li>[]  */}
            {/* 데이터 -> JSX.Element 변경 */}
            {todoList.map((item, index) => (
              // key 속성은 엘리먼트 변동여부를 추적할 때 사용하는 속성
              // key가 변동되면, 엘리먼트를 다시 새로 만듦
              // 키값을 변동되는 인덱스보다, 유일한 id값을 쓰는게 좋다.
              <li
                key={`todo-item-${item.id}`}
                onClick={() => {
                  // handleRemove(index);
                  handleOpenModifyModal(index);
                }}
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemove(index);
                  }}
                >
                  삭제
                </button>
                <span>{item.memo}</span>
              </li>
            ))}
          </ul>
          <footer>
            <data>{todoList.length}</data> 개의
            할일
          </footer>
        </>
      )}
      {showModifyModal && (
        <TodoModifyModal
          // 상태값을 자식의 속성으로 넘겨줘야 함
          index={modifyItem.index}
          memo={modifyItem.memo}
          // 자식의 이벤트를 처리하는 함수를 속성으로 넘겨줘야 함
          onConfirm={handleModifyModalConfirm}
          onCancel={handleModifyModalCancel}
        />
      )}
    </TodoContainer>
  );
};

export default Todo;
