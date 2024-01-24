import styled from "styled-components";

const NumberSelector = ({error, setError, selectedNumber, setSelectedNumber}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];
 
  const numberselectorhandler = (sam)=>{
    setSelectedNumber(sam);
    setError("");
  }

  return (
    <NumberSelectorConatiner>
      <p className="error">{error}</p>
      <div className="flex">
        {arrNumber.map((sam, i) => (
          <Box
          isSelected={sam === selectedNumber}
            key={i}
            onClick={() => numberselectorhandler(sam)}
          >
            {sam}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorConatiner>
  );
};

export default NumberSelector;

const NumberSelectorConatiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700;
  }
  .error{
    color: red;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  border-radius: 10px;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;

