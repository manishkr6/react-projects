import styled from "styled-components";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <div className="container">
          <div className="heading">
            <h1>REJUMO</h1>
            <p>
              Your ultimate destination for hassle-free image resizing and
              effortless video downloads from YouTube and Instagram. At REJUMO,
              we believe in simplifying your digital needs with tools that are
              fast, user-friendly, and efficient.
            </p>
          </div>
        </div>
        <div className="followUs">
          <p>follow us</p>
          <div className="icons">
            <a href="https://www.facebook.com" target="_blank">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/_manish_kr01/" target="_blank">
              <FaInstagram />
            </a>
            <a href="">
              <FaTwitter />
            </a>
            <a href="">
              <FaLinkedin />
            </a>
          </div>
        </div>
        {/* <div className="line"></div>

        <div className="copyright">
          <p>Copyright ©2024 | REJUMO</p>
        </div> */}
      </FooterContainer>
    </>
  );
};

export default Footer;

const FooterContainer = styled.div`
  background-color: #1c1c1c;
  padding-bottom: 2rem;
  .heading {
    padding-top: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .heading p {
    width: 42rem;
    height: 4rem;
    line-height: 1.6rem;
    color: #cec4c4;
    text-align: center;
    padding-bottom: 2rem;
  }

  .followUs p {
    text-align: center;
    line-height: 2rem;
    word-spacing: 10px;
    text-transform: uppercase;
  }

  .icons {
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  .icons a {
    color: rgb(154, 225, 67);
    margin-bottom: 2rem;
  }

  .icons a:hover {
    color: rgb(72, 123, 9);
    cursor: pointer;
  }

  .line {
    /* width: 98vw; */
    border-top: 2px solid white;
    margin: 10px 0;
  }

  .copyright {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
