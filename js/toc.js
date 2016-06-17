$(document).ready(function() {

    var ToC =
      "<nav role='navigation' class='table-of-contents'>" +
        "<h2>On this page:</h2>" +
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

});