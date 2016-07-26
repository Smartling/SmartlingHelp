//
// This script compiles a Table of Contents based on h2 and h3 elements.
// Styles are in /css/smartling-help.scss
//

$(document).ready(function() {

    // Hide the ToC panel until we know we need it
    $(".panel-toc").hide();

    // Get number of subheadings on the page
    var l = $("h2, h3, h4").length;

    // If we have at least 2 subheadings, make a ToC!
    if (l > 1) {

        // Open the unordered list
        var ToC =
            "<ul class='nav nav-stacked'>";
        
        var newLine, el, title, link, classname;
        
        $("h2, h3, h4").each(function() {
        
          el = $(this);
          title = el.text();

          // Sort 1st and 2nd level headings - 2nd level are indented on page
          if (el.prop("tagName").toLowerCase() === 'h2') {
              classname = "primary-nav";
          }
          if (el.prop("tagName").toLowerCase() === 'h3') {
              classname = "secondary-nav";
          }
          if (el.prop("tagName").toLowerCase() === 'h4') {
              classname = "tertiary-nav";
          }

          // Make a clean id tag for each element by removing unnecessary characters
          el.attr("id",title.toLowerCase().replace(/\s+/g, '-').replace('(', '').replace(')', ''));
          link = "#" + el.attr("id");
        
          newLine =
            "<li class='" + classname + "'>" +
              "<a href='" + link + "'>" +
                title +
              "</a>" +
            "</li>";
        
          ToC += newLine;
        
        });
        // Close out the list when all elements are added
        ToC +=
           "</ul>" +
          "</nav>";

        // Add the ToC to the page and make it visible
        $("#contents").prepend(ToC);
        $(".panel-toc").show();
    }
    else {
        //if there is no ToC and also no other side-widget panels, center the main content container on the page
        if ( !$('#FurtherReadingPanel').length && !$('#ReadFirstPanel').length ) {
            $('#main-content-container').removeClass('col-md-offset-4').addClass('col-md-offset-2');
        }
    }
});