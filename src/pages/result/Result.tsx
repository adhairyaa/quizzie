import { useQuiz } from "../../context/quizContext/QuizProvider";

function Result() {
  const { state } = useQuiz();
  const { score, quizData } = state;
  return (
    <div className="result-page">
      <h1>Your Final Score : {score}</h1>

      {quizData.questions.map((question: any) => (
        <div>
          <p>Q:{question.question}</p>
          <p>{question.options.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Result;
