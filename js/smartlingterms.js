

$(document).ready(function() {
   terms = ["file", "download"]
   $(".content").markRegExp(/download/i, {className: 'smartling-term'});
   var done = []
   $(".smartling-term").each(function(index, value) {
       text = $(this).text().toLowerCase();
       console.log(text)
       if (done.indexOf(text) === -1) {
           $(this).addClass('term-underline');
           done.push(text);
       }
   });
   
});
