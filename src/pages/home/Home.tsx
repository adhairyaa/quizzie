import { QuizCard } from "../../components/navbar/quizCard/QuizCard";
import allQuiz from "../../data/allQuiz.json";
import "./Home.css";
function Home() {
  return (
    <>
      <div className="quizes-container">
        <div className="quiz-heading">
          <span> quizzie </span>
          Are you a comic enthusiast? How about we ask a few question and check
          your love for them ♥.
        </div>
        <div className="quiz-types">
          {allQuiz.quizes.map((quiz, index) => (
            <QuizCard coverImage={quiz.image} title={quiz.name} index={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
