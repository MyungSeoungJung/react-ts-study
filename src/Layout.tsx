import { Suspense } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useProfileData } from "./modules/profile/data";

function Layout() {
  // swr 데이터 -> 상태값
  // 데이터가 변경되면 컴포넌트가 다시 렌더링된다.
  const { profileData } = useProfileData();
  const { nickname } = profileData;
  // console.log(profileData);

  const navigate = useNavigate();

  const handleEditProfile = () => {
    navigate("/profile/edit");
  };

  return (
    <div>
      <header>
        <em style={{ cursor: "pointer" }} onClick={handleEditProfile}>
          {nickname}
        </em>
      </header>
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
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/postPractice">PostPractice</Link>
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
