import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Header />
      <div className="flex mt-[80px]">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
