---
---

   terms = [
       {% for term in site.terms %}
          {% unless forloop.first %},{% endunless %}"{{term.title}}"
       {% endfor %}
       ]
       
   
   
   
   
   
   
   
   fullterms = [
       {% for term in site.terms %}
       {% unless forloop.first %},{% endunless %}{
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
       }
       ]