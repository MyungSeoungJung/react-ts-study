import { createRoot } from "react-dom/client";
// 최상위 컴포넌트
import App from "./App";

// React DOM 엘리먼트 리액트 컴포넌트를 삽입하는 코드가 한번은 존재해야 함
// React 컴포넌트를 삽입할 위치를 지정
const root = createRoot(document.getElementById("root"));
root.render(<App />);
