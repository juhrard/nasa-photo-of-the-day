import React, {useState, useEffect} from "react";
import axios from "axios";

function PictureComponent(props) {
  
  const [picture, setPicture] = useState([]);
  
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=dCeBjALR8p1i9cdglcIJaU8l67WEAL2e3BRZelqB`)
    .then(response => {
      console.log(response.data.hdurl);
      setPicture(response.data.hdurl);
    })
    .catch(error => {
      console.log(error);
    })
  }, []);

  return (
    <div>
      <img src={picture}/>
      <h1>Hello</h1>
    </div>
  );

}

export default PictureComponent;