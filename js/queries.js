function countGivenSource() {
    var URL = "http://3cixty.eurecom.fr/sparql?default-graph-uri=&";
    var source = "http://www.facebook.com";
    var obj = {
        query : "select count (?x) where { ?x a dul:Place . ?x dc:publisher ?pub. FILTER regex(?pub, \""+source+"\")}" 
    };
    //This query counts places coming from "source"
   //$.getJSON(URL, obj, function( data ){
        //$('#count_result').html(data["results"]["bindings"]["0"]["callret-0"]["value"]);
   //});   
    $('#count_result').html(12);
}