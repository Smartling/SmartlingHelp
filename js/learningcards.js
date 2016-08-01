/**
 * Created by kalebogdanovs on 7/29/16.
 */

function listenclear () {
    $('.clear-filter').click(function() {
        $('.learning-card-col').show();
        $(this).css({"background-color": "#F6F7F7", "color": "#494E50"});
        $('.panel-heading').removeClass('clear-filter');
        listentoggle();
    });
}
function listentoggle() {
    $('.panel-heading').off('click');
    $('.learning-toggle:not(clear-filter)').click(function() {
        $('.clear-filter').removeClass('clear-filter');
        var filter = $(this).attr('data-learning-type');
        console.log(filter);
        $('.learning-card-col').hide();
        $('.learning-toggle').css({"background-color": "#F6F7F7", "color": "#494E50"})
        $('.' + filter).show();
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
        $(this).css({"background-color": color, "color": "#fff"});
        $(this).addClass('clear-filter');
        listentoggle();
        listenclear();
    });
}


$(document).ready(function() {
    listentoggle();
});