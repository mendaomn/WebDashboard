function countGivenSource() {
    // Extracts selected values from select element
    var selectedSources = $('select').find(":selected").map(function(i, e){
        return $(this).val();
    });
    var URL = "http://3cixty.eurecom.fr/sparql?default-graph-uri=&";
    var obj = {
        query : "select count (?x) where { ?x a dul:Place . "
    };         
    $.each(selectedSources, function(i, e){
        newpub = "?x dc:publisher ?pub"+i+". FILTER regex(?pub"+i+", \"http://www."+e+".com\")";
        obj.query += newpub;
    });
    obj.query += "}";
    //This query counts places coming from a "source"
   $.getJSON(URL, obj, function( data ){
        $('#count_result').html(data["results"]["bindings"]["0"]["callret-0"]["value"]);
   }); 
}

function countGivenBusinessType() {
    decideQuery();
    /*
    // Extracts selected values from select element
    var selectedSources = $('select').find(":selected").map(function(i, e){
        return $(this).val();
    });
    var bType = $('#btype').val();
    console.log(bType);
    var URL = "http://3cixty.eurecom.fr/sparql?default-graph-uri=&";
    var obj = {
        query : "select count (?x) where { ?x a dul:Place . "
    };         
    $.each(selectedSources, function(i, e){
        newpub = "?x dc:publisher ?pub"+i+". FILTER regex(?pub"+i+", \"http://www."+e+".com\")";
        obj.query += newpub;
    });
    bTypeQuery = "?x locationOnt:businessType ?t. FILTER regex(?t, \""+bType+"\")";
    obj.query += bTypeQuery+"}";
    //This query counts places coming from a "source"
   $.getJSON(URL, obj, function( data ){
        $('#count_result').html(data["results"]["bindings"]["0"]["callret-0"]["value"]);
   }); */
}

var Query = {
    baseURL : "http://3cixty.eurecom.fr/sparql?default-graph-uri=&",
    query : "select count (?x) where { ?x a dul:Place . ",
    nSources : 0,
    updateSources : function(){
        var newpub;
        // Extracts selected values from select element
        selectedSources = $('select').find(":selected").map(function(i, e){
            return $(this).val();
        });
        // Update sources counter
        this.nSources = selectedSources.length;
        // Update query with the selected sources, if any
        $.each(selectedSources, function(i, e){
            newpub = "?x dc:publisher ?pub"+i+". FILTER regex(?pub"+i+", \"http://www."+e+".com\")";
            Query.query += newpub;
        });
    },
    runQuery : function(){
        var obj = { query : this.query };
        obj.query += "}";
        $.getJSON(this.baseURL, obj, function( data ){
            $('#count_result').html(data["results"]["bindings"]["0"]["callret-0"]["value"]);
        });
    }
};

function decideQuery(){
    a = new Query();
    a.updateSources();
    a.runQuery();
    /* Check which field is not empty
        if notEmpty(field) then
            currentQuery = updateQueryForField(currentQuery) 
        go to next field */
}