import styled from "styled-components"

export const Button = styled.button`
    color: white;
    background-color: black;
    min-width: 220px;
    border-radius: 5px;
    border: none;
    padding: 10px 18px;
    font-size: 16px;
    border: 1px solid black;
    transition:  ease .5s;

    &:hover{
        background-color: white;
        color: black;
        border: 1px solid black;
        transition:  ease .3s;
    }
`;

export const OutlineButton = styled(Button)`
background-color: white;
border: 1px solid black;
color: black;
  &:hover{
        background-color: black;
        color: white;
        border: 1px solid transparent;
    }
`;