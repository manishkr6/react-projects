import styled from "styled-components";
import { Button } from "../styled/Button";

const StartGame = ({ toggle }) => {
  return (
    <div>
      <Conatiner>
        <div>
          <img src="/images/dices 1.png" />
        </div>
        <div className="content">
          <h1>Start Game</h1>
          <Button onClick={toggle}>Play Now</Button>
        </div>
      </Conatiner>
    </div>
  );
};

export default StartGame;

const Conatiner = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  max-width: 1180px;
  margin: 0 auto;

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;
