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