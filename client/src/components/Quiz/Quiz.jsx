import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//component
import Questions from "../Questions/Questions";
//hooks
import { MoveNextQuestion, MovePrevQuestion } from "../hooks/FetchQuestion";
import {PushAnswer} from "../hooks/setResult"

function Quiz() {
  const state = useSelector(state => state);
  const {queue,trace} = useSelector(state => state.questions);

const dispatch = useDispatch()

  useEffect(() => {
    console.log("current state in quiz comp is",state);
  });

  const onPrevious = () => {
    console.log("on previous click");
    if(trace > 0){
      dispatch(MovePrevQuestion())
    }
  };

  const onNext = () => {
    console.log("on next click");

    if(trace < queue.length){

      dispatch(MoveNextQuestion()) //update the currentquestionindex by 1
      dispatch(PushAnswer)
    }
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
