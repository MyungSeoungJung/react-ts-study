import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div id="layout">
      {/* 링크들이 들어가는 곳 */}
      <nav>
        <ul style={{ display: "flex", gap: "40px" }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {/* 페이지 이동 */}
            {/* <a href="/todo">Todo</a> */}

            {/* url에 맞는 컴포넌트만 로딩 */}
            {/* App 컴포넌트의 Route에서 정의된 path를 사용 -----------------*/}
            <Link to="/todo">Todo</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </nav>
      {/* 세부 화면들이 나오는 곳 */}
      <main>
        {/* 세부경로의 컴포넌트들이 로딩위치 */}
        {/* 로딩중일때 보여줄 태그 */}
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
          {/* 여기에 하위 컴포넌트들이 렌더링 됨 */}
        </Suspense>
      </main>
    </div>
  );
}

export default Layout;
