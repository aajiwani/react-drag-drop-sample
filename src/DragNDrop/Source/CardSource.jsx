import * as actions from "../../actions.jsx";

const cardSource = {
  beginDrag(props) {
    // Return the data describing the dragged item
    const item = {
      id: props.cardId,
      from_space: props.space
    };
    return item;
  },

  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }
  }
};

export default cardSource;
