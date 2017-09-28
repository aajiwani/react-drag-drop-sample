import * as actionTypes from "./actionTypes.jsx";
import Constants from "./Constants.jsx";

export function loadDefaultItems() {
  return {
    type: actionTypes.LOAD_DEFAULT_ITEMS,
    payload: {
      space_a_data: [
        {
          image: "tree-1",
          title: "Tree 1",
          space: Constants.SPACE_A,
          card_id: "1"
        },
        {
          image: "tree-2",
          title: "Tree 2",
          space: Constants.SPACE_A,
          card_id: "2"
        },
        {
          image: "tree-3",
          title: "Tree 3",
          space: Constants.SPACE_A,
          card_id: "3"
        },
        {
          image: "tree-4",
          title: "Tree 4",
          space: Constants.SPACE_A,
          card_id: "4"
        },
        {
          image: "tree-5",
          title: "Tree 5",
          space: Constants.SPACE_A,
          card_id: "5"
        }
      ],
      space_b_data: [
        {
          image: "animal-1",
          title: "Animal 1",
          space: Constants.SPACE_B,
          card_id: "6"
        },
        {
          image: "animal-2",
          title: "Animal 2",
          space: Constants.SPACE_B,
          card_id: "7"
        }
      ]
    }
  };
}

export function moveCardToSpace(cardId, fromSpaceId, toSpaceId) {
  return [
    {
      type: actionTypes.REMOVE_CARD,
      payload: {
        cardId: cardId,
        fromSpace: fromSpaceId
      }
    },
    {
      type: actionTypes.ADD_CARD,
      payload: {
        cardId: cardId,
        toSpace: toSpaceId
      }
    }
  ];
}
