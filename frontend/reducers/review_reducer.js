import { RECIEVE_REVIEWS } from "../actions/review_action";
import { RECIEVE_REVIEW } from "../actions/review_action";
import { REMOVE_REVIEW } from "../actions/review_action";

const ReviewReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;
  switch (action.type) {
    case RECIEVE_REVIEWS:
      return action.reviews;
    case RECIEVE_REVIEW:
      debugger
      newState = Object.assign({}, oldState, {
        [action.review.id]: action.review
      });
      return newState;
    case REMOVE_REVIEW:
      newState = Object.assign({}, oldState);
      delete newState[action.reviewId];
      return newState;
    default:
      return oldState;
  }
};

export default ReviewReducer;