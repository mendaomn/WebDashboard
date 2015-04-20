$(document).ready(function () {
    $("select").imagepicker();
});

function resetFilters(){
    $('form input[type=text]').each(function(){
        $(this).val("");
    });
    $("option:selected").removeAttr("selected");
    $("select").imagepicker();
}