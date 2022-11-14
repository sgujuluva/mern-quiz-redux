import React from "react";

function Quiz() {
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
