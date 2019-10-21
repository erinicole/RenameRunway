import * as ReviewAPIUtil from "../util/review_api_util";

export const RECIEVE_REVIEWS = "RECIEVE_REVIEWS";
export const RECIEVE_REVIEW = "RECIEVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

const recieveReviews = reviews => ({
  type: RECIEVE_REVIEWS,
  reviews
});

const recieveReview = review => ({
  type: RECIEVE_REVIEW,
  review
});

const removeReview = id => ({
  type: REMOVE_REVIEW,
  review: id
});


export const fetchReviews = (product_id) => dispatch => {
    return ReviewAPIUtil.fetchReviews(product_id).then(reviews =>
      dispatch(recieveReviews(reviews))
    );
};

export const createReview = review => dispatch => {
         return ReviewAPIUtil.createReview(review).then(review =>
           dispatch(recieveReview(review))
         );
       };

export const updateReview = review => dispatch => {
         return ReviewAPIUtil.updateReview(review).then(review =>
           dispatch(recieveReview(review))
         );
       };

export const deleteReview = id => dispatch => {
         return ReviewAPIUtil.deleteReview(id).then(review =>
           dispatch(removeReview(review))
         );
       };