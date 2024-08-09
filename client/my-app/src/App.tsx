import "./App.css";
import { DashBoard } from "./shared-component/DashBoard/DashBoard";
import { NavBar } from "./shared-component/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <DashBoard />
    </div>
  );
}

export default App;
