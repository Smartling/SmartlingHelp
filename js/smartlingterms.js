

$(document).ready(function() {
    $.expr[":"].contains = $.expr.createPseudo(function(arg) {
        return function( elem ) {
            return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
        };
    });
    
    
    var terms = [
        {
            term: 'File',
            definition: 'Files can be uploaded to Smartling in a bunch of ways.',
            links: [
                {
                    text: 'Working with Files',
                    link: '/articles/download-files/'
                }
                ]
        }
    ]
    
    for (var i=0; i < terms.length; i++) {
        var currentTerm = terms[i];
        $(":contains(currentTerm.term)").html(function(_, html) {
            var re = new RegExp(currentTerm.term,"gi");
            return  html.replace(re, '<span class="smartling-term">$1</span>')
        });
    }
});