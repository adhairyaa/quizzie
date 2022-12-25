import { createContext, useContext, useReducer } from "react";
import { quizReducer } from "../../reducers/quizReducer";
const initialState = {
  quizData: null,
  currentQuestionNumber: 0,
  score: 0,
};

const QuizContext = createContext<{ state: any; dispatch: Function }>({
  state: initialState,
  dispatch: () => null,
});

export const QuizProvider = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => useContext(QuizContext);
