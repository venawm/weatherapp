import React from "react";
import styled from 'styled-components'
import Home from "./Components/home/home";
function App() {
  return (
    <Main>
      <h1>Weather App</h1>
      <Home />


      </Main>
  );
}

const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`
export default App;
