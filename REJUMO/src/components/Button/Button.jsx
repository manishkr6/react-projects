import styled from "styled-components"

const Button = ({text}) => {
  return (
    <Buttons>
      <button>{text}</button>
    </Buttons>
  )
}

export default Button

const Buttons = styled.div`
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
`