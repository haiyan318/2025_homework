$(document).ready(function() {
    $(".nav-li").hover(
        function () {
            $(this).children(".dropdown").stop(true, true).slideDown(200);
        },
        function () {
            $(this).children(".dropdown").stop(true, true).slideUp(200);
        }
    );
});