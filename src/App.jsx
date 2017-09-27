import React from "react";
import * as Components from "./Components";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

const { Container, Card, Divider, Row, CardSpace } = Components;

let sideACards = [
  { image: "tree-1", title: "Tree 1" },
  { image: "tree-2", title: "Tree 2" },
  { image: "tree-3", title: "Tree 3" },
  { image: "tree-4", title: "Tree 4" },
  { image: "tree-5", title: "Tree 5" }
];

let sideBCards = [
  { image: "animal-1", title: "Animal 1" },
  { image: "animal-2", title: "Animal 2" }
];

let createCard = (title, imageFile, cardId) => {
  return (
    <Card
      image={"resources/images/" + imageFile + ".png"}
      contentText={title}
      cardId={cardId}
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
          <CardSpace bgColor="orange">
            {sideACards.map(card =>
              createCard(
                card.title,
                card.image,
                "Card-" + this.lastUsedCardIndex++
              )
            )}
          </CardSpace>
          <CardSpace bgColor="green">
            {sideBCards.map(card =>
              createCard(
                card.title,
                card.image,
                "Card-" + this.lastUsedCardIndex++
              )
            )}
          </CardSpace>
        </Row>
      </Container>
    );
  }
}

export default App;
