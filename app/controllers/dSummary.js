var args = arguments[0] || {};
var textColor = "";

$.dSummary.backgroundImage = "/background/" + Ti.App.Properties.getString("mode") + ".png";

if(Ti.App.Properties.getString("mode") === "dive"){
    $.dSummary.backgroundColor = "#0364BB";
    args.tintColor = "white";
    textColor = "white";
} else if(Ti.App.Properties.getString("mode") === "whale") {
    $.dSummary.backgroundColor = "#EB807E";
    args.tintColor = "white";
    textColor = "white";
} else {
    $.dSummary.backgroundColor = "#A7EAEB";
    args.tintColor = "black";
    textColor = "black";
}