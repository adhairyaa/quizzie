import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuiz } from "../../context/quizContext/QuizProvider";
import allQuiz from "../../data/allQuiz.json";
import "./PlayQuiz.css";

function PlayQuiz() {
  const { quizNumber } = useParams();
  const { state, dispatch } = useQuiz();
  const { quizData, currentQuestionNumber, score } = state;
  const navigate = useNavigate();
  useEffect(() => {
    dispatch({ type: "SET_QUIZ", payload: allQuiz.quizes[Number(quizNumber)] });
  }, [dispatch, quizNumber]);

  const handleOptionClicked = (optionSelected: any) => {
    const selectedOptionData = quizData.questions[
      currentQuestionNumber
    ].options.find((option: any) => option.text === optionSelected);

    selectedOptionData.isRight
      ? dispatch({ type: "MANAGE_SCORE", paylaod: 5 })
      : dispatch({ type: "MANAGE_SCORE", paylaod: -5 });

    dispatch({ type: "NEXT_QUESTION" });

    dispatch({ type: "SAVE_SELECTED_OPTION", payload: optionSelected });
  };
  if (quizData === null) {
    return <div>loading...</div>;
  } else {
    currentQuestionNumber === quizData.questions.length && navigate("/result");
    return (
      <div className="play-quiz">
        <div className="quiz-score">Score:{score}</div>
        <img
          src={quizData.questions[currentQuestionNumber].questionImage}
          alt={quizData.name}
        ></img>
        <div className="quiz-question">
          Q:{quizData.questions[currentQuestionNumber].question}
          {quizData.questions[currentQuestionNumber].options.map(
            (option: any) => (
              <div className="quiz-options">
                <button onClick={() => handleOptionClicked(option.text)}>
                  {option.text}
                </button>
              </div>
            )
          )}
        </div>
      </div>
    );
  }
}

export default PlayQuiz;
