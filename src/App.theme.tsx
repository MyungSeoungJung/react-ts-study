import { useState } from "react";
import Todo from "./modules/todo/Todo";
import ResetStyle from "./styles/reset";

const App = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const handleChangeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div id="app-theme" className={theme}>
      {/* 글로벌 스타일을 가장 첫부분에 넣어야함 */}
      <ResetStyle />
      <button onClick={handleChangeTheme}>{theme}</button>
      <Todo />
    </div>
  );
};

export default App;
