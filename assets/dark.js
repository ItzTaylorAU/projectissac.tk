//function toggleDarkLight() {
//   var body = document.getElementById("body");
//    var currentClass = body.className;
//    body.className = currentClass == "dark" ? "light" : "dark";

//}

function toggleDarkLight() {
    $(".popup-overlay, .popup-content").addClass("active");
};

function yay() {
    $(".popup-overlay, .popup-content").removeClass("active");
    if ($("body").hasClass("light")) {
        $("body").removeClass("light");
        $("body").addClass("dark");
        $("header").addClass("is-dark");
    } else if ($("body").addClass("dark")) {
        $("body").removeClass("dark");
        $("body").addClass("light");
    }
}

function nay() {
    $(".popup-overlay, .popup-content").removeClass("active");
}