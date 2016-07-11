$(document).ready(function() {
    $(".panel-toc").hide();
    var l = $("h2, h3").length;
    console.log(l);
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
          el.attr("id",title.replace(/\s+/g, ''));
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
        
        $(".toc").prepend(ToC);
        $(".panel-toc").show();
    }
});