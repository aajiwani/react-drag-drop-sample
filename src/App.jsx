import React from "react";
import * as Components from "./Components";

const { Container, Card, Divider, Row } = Components;

class App extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <div>{"My View"}</div>
        </Row>
        <Divider />
        <Row>
          <div className={"col s6 orange"}>
          <Card
              image="resources/images/tree-1.png"
              contentText="Tree One"
              cardId="1"
            />
            <Card
              image="resources/images/tree-2.png"
              contentText="Tree Two"
              cardId="2"
            />
            <Card
              image="resources/images/tree-3.png"
              contentText="Tree Three"
              cardId="3"
            />
            <Card
              image="resources/images/tree-4.png"
              contentText="Tree Four"
              cardId="4"
            />
            <Card
              image="resources/images/tree-5.png"
              contentText="Tree Five"
              cardId="5"
            />
          </div>
          <div className={"col s6 pink"}>
            <Card
              image="resources/images/animal-1.png"
              contentText="Animal One"
              cardId="6"
            />
            <Card
              image="resources/images/animal-2.png"
              contentText="Animal Two"
              cardId="7"
            />
          </div>
        </Row>
      </Container>
    );
  }
}

export default App;
