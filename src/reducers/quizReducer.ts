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
    case "MANAGE_SCORE": {
      return {
        ...state,
        score: state.score + action.payload,
      };
    }
    case "SAVE_SELECTED_OPTION": {
      return {
        ...state,
        selectedOptions: [...state.selectedOptions, action.payload],
      };
    }
    default:
      return state;
  }
};
