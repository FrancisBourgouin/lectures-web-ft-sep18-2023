import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import Question from "./components/Question";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <section>
          <Question />
        </section>
      </main>
    </>
  );
}

export default App;
