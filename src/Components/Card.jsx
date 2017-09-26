import React from "react";
import { DragSource } from 'react-dnd';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={"col s3 blue"}>
        <div className={"card blue-grey"}>
          <div className={"card-image"}>
            <img src={this.props.image} />
          </div>
          <div className={"card-content"}>
            <p className={"center-align"}>{this.props.contentText}</p>
          </div>
        </div>
      </div>
    );
  }
}
