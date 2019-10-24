export const fetchShortlistItems = product_id => {
  return $.ajax({
    method: "GET",
    url: `/api/shortlist_items?product_id=${product_id}`
  });
};

export const deleteShortlistItem = id => {
  return $.ajax({
    method: "DELETE",
    url: `/api/shortlist_items/${id}`
  });
};