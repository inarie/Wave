//POST
exports.post = function(url, data, postFunction) {
    //Setup
    var postURL = Ti.App.Properties.getString("serverUrl") + url;
    console.log("----------------------------------------------");
    console.log("-- POST - START");
    console.log("-- POST - URL: " + postURL);

    //List data
    for (var child in data){
        if (data.hasOwnProperty(child)){
            console.log("-- POST - DATA: " + data[child]);
        }
    }

    //Online
    if(Titanium.Network.online){
        var xhr = Ti.Network.createHTTPClient({
            onload : function(){
                //Debug
                console.log("-- POST - " + url + " - START");
                console.log("-- POST - " + url + " - STATUS: " + this.status);
                console.log("-- POST - " + url + "- TEXT: " + this.responseText);

                //Status ok
                if(this.status == "200") {
                    if(checkJSON(this.responseText)){
                        postFunction(JSON.parse(this.responseText));
                    }
                }
                console.log("-- POST - " + url + " - END");
            },
            onerror : function(e) {
                Alloy.Globals.HandleErr(e, url);
            },
            timeout : 10000
        });
        xhr.open('POST', postURL);
        xhr.send(data);

    } else {
        Alloy.Globals.HandleNoNet();
    }
};

//HELPER
function ckeckJSON(_json) {
    try {
        JSON.parse(_json);
    } catch(e) {
        var alerts = require('alerts');
        alerts.show(e);
        alerts = null;

        return false;
    }
    return true;
}

//GET
exports.get = function(url, data, getFunction) {
    //Setup
    var postURL = Ti.App.Properties.getString("serverUrl") + url;
    console.log("---------------------------");
			console.log("-- POST - START");
			console.log("-- POST - URL: " + postURL);
​
		// list data
			for (var child in data) {
				if (data.hasOwnProperty(child)) {
					console.log("-- POST - DATA: " + data[child]);
				}
			}
​
		// online
			if (Titanium.Network.online) {
				var xhr = Ti.Network.createHTTPClient({
					onload : function() {
						// debug
							console.log("-- POST - " + url + " - START");
							console.log("-- POST - " + url + " - STATUS: " + this.status);
							console.log("-- POST - " + url + " - TEXT:   " + this.responseText);
						// status ok
							if (this.status == "200") {
								// var responseTextJSON = JSON.parse(this.responseText);
								// handle server error
									IsJsonString(this.responseText);
									function IsJsonString(JSONtoParse) {
										try {
											JSON.parse(JSONtoParse);
										} catch (e) {
											var alerts = require('alerts');
											alerts.show(e);
											alerts = null;
											return false;
										}
									// ===
									// RUN
										getFunction(JSON.parse(JSONtoParse));
										return true;
									}
									// Alloy.Globals.checkErrors(responseTextJSON);
								}
							console.log("-- POST - " + url + " - END");
					},
					onerror : function(e) {
						Alloy.Globals.HandleErr(e, url);
					},
					timeout : 10000
				});
				xhr.open('GET', postURL);
				xhr.send(data);
​
		// offline
			} else {
				Alloy.Globals.HandleNoNet();
			}
	};
