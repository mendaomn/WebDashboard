var Query = {
    baseURL : "http://3cixty.eurecom.fr/sparql?default-graph-uri=&",
    query : "select count (?x) where { ?x a dul:Place . ",
    nSources : 0,
    reset : function(){
        this.query = "select count (?x) where { ?x a dul:Place . ";
        this.nSources = 0;
    },
    updateSources : function(){
        // Extracts selected values from select element
        selectedSources = $('select').find(":selected").map(function(i, e){
            return $(this).val();
        });
        // Update sources counter
        this.nSources = selectedSources.length;
        // Update query with the selected sources, if any
        $.each(selectedSources, function(i, e){
            var newpub = "?x dc:publisher ?pub"+i+". FILTER regex(?pub"+i+", \"http://www."+e+".com\")";
            Query.query += newpub;
        });
    },
    updateBusinessType : function(bType){
        var bTypeQuery = "?x locationOnt:businessType ?t. FILTER regex(?t, \""+bType+"\")";
        Query.query += bTypeQuery;
    },
    updateName : function(name){
        var nameQuery = "?x schema:name ?name. FILTER regex(?name, \""+name+"\", \"i\")";
        Query.query += nameQuery;
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
    Query.reset(); // The Query object needs to be reset for every query
    Query.updateSources();
    // Check which field is not empty
    /* Business Type */
    var bType = $('#btype').val();
    if (bType) Query.updateBusinessType(bType);
    /* Name */
    var name = $('#placename').val();
    if (name) Query.updateName(name);
   /* if notEmpty(field) then
        currentQuery = updateQueryForField(currentQuery) 
    go to next field */
    Query.runQuery();
}