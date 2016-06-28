

$(document).ready(function() {
   terms = ["file", "download"]
   $(".content").markRegExp(/download/i, {className: 'smartling-term'});
   var done = []
   $(".smartling-term").each(function(index, value) {
       console.log(value);
       if (done.indexOf(value) === -1) {
           $(this).addClass('term-underline');
           done.push(value);
       }
   });
   
});
