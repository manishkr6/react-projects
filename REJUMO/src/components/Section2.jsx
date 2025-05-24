import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Section2 = () => {

  const navigate = useNavigate()
  const handleNavigate = (path) => {
    navigate(path); // Navigate to the given path
  };

  return (
    <ImgContainer image="/images/insta.png">
      <div className="text">
        <p>
          Your one-stop platform for resizing images and downloading videos from
          YouTube and Instagram effortlessly.
        </p>
        
        <h2>Welcome to REJUMO</h2>

          <button onClick={() => handleNavigate("/contact-us")}>Contact Us</button>
        
          {/* <Button onClick={() => handleNavigate("/contact-us")} text="Contact Us" /> */}
      </div>
    </ImgContainer>
  );
};

export default Section2;

const ImgContainer = styled.div`
  background-image: url("/images/insta.png");
  width: 100%;
  height: 50vh;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #1c1c1c;
  background-blend-mode: lighten;
  opacity: 0.9;

  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: whitesmoke;
    padding-top: 4rem;
    p {
      font-size: 18px;
      font-weight: 400;
    }
    h2 {
      font-size: 36px;
      font-weight: 400;
    }

    button {
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

  }
`;
