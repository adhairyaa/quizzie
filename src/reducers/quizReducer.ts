export const quizReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_QUIZ": {
      return { ...state, quizData: action.payload };
    }
    case "OPTION_CLICKED": {
      return {
        ...state,
        currentQuestionNumber: state.currentQuestionNumber + action.payload,
      };
    }
    default:
      return state;
  }
};
