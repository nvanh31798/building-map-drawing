import "./App.css";
import { AppContainer } from "./shared-component/AppContainer/AppContainer";
import { DashBoard } from "./shared-component/DashBoard/DashBoard";
import { NavBar } from "./shared-component/NavBar/NavBar";

function App() {
  return (
    <AppContainer>
      <NavBar />
      <DashBoard />
    </AppContainer>
  );
}

export default App;
