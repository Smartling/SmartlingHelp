

$(document).ready(function() {
   terms = ["file", "download"]
   $(".content").markRegExp(terms, {className: 'smartling-term'});
   var done = []
   $(".smartling-term").each(function(index, value) {
       text = $(this).text().toLowerCase();
       console.log(text)
       if (done.indexOf(text) === -1) {
           $(this).addClass('term-underline');
           $(this).attr('data-toggle', 'popover');
           $(this).attr('title', 'Test');
           $(this).attr('data-content', 'This is a test');
           $(this).attr('data-trigger', 'hover');
           done.push(text);
       }
   });
   
});
