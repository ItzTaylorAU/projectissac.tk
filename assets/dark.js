//function toggleDarkLight() {
//   var body = document.getElementById("body");
//    var currentClass = body.className;
//    body.className = currentClass == "dark" ? "light" : "dark";

//}

function toggleDarkLight() {
    if ($("body").hasClass("light")) {
        $("body").removeClass("light");
        $("body").addClass("dark");
        var header = document.getElementById('header');
        $("header").addClass("is-dark");
    } else if ($("body").addClass("dark")) {
        $("body").removeClass("dark");
        $("body").addClass("light");
    }
};