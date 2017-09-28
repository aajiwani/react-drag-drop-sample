/**
 * Specifies the drop target contract.
 * All methods are optional.
 */
import { findDOMNode } from "react-dom";
import _ from "lodash";

const cardSpaceTarget = {
  canDrop(props, monitor) {
    const item = monitor.getItem();
    return !_.isEqual(item.from_space, props.id);
  },

  hover(props, monitor, component) {
    const canDrop = monitor.canDrop();
  },

  drop(props, monitor, component) {
    if (monitor.didDrop()) {
      // If you want, you can check whether some nested
      // target already handled drop
      return;
    }

    // Obtain the dragged item
    // const item = monitor.getItem();
    
    return {
      moved: true,
      to_space: props.id
    };
  }
};

export default cardSpaceTarget;
