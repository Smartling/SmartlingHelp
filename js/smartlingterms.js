

$(document).ready(function() {
   terms = ["file", "download"]
   $(".content").markRegExp(/download/i, {className: 'smartling-term'});
});
