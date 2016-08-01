/**
 * Created by kalebogdanovs on 7/29/16.
 */

// Add listener to clear current filter
function listenclear () {
    $('.clear-filter').click(function() {

        // Show all cards
        $('.learning-card-col').show();

        // Return button to regular background
        $(this).css({"background-color": "#F6F7F7", "color": "#494E50"});

        // Remove the clear-filter class
        $('.panel-heading').removeClass('clear-filter');

        // Reset listeners
        listentoggle();
    });
}
// Add listeners to filter buttons
function listentoggle() {

    // Clear any current listeners
    $('.panel-heading').off('click');

    // Add filter listeners to all buttons except current filter (if any)
    $('.learning-toggle:not(clear-filter)').click(function() {

        // If there's an existing filter, remove it
        $('.clear-filter').removeClass('clear-filter');

        // Clear any existing button colors
        $('.learning-toggle').css({"background-color": "#F6F7F7", "color": "#494E50"})

        // Get new filter setting
        var filter = $(this).attr('data-learning-type');

        // Hide all cards
        $('.learning-card-col').hide();


        // Show cards matching the filter settings
        $('.' + filter).show();

        // Get the right color for clicked button
        if (filter === 'learning-video') {
            var color = '#62C2DD';
        }
        if (filter === 'learning-guide') {
            var color = '#F26C5D';
        }
        if (filter === 'learning-best-practice') {
            var color = '#EDBB6C';
        }
        if (filter === 'learning-webinar') {
            var color = '#66C6B4';
        }

        // Add color to clicked button and set up class for 'clear filter' listener
        $(this).css({"background-color": color, "color": "#fff"});
        $(this).addClass('clear-filter');

        // Reset listeners
        listentoggle();
        listenclear();
    });
}

// Initialize listeners on page load
$(document).ready(function() {
    listentoggle();
});