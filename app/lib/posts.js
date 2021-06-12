//POST
exports.post = function(url, dataType, postFunction, requestType) {
    //Setup
    var postURL = Ti.App.Properties.getString("serverUrl") + url;
   
    if(Titanium.Network.online){
        var xhr = Ti.Network.createHTTPClient({
            onload : function(){
                if(this.status == "200") {
                    if(ckeckJSON(this.responseText)){
						Ti.App.Properties.setObject(dataType, this.responseText);

						if (postFunction !== ""){
                            postFunction;
                        }
					}
                    
                }
            },
            onerror : function(e) {
            },
            timeout : 10000
        });
		xhr.open(requestType, postURL);
        xhr.send(dataType);
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