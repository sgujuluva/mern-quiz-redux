import { createSlice } from "@reduxjs/toolkit";

export const questionReducer = createSlice({
  name: "questions",
  initialState: {
    queue: [],
    answers: [],
   trace: 0,
  },
  reducers : {
    startQuizAction : (state,action) => {
        return{
            ...state,  // have initial state and update the new value from user
            queue : action.payload  //user input value
        }
    },
    moveNextAction : (state) => {
      return {
        ...state,
        trace: state.trace + 1
      }
    },
    movePrevAction : (state) => {
      return{
        ...state,
        trace: state.trace - 1
      }
    }
  }
});

export const {startQuizAction, moveNextAction, movePrevAction} = questionReducer.actions;

export default questionReducer.reducer
