Ti.App.Properties.setString("serverUrl", "http://89.109.64.184/api/");

$.win.open();

function select_mode(e) {
    console.log(e.source.id);
    Ti.App.Properties.setString("mode", e.source.id);

    var dMain = Alloy.createController("dMain", $.dMain).getView();
    dMain.open();
}

var callBack = function(){
    var litter = require("posts");
    litter.post("litter", "litter", "", "GET");
    console.log(Ti.App.Properties.getObject("litter"));
    litter = null;
}

var creatures = require("posts");
creatures.post("creature", "creatures", callBack, "GET");
console.log(Ti.App.Properties.getObject("creatures"));
creatures = null;