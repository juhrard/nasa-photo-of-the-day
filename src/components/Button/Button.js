import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`

  width: 200px;
  height: 70px;
  color: white;
  background: #855988;
  border: none;
  font-size: 2rem;

`

function Button(props) {
  return(
    <div>
      <StyledButton>Get Picture!</StyledButton>
    </div>
  )
}

export default Button;