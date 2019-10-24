export const fetchShortlists = () => {
         return $.ajax({
           method: "GET",
           url: '/api/shortlists'
         });
       };

export const createShortlist = shortlist => {
         return $.ajax({
           method: "POST",
           url: "/api/shortlists",
           data: { shortlist }
         });
       };

export const updateShortlist = shortlist => {
         return $.ajax({
           method: "PATCH",
           url: `/api/shortlists/${shortlist.id}`,
           data: { shortlist }
         });
       };

export const deleteShortlist = id => {
         return $.ajax({
           method: "DELETE",
           url: `/api/shortlist/${id}`
         });
       };