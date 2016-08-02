/**
 * Created by kalebogdanovs on 7/29/16.
 */

// Initialize on page load
$(document).ready(function() {
    listentoggle();
});


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

        // Add class hook for active button style and clear filter listener
        $(this).addClass('clear-filter');

        // Reset listeners
        listentoggle();
        listenclear();
    });
}

// Add listener to clear current filter
function listenclear () {
    $('.clear-filter').click(function() {

        // Show all cards
        $('.learning-card-col').show();

        // Remove the clear-filter class
        $('.panel-heading').removeClass('clear-filter');

        // Reset listeners
        listentoggle();
    });
}

