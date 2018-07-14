$(function () {
    var about = {
        init: function () {
            console.log(",,")
        },
        listent: function () {
            var arrNum = 0;
            var Left = 0;
            $("#index_left").on("click", function () {
                if (Left < 0) {
                    Left += 100
                    arrNum--
                    $("#index_content_ul").css("margin-left", Left + "%")
                    about.arr(arrNum)
                }
            })
            $("#index_right").on("click", function () {
                if (Left > -300) {
                    Left -= 100
                    arrNum++
                    $("#index_content_ul").css("margin-left", Left + "%")
                    about.arr(arrNum)
                }
            })
        },
        arr: function (arrNum) {
            switch (arrNum) {
                case 0:
                    $("#index_left").css({ "background-image": "url('../../../images/about/left_hide.png')" })
                    $("#index_right").css({ "background-image": "url('../../../images/about/right.png')"})
                    break;
                case 3:
                    $("#index_left").css({ "background-image": "url('../../../images/about/left.png')"})
                    $("#index_right").css({ "background-image": "url('../../../images/about/right_hide.png')"})
                    break;
                default:
                    $("#index_left").css({ "background-image": "url('../../../images/about/left.png')" })
                    $("#index_right").css({ "background-image": "url('../../../images/about/right.png')" })
                    break;
            }

        }
    }
    about.listent()
    about.init()
})