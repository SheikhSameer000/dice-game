import styled from "styled-components";
import Totalscore from "./Totalscore";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import { useState } from "react";
import { Button, OutlineButton } from "../styled/button";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setscore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState();
  const [showRules, setshowRules] = useState(false);


  const genrateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if(!selectedNumber) {
      setError("You have not selected any number");
      return;
    };


    const randomNumber = genrateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);


    if( selectedNumber == randomNumber)
     {
        setscore(prev => prev + randomNumber);
      }
      else{
        setscore(prev => prev - 2);
      }
    
      setSelectedNumber(undefined);


  };

  const resetcore = () => {
    setscore(0);
  }
  return (
    <MainContainer>
      <div className="top-section">
        <Totalscore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btns">
        <OutlineButton onClick={resetcore}>Reset Score</OutlineButton>
        <Button onClick={() => setshowRules((prev) => !prev)}>{showRules ? "Hide" : "Show"} Rules</Button>
      </div>
      {showRules && <Rules/>}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.div`
  padding-top: 70px;

  .top-section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns{
    gap: 10px;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;
