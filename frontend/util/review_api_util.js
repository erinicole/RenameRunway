export const fetchReviews = (product_id) => {
  return $.ajax({
    method: "GET",
    url: `/api/reviews?product_id=${product_id}`
  });
};

export const createReview = (review) => {
  return $.ajax({
    method: "POST",
    url: `/api/products/${review.product_id}/reviews`,
    data: { review }
  });
};

export const updateReview = (review) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/reviews/${review.id}`,
    data: { data }
  });
};

export const deleteReview = id => {
  return $.ajax({
    method: "DELETE",
    url: `/api/reviews/${review.id}`
  });
};