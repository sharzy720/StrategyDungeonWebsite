function navBarShrink() {
    var x = document.getElementById("nav_bar");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }

}
function subNavBarShrink() {
    var y = document.getElementById("sub_nav_bar");
    var z = document.getElementById("sub_nav_bar_title");
    if (y.className === "topnav") {
        y.className += " responsive";
    } else {
        y.className = "topnav";
    }
    if (z.className === "nav-title") {
        z.className += " responsive";
    } else {
        z.className = "nav-title";
    }
}