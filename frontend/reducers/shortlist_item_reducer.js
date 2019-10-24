import { RECEIVE_SHORTLIST_ITEMS} from "../actions/shortlist_item_action";
import { REMOVE_SHORTLIST_ITEM } from "../actions/shortlist_item_action";

const ShortlistItemReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;
  switch (action.type) {
    case RECEIVE_SHORTLIST_ITEMS:
      return action.shortlistItems;
    case REMOVE_SHORTLIST_ITEM:
      newState = Object.assign({}, oldState);
      delete newState[action.shortlistItemId];
      return newState;
    default:
      return oldState;
  } 
};

export default ShortlistItemReducer;
