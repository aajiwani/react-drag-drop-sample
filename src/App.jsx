import React from "react";
import * as Components from "./Components";

const { Container, Card, Divider, Row } = Components;

class App extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <div>{"Main View"}</div>
        </Row>
        <Divider />
        <Row>
          <div className={"col s6 orange"}>
          <Card
              image="resources/images/tree-1.png"
              contentText="Tree One"
            />
            <Card
              image="resources/images/tree-2.png"
              contentText="Tree Two"
            />
            <Card
              image="resources/images/tree-3.png"
              contentText="Tree Three"
            />
            <Card
              image="resources/images/tree-4.png"
              contentText="Tree Four"
            />
            <Card
              image="resources/images/tree-5.png"
              contentText="Tree Five"
            />
          </div>
          <div className={"col s6"}>
            <Card
              title="Amir"
              image="resources/images/animal-1.png"
              contentText="Animal One"
            />
            <Card
              title="Amir"
              image="resources/images/animal-2.png"
              contentText="Animal Two"
            />
          </div>
        </Row>
      </Container>
    );
  }
}

export default App;
