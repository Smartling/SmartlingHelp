---
---

   terms = [
       {% for term in site.terms %}
          {% unless forloop.first %},{% endunless %}"{{term.title}}"
       {% endfor %}
       ]
       
   
   
   
   
   
   
   
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