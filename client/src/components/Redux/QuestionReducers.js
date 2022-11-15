import { createSlice } from "@reduxjs/toolkit";

export const questionReducer = createSlice({
  name: "questions",
  initialState: {
    questions: [],
    answers: [],
    currentQuestionIndex: 0,
  },
  reducers : {
    startQuizAction : (state,action) => {
        return{
            ...state,  // have initial state and update the new value from user
            questions : action.payload  //user input value
        }
    }
  }
});

export const {startQuizAction} = questionReducer.actions;

export default questionReducer.reducer
