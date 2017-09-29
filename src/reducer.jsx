import * as actionTypes from "./actionTypes.jsx";
import Constants from "./Constants.jsx";
import _ from "lodash";

export default function reducer(
  state = {
    space_a_data: [],
    space_b_data: [],
    cardNumber: 0,
    last_used_card: null
  },
  action
) {
  switch (action.type) {
    case actionTypes.LOAD_DEFAULT_ITEMS: {
      return {
        ...state,
        space_a_data: action.payload.space_a_data,
        space_b_data: action.payload.space_b_data,
        cardNumber:
          _.size(action.payload.space_a_data) +
          _.size(action.payload.space_b_data)
      };
    }

    // cardId: cardId,
    // fromSpace: fromSpaceId
    case actionTypes.REMOVE_CARD: {
      var newState = { ...state };

      let foundItem = null;
      let clonedData = null;
      if (_.isEqual(action.payload.fromSpace, Constants.SPACE_A)) {
        clonedData = _.clone(newState.space_a_data);
        foundItem = _.find(clonedData, {
          card_id: action.payload.cardId
        });
        if (!_.isEmpty(foundItem)) {
          newState.last_used_card = _.remove(clonedData, o =>
            _.isEqual(o.card_id, action.payload.cardId)
          );

          newState.space_a_data = clonedData;
        }
      } else {
        clonedData = _.clone(newState.space_b_data);
        foundItem = _.find(clonedData, {
          card_id: action.payload.cardId
        });
        if (!_.isEmpty(foundItem)) {
          newState.last_used_card = _.remove(clonedData, o =>
            _.isEqual(o.card_id, action.payload.cardId)
          );

          newState.space_b_data = clonedData;
        }
      }

      return newState;
    }

    // cardId: cardId,
    // toSpace: toSpaceId
    case actionTypes.ADD_CARD: {
      var newState = { ...state };

      if (
        newState.last_used_card !== null &&
        _.isEqual(newState.last_used_card[0].card_id, action.payload.cardId)
      ) {
        if (_.isEqual(action.payload.toSpace, Constants.SPACE_A)) {
          newState.space_a_data.push({
            ...newState.last_used_card[0],
            space: Constants.SPACE_A,
            card_id: ++newState.cardNumber
          });
          newState.last_used_card = null;
        } else if (_.isEqual(action.payload.toSpace, Constants.SPACE_B)) {
          newState.space_b_data.push({
            ...newState.last_used_card[0],
            space: Constants.SPACE_B,
            card_id: ++newState.cardNumber
          });
          newState.last_used_card = null;
        }
      }

      return newState;
    }
  }

  return state;
}
