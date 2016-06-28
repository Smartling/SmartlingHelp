

$(document).ready(function() {
   terms = ["file", "download"]
   $(".content").mark(terms, {className: 'smartling-term' exclude: ["h1", "h2", "h3", "h4", "h5", "a"]});
   var done = []
   $(".smartling-term").each(function(index, value) {
       text = $(this).text().toLowerCase();
       if (done.indexOf(text) === -1) {
           $(this).addClass('term-underline');
           $(this).attr('data-toggle', 'popover');
           $(this).attr('title', 'Test');
           $(this).attr('data-content', 'This is a test');
           done.push(text);
       }
   });
    $(function () {
      $('[data-toggle="popover"]').popover()
    }) 
});
