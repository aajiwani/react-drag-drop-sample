import React from "react";
import * as Components from "./Components";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import { connect } from "react-redux";
import * as actions from "./actions.jsx";
import Constants from "./Constants.jsx";

const { Container, Card, Divider, Row, CardSpace } = Components;

let createCard = cardInfo => {
  return (
    <Card
      image={"resources/images/" + cardInfo.image + ".png"}
      contentText={cardInfo.title}
      cardId={cardInfo.card_id}
      key={"Unique-Card-" + cardInfo.card_id}
      space={cardInfo.space}
      cardData={cardInfo}
    />
  );
};

@DragDropContext(HTML5Backend)
@connect(store => {
  return {
    space_a_data: store.space_a_data,
    space_b_data: store.space_b_data
  };
})
class App extends React.Component {
  constructor(props) {
    super(props);
    this.lastUsedCardIndex = 0;
  }

  componentWillMount() {
    this.props.dispatch(actions.loadDefaultItems());
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
          <CardSpace bgColor="orange" id={Constants.SPACE_A}>
            {this.props.space_a_data.map(card =>
              createCard(card)
            )}
          </CardSpace>
          <CardSpace bgColor="green" id={Constants.SPACE_B}>
            {this.props.space_b_data.map(card =>
              createCard(card)
            )}
          </CardSpace>
        </Row>
      </Container>
    );
  }
}

export default App;
