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
        }
    }
})

export const {setUserId} = resultReducer.actions;

export default resultReducer.reducer