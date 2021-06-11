
var textColor = "";

$.dSummary.backgroundImage = "/background/" + Ti.App.Properties.getString("mode") + ".png";

if(Ti.App.Properties.getString("mode") === "dive"){
    $.dSummary.backgroundColor = "#0364BB";
    textColor = "white";
} else if(Ti.App.Properties.getString("mode") === "whale") {
    $.dSummary.backgroundColor = "#EB807E";
    textColor = "white";
} else {
    $.dSummary.backgroundColor = "#A7EAEB";
    textColor = "black";
}