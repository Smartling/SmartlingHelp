$(document).ready(function() {
    $(".panel-toc").hide();
    var l = $("h2, h3").length;
    if (l > 1) {
        var ToC =
            "<ul class='nav nav-stacked'>";
        
        var newLine, el, title, link, classname;
        
        $("h2, h3").each(function() {
        
          el = $(this);
          title = el.text();
          if (el.prop("tagName").toLowerCase() === 'h2') {
              classname = "primary-nav";
          }
          if (el.prop("tagName").toLowerCase() === 'h3') {
              classname = "secondary-nav";
          }
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
        
        ToC +=
           "</ul>" +
          "</nav>";
        
        $("#contents").prepend(ToC);
        $(".panel-toc").show();
    }
    else {
        if ( !$('#FurtherReadingPanel').length && !$('#ReadFirstPanel').length ) {
            $('#main-content-container').removeClass('col-md-offset-4').addClass('col-md-offset-2');
        }
    }
});