

$(document).ready(function() {
   terms = ["file", "download"]
   $(".content").markRegExp(terms, {"className": 'smartling-term', "exclude": ["h1", "h2", "h3", "h4", "h5"]});
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
