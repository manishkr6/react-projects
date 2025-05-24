import styled from "styled-components";
import Main from "./Main";

const Section4 = () => {
  return (
    <FourthSection>
      <div className="container">
        <div className="content">
          <h1 className="h1">Start Exploring Now</h1>
          <p>
            Discover the power of our tools and how they can simplify your
            digital content needs.
          </p>
          <div className="main">
            <Main />
          </div>
        </div>
      </div>
    </FourthSection>
  );
};

export default Section4;

const FourthSection = styled.div`
  background-color: #1c1c1c;
  background-blend-mode: lighten;
  opacity: 0.9;
  margin-top: 20px;
  padding-bottom: 1.7rem;
  margin-bottom: 1.3rem;

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .content .h1 {
    font-size: 36px;
    font-weight: 400;
    line-height: 46px;
  }

  .content p {
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    color: #cec4c4;
  }
`;
