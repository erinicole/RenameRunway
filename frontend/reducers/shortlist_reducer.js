import { RECIEVE_SHORTLISTS } from "../actions/shortlist_action";
import { RECIEVE_SHORTLIST } from "../actions/shortlist_action";
import { REMOVE_SHORTLIST } from "../actions/shortlist_action";

const ShortlistReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;
  switch (action.type) {
    case RECIEVE_SHORTLISTS:
      return action.shortlists;
    case RECIEVE_SHORTLIST:
      newState = Object.assign({}, oldState, {
        [action.shortlist.id]: action.shortlist
      });
      return newState;
    case REMOVE_SHORTLIST:
      newState = Object.assign({}, oldState);
      delete newState[action.shortlistId];
      return newState;
    default:
      return oldState;
  }
};

export default ShortlistReducer;
