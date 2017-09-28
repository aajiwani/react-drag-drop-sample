import React from "react";
import { DragSource } from "react-dnd";
import CardSource from "DragNDrop/Source/CardSource";
import Constants from "DragNDrop/Constants";

// Use the decorator syntax
@DragSource(Constants.CARD, CardSource, (connect, monitor) => ({
  // Call this function inside render()
  // to let React DnD handle the drag events:
  connectDragSource: connect.dragSource(),
  // You can ask the monitor about the current drag state:
  isDragging: monitor.isDragging()
}))
export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Your component receives its own props as usual
    const { cardId } = this.props;

    // These two props are injected by React DnD,
    // as defined by your `collect` function above:
    const { isDragging, connectDragSource } = this.props;

    return connectDragSource(
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

    // return (
    //   <div className={"col s3 blue"}>
    //     <div className={"card blue-grey"}>
    //       <div className={"card-image"}>
    //         <img src={this.props.image} />
    //       </div>
    //       <div className={"card-content"}>
    //         <p className={"center-align"}>{this.props.contentText}</p>
    //       </div>
    //     </div>
    //   </div>
    // );
  }
}
