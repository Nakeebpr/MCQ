import './App.css';
import Quiz from './components/Quiz';
import StartPage from './components/StartPage';
import { useState } from "react";
import {QuizContext} from "./helper/Context"
import Endpage from './components/Endpage';

function App() {

  const [game,setGame]=useState("start")

  return (
    <div className="App">
      <QuizContext.Provider value={{game,setGame}}>
      <h1>Welcome</h1>
      { game=="start" && <StartPage/>}
      {game=="quiz" && <Quiz/>}
      {game=="end" && <Endpage/>}

      </QuizContext.Provider>
    </div>
  );
}

export default App;
