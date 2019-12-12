import React from "react";
import PictureComponent from "../PictureComponent/PictureComponent";
import NewButton from "../Button/Button"
import styled from "styled-components";

const parentDivStyle = {
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}

const StyledH1 = styled.h1`

  color: white;

`

const Card = styled.div`

  width: 100%;
  background: #070b34;
  border-radius: 10px;
  padding: 30px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  border: 1px solid white;

`

function PictureCard () {
  
  return (
    <div style={parentDivStyle}>
      <StyledH1>NASA Photo of the Day</StyledH1>
      <Card>
        <PictureComponent/>
        <NewButton/>
      </Card>
    </div>
  )
  
}

export default PictureCard;