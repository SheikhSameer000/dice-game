import styled from 'styled-components'
import { Button } from '../styled/button';

const Startgame = ({toggle}) => {
  return (
    <Container>
        <div>
        <img src="/public/images/dices.png" alt="" />
        </div>
        <div className='content'>
            <h1>DiceGame</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  )
}

export default Startgame

const Container =  styled.div`
    max-width: 1180px;
    height: 100vh;
    display: flex;
    margin: 0 auto;
    align-items: center;
.content{
    h1{
      font-size  :96px ;
      white-space: nowrap;
    }
}
`;

