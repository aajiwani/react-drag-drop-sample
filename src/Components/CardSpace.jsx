import React from "react";
import { DropTarget } from "react-dnd";
import CardSpaceTarget from "DragNDrop/Target/CardSpaceTarget";
import Constants from "DragNDrop/Constants";
import { connect } from "react-redux";
import * as actions from "../actions.jsx";
import _ from "lodash";

@DropTarget(Constants.CARD, CardSpaceTarget, (connect, monitor) => ({
  // Call this function inside render()
  // to let React DnD handle the drag events:
  connectDropTarget: connect.dropTarget(),
  // You can ask the monitor about the current drag state:
  isOver: monitor.isOver(),
  isOverCurrent: monitor.isOver({ shallow: true }),
  canDrop: monitor.canDrop(),
  itemType: monitor.getItemType(),
  didDrop: monitor.didDrop(),
  dropResult: monitor.getDropResult()
}))
@connect(store => {
  return {};
})
export default class CardSpace extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps)
  {
    if (nextProps.didDrop && _.isEqual(nextProps.dropResult.from_space, this.props.id))
    {
      // Drop happened
      console.dir(nextProps.dropResult);
      let result = nextProps.dropResult;
      _.forEach(actions.moveCardToSpace(result.card_id, result.from_space, result.to_space), (function(action) {
        this.props.dispatch(action);
      }).bind(this));
    }
  }

  render() {
    const { isOver, canDrop, connectDropTarget } = this.props;

    return connectDropTarget(
      <div className={"col s6 " + (this.props.bgColor || "")} style={{
        minWidth: '100px',
        minHeight: '100px'
      }}>
        {this.props.children}
      </div>
    );
  }
}
