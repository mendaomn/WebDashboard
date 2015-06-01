define(['jquery', 'jquerytmpl'], function( $ ) {

    // Get data from JSON file -> get template from file -> compile template -> feed template with data
    var queryData = function (){
        $.getJSON("js/app/json/perSourceData.js", function(model) {
            $.get("js/app/templates/perSourceTemplate.html", function(markup){
                $.template( "perSourceTemplate", markup );
                $.tmpl("perSourceTemplate", model["items"]).appendTo("#perSource");
            });

        });
    };

    // Get data from JSON file -> get template from file -> compile template -> feed template with data
    var persourceData = function (){
        $.getJSON("js/app/json/perSourceStatic.js", function(model) {
            $.get("js/app/templates/perSourceStaticTemplate.html", function(markup){
                $.template( "perSourceTemplate", markup );
                $.tmpl("perSourceTemplate", model["items"]).appendTo("#perSourceStatic");
            });
        }); 
    };
    
    // Expose templates methods
    return { 
        perSourceTemplate: queryData,
        perSourceStaticTemplate: persourceData
    };
});

