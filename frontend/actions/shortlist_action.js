import * as ShortlistAPIUtil from "../util/shortlist";

export const RECIEVE_SHORTLISTS = "RECIEVE_SHORTLISTS";
export const RECIEVE_SHORTLIST = "RECIEVE_SHORTLIST";
export const REMOVE_SHORTLIST = "REMOVE_SHORTLIST";

const recieveShortlists = shortlists => ({
  type: RECIEVE_SHORTLISTS,
  shortlists
});

const recieveShortlist = shortlist => ({
  type: RECIEVE_SHORTLIST,
  shortlist
});

const removeShortlist = id => ({
  type: REMOVE_SHORTLIST,
  shortlistId: id
});

export const fetchShortlists = () => dispatch => {
  return ShortlistAPIUtil.fetchShortlists().then(shortlists =>
    { 
    return dispatch(recieveShortlists(shortlists))}
  );
};

export const createShortlist = shortlist => dispatch => {
         return ShortlistAPIUtil.createShortlist(shortlist).then(
           updatedShortlist => dispatch(recieveShortlist(updatedShortlist))
         );
       };

export const updateShortlist = shortlist => dispatch => {
         return ShortlistAPIUtil.updateShortlist(shortlist).then(
           updatedShortlist => dispatch(recieveShortlist(updatedShortlist))
         );
       };

export const deleteShortlist = id => dispatch => {
         return ShortlistAPIUtil.deleteShortlist(id).then(shortlist =>
           dispatch(removeShortlist(shortlist))
         );
       };
