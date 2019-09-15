import $ from 'jQuery'
/* global $ */

// dropdown function that removes "hidden" class from dropdown while
// adding hideDropdown listener to document and cleaning up out-of-date listener
 const revealDropdown = (event) => {
    debugger
    event.stopPropagation(); // prevent event from being picked up by body
    $('#nav-logout-dropdown').removeClass('hidden');
    $('#person-dropdown-btn').off('click', revealDropdown);
    $(document).on('click', hideDropdown);
};

// add "hidden" class to dropdown and update event listeners
 const hideDropdown = () => {
    debugger
    $('#nav-logout-dropdown').addClass('hidden');
    $('#person-dropdown-btn').on('click', revealDropdown);
    $(document).off('click', hideDropdown);
};

// Add click listener to gear icon which invokes reveal function
 const revealDropdownFunc = $(() => {
    debugger
    $('#person-dropdown-btn').on('click', revealDropdown) }); 



