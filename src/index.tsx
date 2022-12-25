import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./context/themeContext/ThemeProvider";
import { BrowserRouter } from "react-router-dom";
import { QuizProvider } from "./context/quizContext/QuizProvider";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QuizProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </QuizProvider>
    </BrowserRouter>
  </React.StrictMode>
);
