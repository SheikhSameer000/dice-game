
import { useState } from "react";
import Startgame from "./components/startgame";
import GamePlay from "./components/GamePlay";



function App() {

  const [isgameStarted, setIsgameStarted] = useState(false)

  const toggleGameplay = () =>{
    setIsgameStarted(prev => !prev) 
  }





  return (
    <>
    {
      isgameStarted ? <GamePlay/> : <Startgame toggle={toggleGameplay}/>
    }
      
    </>
  )
}

export default App
;
