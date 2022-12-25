import { Navbar } from "../../components/navbar/Navbar";
import { QuizCard } from "../../components/navbar/quizCard/QuizCard";
import allQuiz from "../../data/allQuiz.json";
function Home() {
  return (
    <>
      <Navbar />
      <div>Home </div>
      <div className="quizes-container">
        {allQuiz.quizes.map((quiz, index) => (
          <QuizCard coverImage={quiz.image} title={quiz.name} index={index} />
        ))}
      </div>
    </>
  );
}

export default Home;
