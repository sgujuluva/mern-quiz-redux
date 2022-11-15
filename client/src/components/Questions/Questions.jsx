import React, { useState } from "react";
import { useEffect } from "react";
//import data from "../../data";
import "../Questions/Questions.css";
/* custom hooks */
import { useFetchQuestion } from "../hooks/FetchQuestion";
import { useSelector } from "react-redux";

function Questions() {
  const [checked, setChecked] = useState(undefined);
  const [{isLoading, apiData, serverError}] = useFetchQuestion();

const questions = useSelector(state => state.questions.questions[state.questions.currentQuestionIndex])

//const question = data[0]

  useEffect(() => {
    console.log("the state is",questions);
   
  });

   const onSelect = () => {
    console.log("radio buttton change");
  };

if(isLoading)
return <h3 className="text-light">isLoading</h3>

if(serverError)
return <h3 className="text-light">Server Error</h3>

  return (
    <div className="questions">
      <h2>{questions?.question}</h2>
      <ul key={questions?.id}>
        {questions.options.map((option, index) => (
          <li key={index}>
            <input
              type="radio"
              name="options"
              id={`question${index}-option`}
              value={false}
              onChange={onSelect()}
            />
            <label className="text-primary" htmlFor={`question${index}-option`}>
              {option}
            </label>
            <div className="check "></div>{" "}
            {/*---checked---- check and uncheck the radiobutton using class */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Questions;
