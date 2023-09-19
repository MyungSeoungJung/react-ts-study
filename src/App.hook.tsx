import Counter from "./components/Counter";
import Layout from "./components/Layout";
import Todo from "./components/Todo";
import WelcomeMessage from "./components/WelcomMessage";

const App = () => {
  return (
    <>
      <Counter />
      <hr />
      <Todo />
      <hr />
      <Layout title="Alice">
        {/* childern 속성을 안쪽 태그에 */}
        <WelcomeMessage name="Alice" />
        <p> Welcome to out website</p>
      </Layout>
    </>
  );
};

export default App;
