import { Suspense } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { profile } from "webpack.config";
import {
  ProfileData,
  useProfileData,
} from "./modules/profile/ProfileView/data";

function Layout() {
  // swr 데이터 -> 상태값
  // 데이터가 변경되면 컴포넌트가 다시 렌더링된다.
  const {
    ProfileData,
    // mutateProfileData 데이터 변경안하고 읽어오는 거만 할거라 제외
  } = useProfileData();

  const { nickname } = ProfileData;
  console.log(ProfileData); //기초값 안넣어주면 default 떠서 기초값 넣어주는게 좋음

  const navigate = useNavigate();

  const handlEditProfile = () => {
    navigate("/profile/edit");
  };

  return (
    <div>
      {/* 링크들이 들어가는 곳 */}
      <nav>
        <header>
          <em style={{ cursor: "pointer" }} onClick={handlEditProfile}>
            {nickname}
          </em>
        </header>
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
