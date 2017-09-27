import CardActions from '../Actions/Card';

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

      var jsonItem = JSON.stringify(item);
      var droppedResult = JSON.stringify(dropResult);

      window.alert(
        `You dropped ${jsonItem} into ${droppedResult}!`
      );
      // CardActions.moveCardToList(item.id, dropResult.listId);
    }
  };
  
export default cardSource;