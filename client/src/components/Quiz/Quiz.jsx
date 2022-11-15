import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
//component
import Questions from "../Questions/Questions";

function Quiz() {
  const {questions} = useSelector(state => state);

  useEffect(() => {
    console.log("the ques text is",questions);
  });

  const onPrevious = () => {
    console.log("on previous click");
  };

  const onNext = () => {
    console.log("on next click");
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
