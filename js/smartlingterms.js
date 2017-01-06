
// This script highlights terms found in the _terms collection and creates a popup with a definition
// As of Jan '17 the 'terms' collection isn't complete so this script is not used.
// If someone gets around to writing the term glossary it's ready to be deployed
// The variables 'terms' and 'fullterms' are supplied by /js/termlist.js - this must be included first on the page.


$(document).ready(function() {
    // check location - this script causes problems if it runs in the cloudcannon editor
    // so we allow it only on help.smartling, localhost and the plain-lemongrass test domain.
    if (window.location.host === 'help.smartling.com' || window.location.host === 'plain-lemongrass.cloudvent.net' || window.location.host === 'localhost:4000') {
        // Use the mark library to find and tag terms
        $("#main-text").mark(terms, {className: 'smartling-term', exclude: ["h1", "h2", "h3", "h4", "h5", "a"]});
        var done = []
        $(".smartling-term").each(function (i) {
            text = $(this).text().toLowerCase();
            // check if this term is already underlined on the page - only the first instance of a term should be underlined
            if (done.indexOf(text) === -1) {
                $(this).addClass('term-underline');
                for (i = 0; i < fullterms.length; i++) {
                    if (fullterms[i].title.toLowerCase() === text) {
                        var title = fullterms[i].title

                        if (fullterms[i].links) {
                            var termlinks = '<ul>'
                            for (j = 0; j < fullterms[i].links.length; j++) {
                                termlinks = termlinks + '<li><a href="' + fullterms[i].links[j].url + '">' + fullterms[i].links[j].title + '</a></li>';
                            }
                            termlinks = termlinks + '</ul>';
                        }
                        var content = '<p>' + fullterms[i].definition + '</p>' + termlinks;
                    }
                }
                $(this).attr('data-toggle', 'popover');
                $(this).attr('title', title);
                $(this).attr('data-content', content);
                done.push(text);
            }
        });
        $(function () {
            $('[data-toggle="popover"]').popover({html: true})
        })

        // Hide all popups when user clicks away
        $('body').on('click', function (e) {
            //only buttons
            if ($(e.target).data('toggle') !== 'popover'
                && $(e.target).parents('.popover.in').length === 0) {
                $('[data-toggle="popover"]').popover('hide');
            }
        });
    }
});

