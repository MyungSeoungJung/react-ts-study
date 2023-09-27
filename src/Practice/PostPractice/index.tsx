import { Link, Outlet } from "react-router-dom";

const PostPractice = () => {
  return (
    <div>
      <h1>PostPractice</h1>
      <main>
        <ul>
          <li>
            <Link to="/postPractice/postPracticeForm">PostPracticeFrom</Link>
          </li>
          <li>
            <Link to="/postPractice/postPracticeList">PostPracticeList</Link>
          </li>
        </ul>
      </main>
      <Outlet />
    </div>
  );
};

export default PostPractice;
