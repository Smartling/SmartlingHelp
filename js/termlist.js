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
           title: "{{term.title}}",
           definition: "{{term.definition}}"",
           links: [
               {% for link in term.links %}
               {% unless forloop.first %},{% endunless %}{
                   title: "{{link.title}}",
                   url: "{{link.url}}"
               }
               {% endfor %}
               ]
       }
       {% endfor %}
       ]