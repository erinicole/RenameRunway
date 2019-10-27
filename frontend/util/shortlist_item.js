export const fetchShortlistItems = shortlist_id => {
  return $.ajax({
    method: "GET",
    url: `/api/shortlists/${shortlist_id}/shortlist_items`
  });
};

export const deleteShortlistItem = id => {
  return $.ajax({
    method: "DELETE",
    url: `/api/shortlist_items/${id}`
  });
};