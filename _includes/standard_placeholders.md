

Resource files often use placeholders in strings to allow dynamic information to be inserted into a string. For example: `"Welcome {{username}}, you have ${{balance}} in your account"`. Smartling can recognize these placeholders and prevent them from being translated, while still allowing the translator to position them as needed in the translated string. Smartling offers two file directives to identify the types of placeholders that are used in your files. 

The `placeholder_format` directive lets you specify that your placeholders adhere to a common standard. Options are C, IOS, PYTHON, JAVA, YAML QT or RESX.

The `placeholder_format_custom`

