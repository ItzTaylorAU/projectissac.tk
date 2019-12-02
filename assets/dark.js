//function toggleDarkLight() {
//   var body = document.getElementById("body");
//    var currentClass = body.className;
//    body.className = currentClass == "dark" ? "light" : "dark";

//}

function toggleDarkLight() {
    if ($("body").hasClass("dark")) {
        $("body").removeClass("dark");
        $("body").addClass("light");
        $("block").addClass("active");
    } else {
        $(".popup-overlay, .popup-content").addClass("active");
    }
};

function yay() {
    $(".popup-overlay, .popup-content").removeClass("active");
    if ($("body").hasClass("light")) {
        $("body").removeClass("light");
        $("body").addClass("dark");
        $("header").addClass("is-dark");
        $("block").removeClass("active");
    } else if ($("body").addClass("dark")) {
        $("body").removeClass("dark");
        $("body").addClass("light");
    }
}

function nay() {
    $(".popup-overlay, .popup-content").removeClass("active");
    $("block").removeClass("active");
}