import styled from "styled-components";

const RoleDice = ({ roleDice, currentDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/public/images/dice_${currentDice}.png`} alt="dice1" />
      </div>
      <p>Click on Dice to Role</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 68px;
  flex-direction: column;
  align-items: center;
  .dice {
    cursor: pointer;
  }
  p {
    font-size: 24px;
  }
`;
 