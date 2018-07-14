(function () {
    var width = document.documentElement.clientWidth;
    var style = document.createElement("style")
    style.innerHTML = "html{font-size: " + width / 16 + "px !important;}"
    document.head.appendChild(style)
})();
$(function () {
    var start = 0, move = 0, end = 0, moves;
    $('section').on('touchstart', function (e) {
        start = 0;
        var touch = e.originalEvent.targetTouches[0];
        start = touch.pageY;
        $('section').on('touchmove', function (e) {
            move = 0;
            var touch = e.originalEvent.targetTouches[0];
            move = touch.pageY - start;
        });

    });
    $('section').on('touchend', function (e) {
        end = 0;
        moves = 0;
        var touch = e.originalEvent.changedTouches[0];
        end = touch.pageY;
        moves = end - start
        if (moves > 10) {
            $("section").css({ "margin-top": " -0%" })
        } else {
            $("section").css({ "margin-top": " -175%" })
        }
    })
    var stepP = JSON.parse(sessionStorage.getItem("key"))
    switch (stepP.page) {
        case 1:
            console.log("1")
            $("section").css({ "margin-top": " -0%" })
            break;
        case 2:
            console.log("2")
            $("section").css({ "margin-top": " -175%" })
            break;
        default:
            break;
    }
})