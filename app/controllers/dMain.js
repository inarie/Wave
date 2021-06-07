var args = arguments[0] || {};

$.dMain.backgroundImage = "/background/" + Ti.App.Properties.getString("mode") + ".png";

if(Ti.App.Properties.getString("mode") === "dive"){
    $.dMain.backgroundColor = "#0364BB";
    $.next.backgroundColor = "#0364BB";
    args.tintColor = "white";

    $.persons.color = "white";
    $.location.color = "white";
    $.duration.color = "white";
} else if(Ti.App.Properties.getString("mode") === "whale") {
    $.dMain.backgroundColor = "#EB807E";
    $.next.backgroundColor = "#EB807E";
    args.tintColor = "white";

    $.persons.color = "white";
    $.location.color = "white";
    $.duration.color = "white";
} else {
    $.dMain.backgroundColor = "#A7EAEB";
    $.next.backgroundColor = "#A7EAEB";
    $.next.color = "black";
    args.tintColor = "black";

    $.persons.color = "black";
    $.location.color = "black";
    $.duration.color = "black";
}

function loadProperties(){
    if(Alloy.Globals.annotations){
        $.location.title = "Company: " + Alloy.Globals.annotations.title;
    }
    if(Ti.App.Properties.getInt("persons")){
        $.persons.title = "Persons: " + Ti.App.Properties.getInt("persons");
    }
    if(Ti.App.Properties.getInt("duration")){
        $.duration.title = "Time: " + Ti.App.Properties.getInt("duration");
    }

    if(Alloy.Globals.annotations && Ti.App.Properties.getInt("persons") && Ti.App.Properties.getInt("duration"))
        $.next.opacity = "100%";
}

function openSurvey(e) {
    if(e.source.id === "persons" || e.source.id === "duration"){
        var dDetails = Alloy.createController("dDetails", {args, title: e.source.id}).getView();
        args.openWindow(dDetails);
    } else {
        var dMap = Alloy.createController("dMap", args).getView();
        args.openWindow(dMap);
    }
}

function openMap() {
    var dRMap = Alloy.createController("dRMap", args).getView();
    args.openWindow(dRMap);
}