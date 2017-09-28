/**
 * Specifies the drop target contract.
 * All methods are optional.
 */
// import { findDOMNode } from "react-dom";
import _ from "lodash";

const cardSpaceTarget = {
  canDrop(props, monitor) {
    const item = monitor.getItem();
    return !_.isEqual(item.from_space, props.id);
  },

  drop(props, monitor, component) {
    if (monitor.didDrop()) {
      // If you want, you can check whether some nested
      // target already handled drop
      return;
    }

    // Obtain the dragged item
    const item = monitor.getItem();

    let result = {
      moved: true,
      to_space: props.id,
      card_id: item.id,
      from_space: item.from_space
    };

    // console.log('Drop Result: ');
    // console.dir(result);
    
    return result;
  }
};

export default cardSpaceTarget;
