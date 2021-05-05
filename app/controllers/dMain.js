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

function go_back () {
    var actionBar = $.dMain.activity.actionBar; 
    actionBar.onHomeIconItemSelected = function() { 
        $.dMain.close();
    };
}

function goToPersons(){
    var dPersons = Alloy.createController("dPersons").getView();
    dPersons.open();
}

function goToMap(){
    var dMap = Alloy.createController("dMap").getView();
    dMap.open();
}

function goToDuration(){
    var dDuration = Alloy.createController("dDuration").getView();
    dDuration.open();
}