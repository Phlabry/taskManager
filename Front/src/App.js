import Phases from "./Components/Phases";
import Clock from "./Components/Clock";
import "./styles/style.css";

function App() {
  return (
    <div className="app">
      <div className="title">
        <h>Crodie</h>
      </div>
      <Clock></Clock>
      <Phases></Phases>
    </div>
  );
}

export default App;
