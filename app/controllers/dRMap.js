var args = arguments[0] || {};

var mapModule = require("ti.map");
var textColor = "";
var backgroundColor = "";

if(Ti.App.Properties.getString("mode") === "dive"){
    $.dRMap.backgroundColor = "#0364BB";

    textColor = "white";
    backgroundColor = "#0364BB";
} else if(Ti.App.Properties.getString("mode") === "whale") {
    $.dRMap.backgroundColor = "#EB807E";

    textColor = "white";
    backgroundColor = "#EB807E";
} else {
    $.dRMap.backgroundColor = "#A7EAEB";

    textColor = "black";
    backgroundColor = "#A7EAEB";
}

Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_HIGH;

var mapView = mapModule.createView({
  mapType: mapModule.NORMAL_TYPE,
  animate: true,
  userLocation: true,
  annotations: [],
  zoom: 4
});

Ti.Geolocation.getCurrentPosition(function(e) {
    if (e.error) {
        return; 
    }

    mapView.location = {
        latitude : e.coords.latitude,
        longitude : e.coords.longitude,
        latitudeDelta : 0.01,
        longitudeDelta : 0.01
    };
});

var annotationBtn = Titanium.UI.createButton({
    bottom: 20,
    width: "15%",
    height: 'auto',
    title: "+",
    verticalAlign:'center',
    visible: false,
    backgroundColor: backgroundColor,
    color: textColor,
    font: {
      fontSize: "35",
    },
    borderRadius: 10,
    borderWidth: 0
});

$.dRMap.addEventListener('open', function() {
    if (Ti.Geolocation.hasLocationPermissions()) {
        $.mapView.add(mapView);
        $.mapView.add(annotationBtn);
      } else {
        Ti.Geolocation.requestLocationPermissions(Ti.Geolocation.AUTHORIZATION_ALWAYS, function(e) {
            if (e.success) {
                $.mapView.add(mapView);
                $.mapView.add(annotationBtn);
            } else {
                alert('Could not obtain location permissions');
                $.dRMap.close();
            }
        });
    }
});

mapView.addEventListener('mapclick', function(e) {
  annotationBtn.visible = true;
  mapView.removeAllAnnotations();
  mapView.addAnnotation(
    mapModule.createAnnotation({
        latitude: e.latitude,
        longitude: e.longitude,
        animate: true,
        leftButton: 'appcelerator.gif'
    })
  );

  Ti.App.Properties.setInt("latitude", e.latitude);
  Ti.App.Properties.setInt("longitude", e.longitude);
});

annotationBtn.addEventListener('click', function(){
    var dCategory = Alloy.createController("dCategory").getView();
    dCategory.open();
});

function go_back(){
    $.dRMap.close();
}