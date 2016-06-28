

$(document).ready(function() {
   terms = ["file", "download"]
   fullterms = [
       {
           term: 'File',
           definition: 'Files can be uploaded and downloaded to Smartling.',
           links: [
               {
                   title: 'Working with Files',
                   url: '/test'
               },
               {
                   title: 'Not working with Files',
                   url: '/test1'
               }
               ]
       },
       {
           term: 'Download',
           definition: 'Files are really easy to download',
           links: [
               {
                   title: 'Get your files',
                   url: '/test'
               }]
       }
       ]
   $(".content").mark(terms, {className: 'smartling-term', exclude: ["h1", "h2", "h3", "h4", "h5", "a"]});
   var done = []
   $(".smartling-term").each(function(i) {
       text = $(this).text().toLowerCase();
       if (done.indexOf(text) === -1) {
           $(this).addClass('term-underline');
           for(i=0; i < fullterms.length; i++) {
               if(fullterms[i].term.toLowerCase() === text) {
                   var title = fullterms[i].term
                   
                   if (fullterms[i].links) {
                       var termlinks = '<ul>'
                       for (j=0; j < fullterms[i].links.length; j++) {
                           termlinks.append('<li><a href="' + fullterms[i].links[j].url + '">' + fullterms[i].links[j].title + '</a></li>')
                       }
                       termlinks.append('</ul>');
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
      $('[data-toggle="popover"]').popover({html:true})
    }) 
});
