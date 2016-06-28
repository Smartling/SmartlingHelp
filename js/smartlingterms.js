

$(document).ready(function() {
   terms = ["file", "download"]
   $(".content").markRegexp(/download/i, {className: 'smartling-term'});
});
