import "./App.css";
import { Skills } from "./components/skills/Skills";

function App() {
  return (
    <div className="App">
      <Skills skills={["HTML", "Css"]} />
    </div>
  );
}

export default App;
