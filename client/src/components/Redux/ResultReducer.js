import { createSlice } from "@reduxjs/toolkit";

export const resultReducer = createSlice({
    name:"result",
    initialState : {
        userId : null,
        result : []
    },
    reducers:{
        setuserId : (state,action) => {
            state.userId = action.payload // input from the user
        },
        pushResultAction : (state,action) => {
            state.result.push(action.payload) //pushing the user selected answer to the result array
        }
    }
})

export const {setUserId, pushResultAction} = resultReducer.actions;

export default resultReducer.reducer