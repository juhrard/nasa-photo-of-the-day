import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";

const StyledPicture = styled.img`

  max-width: 100%;
  border-radius: 5px;

`;

const TextBox = styled.div`

  width: 100%;
  min-height: 400px;
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: left;
  border-top: solid white 1px;

`;

const StyledTitle = styled.h2`



`;

const StyledText = styled.p`

  color: white;
  font-size: 1.5rem;
  

`;

function PictureComponent(props) {
  
  const [picture, setPicture] = useState([]);
  const [description, setDescription] = useState([]);
  const [title, setTitle] = useState([]);
  const [date, setDate] = useState([]);
  
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=dCeBjALR8p1i9cdglcIJaU8l67WEAL2e3BRZelqB`)
    .then(response => {
      console.log(response);
      setPicture(response.data.hdurl);
      setDescription(response.data.explanation);
      setTitle(response.data.title);
      setDate(response.data.date);
    })
    .catch(error => {
      console.log(error);
    })
  }, []);

  return (
    <div>
      <StyledPicture src={picture}/>
      <TextBox>
        <StyledText>{title}</StyledText>
        <StyledText>{description}</StyledText>
        <StyledText>{date}</StyledText>
      </TextBox>
    </div>
  );

}

export default PictureComponent;