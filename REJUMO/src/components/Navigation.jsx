import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const Navigation = () => {
  const navigate = useNavigate()
  const handelNavigation = (path) => {
    navigate(path)
  }
  return (
    <NavigationComponent>
      <div className="img-text">
        <img src="/images/logo_white_transparent.png" />
        <h2>REJUMO</h2>
      </div>
      <nav>
        <ul className="ul">
          <li>Home</li>
          <li onClick={() => handelNavigation("/contact-us")}>Contact</li>
          <li>Login</li>
        </ul>
      </nav>
    </NavigationComponent>
  );
};

export default Navigation;

const NavigationComponent = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #797979;
  padding: 2rem 6rem;
  height: 1rem;
  font-size: 16px;
  align-items: center;

  .img-text {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  h2 {
    font-size: 34px;
    font-weight: lighter;
  }

  img {
    height: 55px;
  }

  .ul {
    display: flex;
    list-style: none;
    gap: 1.5rem;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    line-height: 16px;

    li {
      &:hover {
        text-decoration: underline;
        color: #cec4c4;
      }
    }
  }
`;
