import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todo from "@/modules/todo/Todo";

// 정적 import 모듈을 동기적으로 가져옴,  모듈이 사용될 때 바로 가져와지며 코드 번들에 포함
import Wrapper from "./Wrapper ";
import MainPage from "./MainPage/MainPage";

// 동적 import lazy() 함수를 사용하면 해당 모듈을 비동기적으로 가져옴,
// 이는 모듈이 필요한 시점에 가져와지며, 따로 번들로 묶여서 분리됨
const ListSideBar = lazy(() => import("./ListContent/ListSideBar/index"));
const UserForm = lazy(() => import("./ListContent/UserFrom"));
const UserList = lazy(() => import("./ListContent/UserList"));
const App = () => {
  return (
    // 라우트 기능 활성화
    <BrowserRouter>
      {/* 루트들 */}
      <Routes>
        {/* Wrapper 사용할루트 경로 지정 */}
        <Route path="/" element={<Wrapper />}>
          {/* index = 기본적으로 렌더링할 컴포넌트 지정 */}
          <Route element={<MainPage />} index />
          <Route path="todo" element={<Todo />} index></Route>

          {/* UserListContent 부모 */}
          <Route path="ListSideBar" element={<ListSideBar />}>
            {/* 자식 */}
            <Route path="UserForm" element={<UserForm />} />
            <Route path="UserList" element={<UserList />} />
          </Route>

          {/* Wrapper 감싸야됨*/}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
