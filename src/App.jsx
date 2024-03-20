import "./App.css";
import ScrollTopBtn from "./components/ScrollTopBtn";
import { Main } from "./sections/Main";
import { Header } from "./sections/header";

function App() {
  return (
    <div className="min-h-dvh">
      <ScrollTopBtn />
      <Header />
      <Main />
    </div>
  );
}

export default App;
