var MapModule = require("ti.map");

//Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_HIGH;

var mapView = MapModule.createView({
    mapType : MapModule.NORMAL_TYPE,
    animate : true,
    userLocation : true,
    zoom : 8
});

$.dMap.addEventListener('open', function() {
    console.log(Ti.Geolocation.hasLocationPermissions());
    if (Ti.Geolocation.hasLocationPermissions()) {
        $.map_view.add(mapView);
      } else {
        Ti.Geolocation.requestLocationPermissions(Ti.Geolocation.AUTHORIZATION_ALWAYS, function(e) {
            if (e.success) {
                $.map_view.add(mapView);
            } else {
                alert('Could not obtain location permissions');
                $.dMap.close();
            }
        });
    }
});

function go_back () {
    var actionBar = $.dMap.activity.actionBar; 
    actionBar.onHomeIconItemSelected = function() { 
        $.dMap.close();
    };
}



/* function nextView() {
    var dCategory = Alloy.createController("dCategory").getView();
    dCategory.open();
} */