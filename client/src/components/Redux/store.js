import {combineReducers,configureStore} from "@reduxjs/toolkit"
//reducers
import questionReducer from "./QuestionReducers"
import {resultReducer} from "./ResultReducer"

const rootReducer = combineReducers({
questions: questionReducer,
result: resultReducer
})

/* creating store with reducer */
export default configureStore({reducer : rootReducer})