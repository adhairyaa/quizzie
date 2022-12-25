export const quizReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_QUIZ": {
      return { ...state, quizData: action.payload };
    }
    case "NEXT_QUESTION": {
      return {
        ...state,
        currentQuestionNumber: state.currentQuestionNumber + 1,
      };
    }
    default:
      return state;
  }
};
