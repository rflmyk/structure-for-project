# Default structure for project

This document demonstrate:

 - structure

###FOLDERS

``` 
├── assets
│   ├── fonts
│   ├── images
│   ├── javascripts
│   ├── stylesheets
│   └── views
├── bin
└── tmpl
*.html
``` 

####CSS
``` 
├── app.min.css
└── sass
    ├── abstracts
    ├── base
    ├── components
    ├── layout
    ├── themes
    └── vendors
        ├── FRAMEWORKS
        └── bootstrap
            └── mixins
            ...
...
``` 

####JAVASCRIPT
``` 
├── app.min.js
├── es6
├── es6_compileds
├── requireds
└── vendors

...
```
Into at folder ```assets > javascripts > vendors``` should is all ```*.js``` with reference to plugins useds in project. When **plugins** would have dependence of other files how ```*.css``` should be create folder with yours files, example:

``` 
├── javascripts
│   ├── es6
│   ├── es6_compileds
│   ├── requireds13px
│   └── vendors
│       └── YOUR-PLUGIN
├── stylesheets
│   └── sass
│       ├── abstracts
│       │   └── mixins
│       ├── base
│       ├── components
│       ├── layout
│       ├── themes
│       └── vendors
│           └── YOUR-PLUGIN
...
```
OR whene plugins would have files ```*.scss``` should be inseted into folder ```stylesheets > sass > vendors > NEW-PLUGIN.scss ```.
