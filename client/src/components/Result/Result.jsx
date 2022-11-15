import React from 'react'
import {Link} from "react-router-dom"
import "./Result.css"
function Result() {
  const onRestart = () => {
console.log("on restart")
  }

  return (
    <div className="container">
      <h1 className="title text-light">Quiz</h1>
      <div className="result flex-center">
        <div className="flex">
          <span>Username</span>
          <span className='bold'>Sangee</span>
        </div>
        <div className="flex">
          <span>Total Questions</span>
          <span className='bold'>20</span>
        </div>
        <div className="flex">
          <span>Correct Answers</span>
          <span className='bold'>10</span>
        </div>
        <div className="flex">
          <span>Wrong Answers</span>
          <span className='bold'>10</span>
        </div>
        <div className="flex">
          <span>Total points</span>
          <span className='bold'>50</span>
        </div>
      </div>
      <div className="start">
        <Link className='btn' to={"/"} onClick={onRestart} >Restart</Link>
      </div>
      </div>
  )
}

export default Result