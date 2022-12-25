import { QuizCard } from "../../components/navbar/quizCard/QuizCard";
import allQuiz from "../../data/allQuiz.json";
import "./Home.css";
function Home() {
  return (
    <>
      <div className="quizes-container">
        {allQuiz.quizes.map((quiz, index) => (
          <QuizCard coverImage={quiz.image} title={quiz.name} index={index} />
        ))}
      </div>
    </>
  );
}

export default Home;
