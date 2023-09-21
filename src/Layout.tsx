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
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}

export default Layout;
