import React from "react";
import "./App.css";
import PictureCard from "./components/PictureCard/PictureCard";
import styled from "styled-components";

const PageContainer = styled.div`

  max-width: 1000px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

`

const AppContainer = styled.div`

  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

`

function App() {
  return (
    <PageContainer className="App">
      {/* Read through the instructions in the README.md file to build your NASA app! Have fun 🚀! */}
      <PictureCard/>
    </PageContainer>
  );
}

export default App;
