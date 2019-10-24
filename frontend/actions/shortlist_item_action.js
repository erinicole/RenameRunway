import * as ShortlistItemIUtil from "../util/shortlist_item";

export const RECEIVE_SHORTLIST_ITEMS = "RECEIVE_SHORTLIST_ITEMS";
export const REMOVE_SHORTLIST_ITEM = "REMOVE_SHORTLIST_ITEM";

const recieveShortlistItems = shortlistItems => ({
  type: RECEIVE_SHORTLIST_ITEMS,
  shortlistItems
});

const removeShortlistItem = id => ({
  type: REMOVE_SHORTLIST_ITEM,
  shortlistItemId: id
});

export const fetchShortlistItems = product_id => dispatch => {
  return ShortlistItemIUtil.fetchShortlistItems(product_id).then(
    shortlist_items => dispatch(recieveShortlistItems(shortlist_items))
  );
};

export const deleteShortlistItem = id => dispatch => {
  return ShortlistItemIUtil.deleteShortlistItem(id).then(shortlist_item =>
    dispatch(removeShortlistItem(shortlist_item))
  );
};