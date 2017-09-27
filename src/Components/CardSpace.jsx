import React from "react";
import { DropTarget } from "react-dnd";
import CardSpaceTarget from "DragNDrop/Target/CardSpaceTarget";
import Constants from "DragNDrop/Constants";

@DropTarget(Constants.CARD_SPACE, CardSpaceTarget, (connect, monitor) => ({
  // Call this function inside render()
  // to let React DnD handle the drag events:
  connectDropTarget: connect.dropTarget(),
  // You can ask the monitor about the current drag state:
  isOver: monitor.isOver(),
  isOverCurrent: monitor.isOver({ shallow: true }),
  canDrop: monitor.canDrop(),
  itemType: monitor.getItemType()
}))
export default class CardSpace extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isOver, canDrop, connectDropTarget } = this.props;

    return connectDropTarget(
      <div
        className={"col s6 " + (this.props.bgColor || '')}
      >
        {this.props.children}
      </div>
    );
  }
}
