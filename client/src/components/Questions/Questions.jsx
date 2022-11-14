import React, { useState } from 'react'
import { useEffect } from 'react'
import data from "../../data"
import "../Questions/Questions.css"

function Questions() {

    const [checked, setChecked] = useState(undefined);

    const question = data[0]

    useEffect(() => {
        console.log(question)
    })

    const onSelect = () => {
        console.log("radio buttton change")
    }
  return (
    <div className="questions">
     <h2>{question.question}</h2>
     <ul key = {question}>
       {
        question.options.map((option,index) => (
            <li key={index}>
            <input 
            type="radio"
             name="options" 
             id={`question${index}-option`}
             value={false}
             onChange={onSelect()}
             />
             <label className="text-primary" htmlFor={`question${index}-option`}>{option}</label>
             <div className="check "></div>    {/*---checked---- check and uncheck the radiobutton using class */}
        </li>
        ))
       }
     </ul>
        </div>
  )
}

export default Questions