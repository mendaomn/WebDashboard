$(document).ready(function () {
    $("select").imagepicker();
});

function resizeCircle() {
    var textWidth = $('#count_result').text().width();
    $('#query_text').html(textWidth);
    $('#count_result').width(textWidth);
}