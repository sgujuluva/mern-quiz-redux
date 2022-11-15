import { createSlice } from "@reduxjs/toolkit";

export const questionReducer = createSlice({
  name: "questions",
  initialState: {
    questionsText: [],
    answers: [],
    currentQuestionIndex: 0,
  },
  reducers : {
    startQuizAction : (state,action) => {
        return{
            ...state,  // have initial state and update the new value from user
            questions : action.payload  //user input value
        }
    },
    moveNextAction : (state) => {
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex+1
      }
    }
  }
});

export const {startQuizAction, moveNextAction} = questionReducer.actions;

export default questionReducer.reducer
