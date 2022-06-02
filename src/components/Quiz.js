import React from 'react';
import { useState, useContext } from "react";
import {question} from "../helper/Question";
import { QuizContext } from "../helper/Context";

function Quiz() {
  const {game,setGame}=useContext(QuizContext);

    const [crquestion,setCrquestion]= useState(0);

    const nextQues=()=>{
      setCrquestion(crquestion+1);
    }

    const correct=(e)=>{
      e.target.id="correctOption";
    }

    const endTest=()=>{
      setGame("end")
    }

  return (
    <div className='Quiz'>
      <h1>{question[0].question}</h1>
      <div className="option">
          <button>{question[crquestion].incorrect_answers[0]}</button>
          <button id="" onClick={correct}>{question[crquestion].incorrect_answers[1]}</button>
          <button>{question[crquestion].incorrect_answers[2]}</button>
          <button>{question[crquestion].correct_answer}</button>
      </div>
      {crquestion==question.length-1 ? (<button onClick={endTest}>Finish Quiz</button>)
      :(<button onClick={nextQues}>Next Question</button>)}
      
    </div>
  )
}

export default Quiz
