// requireJS configuration
require.config({
    baseUrl: 'js/app',
    paths: {
        jquery: "https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min",
        jquerytmpl: "http://ajax.microsoft.com/ajax/jquery.templates/beta1/jquery.tmpl.min",
        underscore: "http://documentcloud.github.com/underscore/underscore-min",
        backbone: "http://documentcloud.github.com/backbone/backbone-min"
    },
    shim: {
        'backbone': {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps: ['underscore', 'jquery'],
            //Once loaded, use the global 'Backbone' as the
            //module value.
            exports: 'Backbone'
        }
    }
});


// Require main module
require(['templates/template', 'views/view', 'models/model'], function(templates, View, Model) {
    // Run templates to fill up the lists with data present in the json files
    templates.perSourceTemplate();
    templates.perSourceStaticTemplate();

    // Associate model instance to view instance
    var m = new Model();
    var v = new View( {model: m} );
    // Feed the model with new data taken from a JSON file
    $.getJSON("js/app/json/queryResult.js", function(model) {
        m.set(model);
    });
});