import Router from "./router/Router";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
