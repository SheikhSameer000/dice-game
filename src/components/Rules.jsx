import { styled } from "styled-components";



const Rules = () => {
  return (
    <RulesContainer>
        <h2>How to Play Dice Game</h2>
        <div className="Text">
            <p>Select Any Number.</p>
            <p>Click On Dice.</p>
            <p>After Clicking on dice if selected number is same to the dice number you choose will get same points as dice.{""}</p>
            <p>If you get wrong guess then 2 points will be deducted.</p>
        </div>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`
    background-color: #fbf1f1;
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    margin-top: 40px;
    border-radius: 10px;
    h2{
        font-size: 24px;
    }
    .Text{
        margin-top: 24px;
    }
`;