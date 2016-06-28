$(document).ready(function() {
    var l = $("h2").length;
    console.log(l);
    if (l > 1) {
        var ToC =
            "<ul>";
        
        var newLine, el, title, link, classname;
        
        $("h2, h3").each(function() {
        
          el = $(this);
          title = el.text();
          classname = el.prop("tagName"); 
          el.attr("id",title.replace(/\s+/g, ''));
          link = "#" + el.attr("id");
        
          newLine =
            "<li class='toc" + classname + "'>" +
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
        $(".panel-toc").attr('style', 'display; block;')
    }
});