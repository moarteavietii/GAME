$(document).ready(function() {
    $.cookie('lang', 'en');
    $.cookie('user', 'YOU');
    $.cookie('pt', '0');
    $('#button').click(function() {
        $("#initianContent").fadeOut(400, function() {
            $("#newContent").fadeIn(200);
            $("#lang").change(function() {
                $.cookie('lang', $(this).val());
                changeLang();
            });
        });
    });
});

function changeLang() {
    $("#flag").removeAttr('class');
    $("#flag").addClass($.cookie('lang'));
}