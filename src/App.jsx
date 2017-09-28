import React from "react";
import * as Components from "./Components";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

const { Container, Card, Divider, Row, CardSpace } = Components;

let sideACards = [
  { image: "tree-1", title: "Tree 1", space: "space_a" },
  { image: "tree-2", title: "Tree 2", space: "space_a" },
  { image: "tree-3", title: "Tree 3", space: "space_a" },
  { image: "tree-4", title: "Tree 4", space: "space_a" },
  { image: "tree-5", title: "Tree 5", space: "space_a" }
];

let sideBCards = [
  { image: "animal-1", title: "Animal 1", space: "space_b" },
  { image: "animal-2", title: "Animal 2", space: "space_b" }
];

let createCard = (cardInfo) => {
  return (
    <Card
      image={"resources/images/" + cardInfo.image + ".png"}
      contentText={cardInfo.title}
      cardId={cardInfo.cardId}
      key={"Unique-Card-" + cardInfo.cardId}
      space={cardInfo.space}
    />
  );
};

@DragDropContext(HTML5Backend)
class App extends React.Component {
  constructor(props) {
    super(props);
    this.lastUsedCardIndex = 0;
  }

  render() {
    return (
      <Container
        style={{
          width: "100%",
          height: "100%"
        }}
      >
        <Row>
          <div>{"My View"}</div>
        </Row>
        <Divider />
        <Row>
          <CardSpace bgColor="orange" id="space_a">
            {sideACards.map(card =>
              createCard({
                ...card,
                cardId: "Card-" + this.lastUsedCardIndex++
              })
            )}
          </CardSpace>
          <CardSpace bgColor="green" id="space_b">
            {sideBCards.map(card =>
              createCard({
                ...card,
                cardId: "Card-" + this.lastUsedCardIndex++
              })
            )}
          </CardSpace>
        </Row>
      </Container>
    );
  }
}

export default App;
