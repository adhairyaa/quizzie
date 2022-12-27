import Router from "./router/Router";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { useTheme } from "./context/themeContext/ThemeProvider";

function App() {
  const { theme } = useTheme();
  return (
    <div className="App">
      <Navbar />
      <div className={theme}>
        <Router />
      </div>
    </div>
  );
}

export default App;
