var args = arguments[0] || {};

$.dMain.backgroundImage = "background/" + Ti.App.Properties.getString("mode") + ".png";

if(Ti.App.Properties.getString("mode") === "dive"){
    $.dMain.backgroundColor = "#0364BB";
} else if(Ti.App.Properties.getString("mode") === "whale") {
    $.dMain.backgroundColor = "#EB807E";
} else {
    $.dMain.backgroundColor = "#A7EAEB";
}

//Refazer
function loadProperties(){
    if(Alloy.Globals.annotations){
        $.location.text = "Location: " + Alloy.Globals.annotations.title;
    }
    if(Ti.App.Properties.getInt("persons")){
        $.persons.text = "Persons: " + Ti.App.Properties.getInt("persons");
    }
    if(Ti.App.Properties.getInt("duration")){
        $.duration.text = "Duration: " + Ti.App.Properties.getInt("duration");
    }
}

function openSurvey(e) {
    if(e.source.title === "Persons" || e.source.title === "Time"){
        var dDetails = Alloy.createController("dDetails", args).getView();
        args.openWindow(dDetails);
    } else {
        var dMap = Alloy.createController("dMap", args).getView();
        args.openWindow(dMap);
    }
}