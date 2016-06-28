---
---

   terms = [
       {% for term in terms %}
          "{{term.title}}"{% unless forloop.first %},{% endunless %}
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