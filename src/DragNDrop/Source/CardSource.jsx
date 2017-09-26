const cardSource = {
    beginDrag(props) {
      // Return the data describing the dragged item
      const item = { id: props.cardId };
      return item;
    },
  
    endDrag(props, monitor, component) {
      if (!monitor.didDrop()) {
        return;
      }
  
      // When dropped on a compatible target, do something
      const item = monitor.getItem();
      const dropResult = monitor.getDropResult();
      // CardActions.moveCardToList(item.id, dropResult.listId);
    }
  };
  
export default cardSource;