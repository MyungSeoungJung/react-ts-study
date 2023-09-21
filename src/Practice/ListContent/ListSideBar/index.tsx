import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom"; // import되어있는지 잘보기

const ListSideBar = () => {
  return (
    <div>
      <aside>
        <h1>Content List</h1>
        <ul>
          <li>
            {/* 자식으로 들어가있어서 경로 지정할때 / 타고 들거야됨 */}
            <Link to="/ListSideBar/UserForm">UserForm</Link>
          </li>
          <li>
            <Link to="/ListSideBar/UserList">UserList</Link>
          </li>
        </ul>
      </aside>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default ListSideBar;
