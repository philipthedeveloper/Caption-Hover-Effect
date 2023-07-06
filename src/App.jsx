import React from "react";
import Card from "./components/Card";
import cardData from "./data/card-data";
import styled from "styled-components";

const App = () => {
  return (
    <AppContainer className="App">
      <CardContainer>
        {cardData.map((data) => (
          <Card data={data} />
        ))}
      </CardContainer>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #24282c;
  display: flex;
  align-items: center;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: 330px;
  grid-auto-rows: 330px;
  width: 95%;
  max-width: 1300px;
  margin: auto;
  min-height: 80%;
  box-shadow: 0px 4px 10px #181d28;
  align-content: center;
  gap: 1rem;
  padding: 0 2rem;
`;

export default App;
