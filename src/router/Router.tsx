import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import PlayQuiz from "../pages/quiz/PlayQuiz";
import Result from "../pages/result/Result";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/result" element={<Result />}></Route>
        <Route path="/quiz/:quizNumber" element={<PlayQuiz />}></Route>
      </Routes>
    </div>
  );
}

export default Router;
