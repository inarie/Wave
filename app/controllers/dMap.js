var MapModule = require("ti.map");

//Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_HIGH;
var pins = [
    MapModule.createAnnotation({
        latitude: 37.389569,
        longitude: -122.050212,
        title: 'Appcelerator HQ',
        subtitle: 'Mountain View, CA',
        animate: true,
        pincolor: MapModule.ANNOTATION_GREEN,
        leftButton: 'appcelerator.gif'
    }),
    MapModule.createAnnotation({
        latitude: 37.331689,
        longitude: -122.030731,
        title: 'Apple HQ',
        subtitle: 'Cupertino, CA',
        animate: true,
        pincolor: MapModule.ANNOTATION_RED,
        rightButton: 'apple.png'
    }),
    MapModule.createAnnotation({
        latitude: 37.422502,
        longitude: -122.0855498,
        title: 'Google HQ',
        subtitle: 'Mountain View, CA',
        animate: true,
        image: 'google.png',
        leftView: Ti.UI.createButton({
            title: 'leftView',
            height: 32,
            width: 70
        }),
        rightView: Ti.UI.createLabel({
            text: 'rightView',
            color: '#fff'
        })
    })
];

var mapView = MapModule.createView({
    mapType : MapModule.NORMAL_TYPE,
    animate : true,
    userLocation : true,
    zoom : 8,
    annotations : pins

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

mapView.addEventListener('click', function(e){
    console.log(e);
    Alloy.Globals.annotation = e;
    $.dMap.close();
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