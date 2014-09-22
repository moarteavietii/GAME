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
            $("#yourname").change(function() {
                $.cookie('user', $(this).val());
                changeName();
            });
        });
    });
});

var ptforlang = false;
var ptforname = false;

function changeLang() {
    $("#flag").removeAttr('class');
    $("#flag").addClass($.cookie('lang'));
    if (!ptforlang) {
        addPoints(10);
    }
}

function changeName() {
    $("#name").html($.cookie('user'));
    if (!ptforname) {
        addPoints(10);
    }
}

function addPoints(x) {
    var current = $.cookie('pt');
    $.cookie('pt', current + x);
    $("#score").html($.cookie('pt'));
}