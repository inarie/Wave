//POST
exports.post = function(url, data, postFunction, requestType) {
    //Setup
    var postURL = Ti.App.Properties.getString("serverUrl") + url;
    console.log("----------------------------------------------");
    console.log("-- POST - URL: " + postURL);

    for (var child in data){
        if (data.hasOwnProperty(child)){
            console.log("-- POST - DATA: " + data[child]);
        }
    }

	console.log("----------------------------------------------");

    if(Titanium.Network.online){
        var xhr = Ti.Network.createHTTPClient({
            onload : function(){
                if(this.status == "200") {
                    if(ckeckJSON(this.responseText)){
                        //postFunction(JSON.parse(this.responseText));
						Ti.App.Properties.setObject("creatures", this.responseText);
						console.log(Ti.App.Properties.getObject("creatures"));
						console.log("----------------------------------------------");
					}
                }
            },
            onerror : function(e) {
            },
            timeout : 10000
        });
        xhr.open(requestType, postURL);
        xhr.send(data);
    } else {
		alert("No internet");
    }
};

//HELPER
function ckeckJSON(_json) {
    try {
        JSON.parse(_json);
    } catch(e) {
		console.log(e);
        return false;
    }
    return true;
}
