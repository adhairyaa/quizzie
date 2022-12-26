import { useQuiz } from "../../context/quizContext/QuizProvider";

function Result() {
  const { state } = useQuiz();
  const { score } = state;
  return (
    <div className="result-page">
      <h1>Your Final Score : {score}</h1>
    </div>
  );
}

export default Result;
