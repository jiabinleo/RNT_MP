$(function () {
    var indexPage = {
        listent: function () {
            var stepP = { page: 0 };
            // sessionStorage.setItem("key",JSON.stringify(stepP))
            $("#index_menu_top").on("click", function () {
                if ($("#mask").css("display") === "none") {
                    $("#mask").show()
                } else {
                    $("#mask").hide()
                    $("#mask").hide()
                }
            })
            $("#mask").on("click", function () {
                $("#mask").hide()
                $("#index_menu_bottom > p").css({ "background": "#FFFFFF" })
            })
            $("#index_menu_bottom").on("click", "p", function (e) {
                var stepP = { page: 1 };
                sessionStorage.setItem("key", JSON.stringify(stepP))
                $(this).css({ "background": "#EEEEEE" }).siblings("p").css({ "background": "#FFFFFF" })
                if (e && e.stopPropagation)
                    e.stopPropagation();
                else
                    window.event.cancelBubble = true;
            })
            $("#step1").on("click", function () {
                stepP.page = 1;
                sessionStorage.setItem("key", JSON.stringify(stepP))
            })
            $("#step2").on("click", function () {
                stepP.page = 2;
                sessionStorage.setItem("key", JSON.stringify(stepP))
            })
            
        },
        init: function () {

        }
    }
    indexPage.listent()
})