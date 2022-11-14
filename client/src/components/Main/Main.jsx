import React, { useRef } from "react";
import { Link } from "react-router-dom";
//style
import "../Main/Main.css"
function Main() {
  //to take the value of theinput as a reference using ref hook
  const inputRef = useRef(null);

  return (
    <div className="container">
      <h1 className='title text-light'>Welcome to my Quiz App</h1>
      <ol>
        <li>You will be asked 10 questions one after another</li>
        <li>1 point for each question</li>
        <li>Each questions has 4 options. You can choose only one option</li>
        <li>You can review and change answers before the quiz finish</li>
        <li>The Result will be declared at the end of quiz</li>
      </ol>

      <form id="form">
        <input ref={inputRef} className="userid" type="text" placeholder="Username*" />
      </form>

      <div className="start">
        {/* linking the button to the quiz page */}
        <Link className="btn" to={"Quiz"}>
          Start Quiz
        </Link>
      </div>
    </div>
  );
}

export default Main;
