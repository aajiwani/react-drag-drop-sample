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
      if (_.isEqual(action.payload.fromSpace, Constants.SPACE_A)) {
        foundItem = _.find(newState.space_a_data, {
          card_id: action.payload.cardId
        });
        if (!_.isEmpty(foundItem)) {
          newState.last_used_card = _.remove(newState.space_a_data, o =>
            _.isEqual(o.card_id, action.payload.cardId)
          );
          // _.remove(newState.space_a_data, (o) => _.isEqual(o.card_id, action.payload.cardId));
        }
      } else {
        foundItem = _.find(state.space_b_data, {
          card_id: state.payload.cardId
        });
        if (!_.isEmpty(foundItem)) {
          newState.last_used_card = _.remove(newState.space_b_data, o =>
            _.isEqual(o.card_id, action.payload.cardId)
          );
        }
      }

      return newState;
    }

    // cardId: cardId,
    // toSpace: toSpaceId
    case actionTypes.ADD_CARD: {
      var newState = { ...state };

      console.dir(newState);
      console.dir(action);

      if (
        newState.last_used_card !== null &&
        _.isEqual(newState.last_used_card[0].card_id, action.payload.cardId)
      ) {
        if (_.isEqual(action.payload.toSpace, Constants.SPACE_A)) {
          _.union(newState.space_a_data, [
            {
              ...newState.last_used_card[0],
              space: Constants.SPACE_A,
              card_id: ++newState.cardNumber
            }
          ]);
        } else if (_.isEqual(action.payload.toSpace, Constants.SPACE_A)) {
          _.union(newState.space_a_data, [
            {
              ...newState.last_used_card[0],
              space: Constants.SPACE_B,
              card_id: ++newState.cardNumber
            }
          ]);
        }
      }

      // if (
      //   _.isEqual(action.payload.toSpace, Constants.SPACE_A) &&
      //   newState.last_used_card !== null
      // ) {
      //   newState.space_a_data = _.union(newState.space_a_data, [
      //     {
      //       ...newState.last_used_card[0].cardData,
      //       space: Constants.SPACE_A,
      //       card_id: ++newState.cardNumber
      //     }
      //   ]);
      // } else if (
      //   _.isEqual(action.payload.toSpace, Constants.SPACE_B) &&
      //   newState.last_used_card !== null
      // ) {
      //   newState.space_b_data = _.union(newState.space_b_data, [
      //     {
      //       ...newState.last_used_card[0].cardData,
      //       space: Constants.SPACE_B,
      //       card_id: ++newState.cardNumber
      //     }
      //   ]);
      // }

      return newState;
    }
  }

  return state;
}
