Ti.App.Properties.setString("serverUrl", "http://wave-labs.org/api/");

$.win.open();

function select_mode(e) {
    console.log(e.source.id);
    Ti.App.Properties.setString("mode", e.source.id);

    var dMain = Alloy.createController("dMain", $.navWin).getView();
    $.navWin.openWindow(dMain);
}

var getData = require("posts");
getData.post("creature", "", "", "GET");
getData = null;