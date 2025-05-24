import styled from "styled-components";
import Button from "./Button/Button";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleNavigate = (path) => {
    navigate(path); // Navigate to the given path
  };
  return (
    <MainSection>
      <div className="container">
        <div className="content">
          <div className="images">
            <img src="/images/pr.png" />
          </div>
          <div className="text">
            <h1>Photo Resizer</h1>
            <p>
              Resize your images with ease and precision to make them perfect
              for any platform or device.
            </p>
          </div>
        </div>
        <div className="button">
          <button onClick={() => handleNavigate("/ImageResize")} >Start</button>
        </div>
      </div>
      <div className="container">
        <div className="content">
          <div className="images">
            <img src="/images/ins.png" />
          </div>
          <div className="text">
            <h1>Instagram Downloader</h1>
            <p>
              Find out how you can quickly save photos and videos from Instagram
              to your device with our downloader.
            </p>
          </div>
        </div>
        <div className="button">
          <Button text="Start" />
        </div>
      </div>
      <div className="container">
        <div className="content">
          <div className="images">
            <img src="/images/yt.png" />
          </div>
          <div className="text">
            <h1>YouTube Downloader</h1>
            <p>
              Explore how easy it is to download your favorite videos from
              YouTube using our downloader.
            </p>
          </div>
        </div>
        <div className="button">
          <Button text="Start" />
        </div>
      </div>
    </MainSection>
  );
};

export default Main;

const MainSection = styled.div`
  display: flex;
  gap: 2rem;
  .container {
    border: 2px solid whitesmoke;
    padding: 12px 12px;
    height: 430px;
    width: 310px;
    border-radius: 0.5rem;
  }

  .images img {
    height: 204px;
    width: 313px;
    border-radius: 0.5rem;
    /* border: 3px solid white; */
  }

  .text h1 {
    font-size: 20px;
    font-weight: 700;
  }

  .text p {
    font-size: 16px;
    font-weight: 400;
    color: #cec4c4;
  }

  button {
    /* margin-top: 13px; */
    background-color: #1b1818e0;
    height:3rem;
    width: 9rem;
    color: whitesmoke;
    font-size: 15px;
    border: none;
    cursor: pointer;
    border-radius: 0.5rem;
    font-weight: 700;
    border: 2px solid whitesmoke;
  }
`;
