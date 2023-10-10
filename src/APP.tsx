import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// 정적 import 방식
// import Todo from "./modules/todo/Todo";
import Layout from "./Layout";
import { Suspense, lazy } from "react";
import PostList from "./modules/post/PostList";
import PostPractice from "./Practice/PostPractice";
import PostpracticeFrom from "./Practice/PostPractice/PostPractice/PostPracticeForm";
import PostpracticeList from "./Practice/PostPractice/PostPractice/PostPracticeList";
import OrderNotification from "./modules/order/OrderNotification/OrderNotification";
import { postRoutes } from "./modules/post/PostList/routes";
const ContactSidebar = lazy(() => import("./modules/contacts/ContactSidebar"));
const ContactList = lazy(() => import("./modules/contacts/ContactList"));
const ContactDetail = lazy(() => import("./modules/contacts/ContactDetail"));
const ContactForm = lazy(() => import("./modules/contacts/ContactForm"));

// Lazy-loading 기법
// 동적인 import 방식 + lazy
// 컴포넌트 로딩 시점에 import를 함
// 웹팩으로 빌드하면 스크립트 파일이 나눠짐
// const Todo = lazy(
//   () => import("@/modules/todo/Todo")
// );

const Todo = lazy(() => {
  // 0.5초의 지연을 시뮬레이션하기 위해
  return new Promise<{
    default: React.ComponentType;
  }>((resolve) =>
    setTimeout(() => {
      resolve(import("@/modules/todo/Todo"));
    }, 500)
  );
});

const ProfileEdit = lazy(() => import("@/modules/profile/ProfilesEdit"));

const App = () => {
  // 라우팅 처리하는 곳의 가장 최상위에 BrowserRouter 감싸줘야함
  return (
    // SPA(Single Page Application)
    // 페이지: index.html 1개
    // 경로에 맞는 컴포넌트를 스크립트로 로딩
    <BrowserRouter>
      <OrderNotification />
      {/* 컴포넌트를 동적으로 로딩할 때 지연시간동안 보여주는 요소  */}
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* 컨텐츠 페이지*/}
          {/* index: 해당경로의 기본 화면 */}
          <Route element={<Home />} index />
          {/* 기능 모듈 */}
          {postRoutes}

          <Route path="todo" element={<Todo />} index />
          {/* /contacts */}
          <Route path="contacts" element={<ContactSidebar />}>
            {/* /contacts */}
            <Route element={<ContactList />} index />
            {/* /contacts/form */}
            <Route path="form" element={<ContactForm />} />
            {/* /contacts/detail/:id */}
            <Route path="detail/:id" element={<ContactDetail />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
