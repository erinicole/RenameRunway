export const fetchReviewsProducts = (product_id) => {
  return $.ajax({
    method: "GET",
    url: `/api/products/${product_id}/reviews`
  });
};

export const fetchReviewsUsers = (user_id) => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${user_id}/reviews`
  });
};

export const createReview = (review) => {
  return $.ajax({
    method: "POST",
    url: '/api/reviews',
    data: { review }
  });
};

export const updateReview = (review) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/reviews/${review.id}`,
    data: { review }
  });
};

export const deleteReview = id => {
  return $.ajax({
    method: "DELETE",
    url: `/api/reviews/${id}`
  });
};