import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

function Wrapper() {
  return (
    <div>
      <nav>
        <ul>
          {/* Route에서 지정한 경로 사용 */}
          <li>
            <Link to="/"> Main Page</Link>
          </li>
          <li>
            <Link to="/todo"> TodoList </Link>
          </li>
          <li>
            <Link to="/ListSideBar">ListSideBar</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
          {/* 여기에 하위 컴포넌트들이 렌더링 됨 */}
        </Suspense>
      </main>
    </div>
  );
}
export default Wrapper;
