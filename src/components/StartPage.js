import React from 'react';
import { useContext } from "react";
import { QuizContext } from "../helper/Context";

function StartPage() {
    const {game,setGame}=useContext(QuizContext)
  return (
    <div>
      <button onClick={()=>setGame("quiz")}>Start Quiz</button>
    </div>
  )
}

export default StartPage
