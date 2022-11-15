import React from "react";
import { MoveNextQuestion } from "../hooks/FetchQuestion";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//component
import Questions from "../Questions/Questions";
import { moveNextAction } from "../Redux/QuestionReducers";

function Quiz() {
  const {questions} = useSelector(state => state);
const dispatch = useDispatch()
  useEffect(() => {
    console.log("the ques text is",questions);
  });

  const onPrevious = () => {
    console.log("on previous click");
  };

  const onNext = () => {
    console.log("on next click");
    dispatch(MoveNextQuestion()) //update the currentquestionindex by 1
  };

  return (
    <div className="container">
      <h1 className="title text-light">Quiz</h1>

      {/* display questions */}
      <Questions />

      <div className="grid">
        <button onClick={onPrevious} className="btn prev">
          Previous
        </button>
        <button onClick={onNext} className="btn next">
          Next
        </button>
      </div>
    </div>
  );
}

export default Quiz;
