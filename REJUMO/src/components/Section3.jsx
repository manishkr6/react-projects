import styled from "styled-components";

const Section3 = () => {
  return (
    <ThirdSection>
      <div className="main">
        <div className="container">
          <div className="images">
            <img src="/images/photos.png" />
          </div>
          <div className="content">
            <h1>Effortless Photo Resizing</h1>
            <p>
              Easily resize your images to fit any platform or device with our
              intuitive photo resizer. Transform your visuals effortlessly,
              ensuring optimal quality and clarity for stunning presentations.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="content">
            <h1>Instant Instagram Downloads</h1>
            <p>
              Quickly save photos and videos from Instagram to your device using
              our Instagram downloader. Effortlessly capture and preserve your
              favorite moments for easy access anytime.
            </p>
          </div>
          <div className="images img2">
            <img src="/images/instagram.png" />
          </div>
        </div>
        <div className="container">
          <div className="images">
            <img src="/images/youtube.png" />
          </div>
          <div className="content">
            <h1>Seamless YouTube Downloads</h1>
            <p>
              Download your favorite videos from YouTube with just a few clicks
              using our YouTube downloader. Enjoy high-quality downloads and
              watch offline anytime.
            </p>
          </div>
        </div>
      </div>
    </ThirdSection>
  );
};

export default Section3;

const ThirdSection = styled.div`
  margin-top: 20px;

  .container {
    display: flex;
    justify-content: center;
    padding: 20px 140px;
    gap: 2rem;
    background-color: #1c1c1c;
    background-blend-mode: lighten;
    opacity: 0.9;

    .images img {
      width: 30rem;
      border-radius: 1rem;
    }

    .img2 img {
      height: 21rem;
    }

    .content {
      padding-right: 200px;
    }

    p {
      color: #cec4c4;
      letter-spacing: 1px;
    }
  }
`;
