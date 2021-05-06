var MapModule = require("ti.map");
Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_HIGH;

var pins = [
    MapModule.createAnnotation({
        latitude: 32.640546,
        longitude: -16.833859,
        title: 'Arena',
        subtitle: 'Many Fishes and swin though',
        animate: true,
        pincolor: MapModule.ANNOTATION_GREEN,
        leftButton: 'appcelerator.gif'
    }),
    MapModule.createAnnotation({
        latitude: 32.640902,
        longitude: -16.921495,
        title: 'Carlton Housereef',
        subtitle: 'Many Fishes and swin though',
        animate: true,
        pincolor: MapModule.ANNOTATION_RED,
        leftButton: 'appcelerator.gif'
    }),
    MapModule.createAnnotation({
        latitude: 32.7167,
        longitude: -17.1833,
        title: 'Ponta Gale',
        subtitle: 'Wall diving',
        animate: true,
        pincolor: MapModule.ANNOTATION_GREEN,
        leftButton: 'appcelerator.gif'
    }),
    MapModule.createAnnotation({
        latitude: 32.699402,
        longitude: -17.136981,
        title: 'Wreck Bowbelle',
        subtitle: 'Sand-dregder, length 80m',
        animate: true,
        pincolor: MapModule.ANNOTATION_BLUE,
        leftButton: 'appcelerator.gif'
    }),
    MapModule.createAnnotation({
        latitude: 32.650115,
        longitude: -17.00589,
        title: 'Wreck Afonso',
        subtitle: 'Navy ship sunk 09/2018, length 85m',
        animate: true,
        pincolor: MapModule.ANNOTATION_BLACK,
        leftButton: 'appcelerator.gif'
    }),
    MapModule.createAnnotation({
        latitude: 32.634485,
        longitude: -16.938819,
        title: 'Clube Naval',
        subtitle: 'Nice Canyons with morayeels',
        animate: true,
        pincolor: MapModule.ANNOTATION_WHITE,
        leftButton: 'appcelerator.gif'
    }),
    MapModule.createAnnotation({
        latitude: 32.634299,
        longitude: -16.934426,
        title: 'Gorgulho',
        subtitle: 'Big Rock sticking out from the sea',
        animate: true,
        pincolor: MapModule.ANNOTATION_CYAN,
        leftButton: 'appcelerator.gif'
    }),
    MapModule.createAnnotation({
        latitude: 32.635126,
        longitude: -16.932472,
        title: 'Lido Cave',
        subtitle: 'Cave with air chamber',
        animate: true,
        pincolor: MapModule.ANNOTATION_YELLOW,
        leftButton: 'appcelerator.gif'
    }),
    MapModule.createAnnotation({
        latitude: 32.635954,
        longitude: -16.930151,
        title: 'Pestana Palms Housereef',
        subtitle: 'Nice reock formation with Cave',
        animate: true,
        pincolor: MapModule.ANNOTATION_RED,
        leftButton: 'appcelerator.gif'
    }),
    MapModule.createAnnotation({
        latitude: 32.639784,
        longitude: -16.921526,
        title: 'Wreck Pronto',
        subtitle: 'SteamShip, length 30m',
        animate: true,
        pincolor: MapModule.ANNOTATION_GREEN,
        leftButton: 'appcelerator.gif'
    }),
    MapModule.createAnnotation({
        latitude: 32.6463,
        longitude: -16.890954,
        title: 'Lazareto',
        subtitle: 'Tiggerfish stingrays',
        animate: true,
        pincolor: MapModule.ANNOTATION_GREEN,
        leftButton: 'appcelerator.gif'
    }),
    MapModule.createAnnotation({
        latitude: 32.64069,
        longitude: -16.832752,
        title: 'T-Reef - Mamas',
        subtitle: '',
        animate: true,
        pincolor: MapModule.ANNOTATION_GREEN,
        leftButton: 'appcelerator.gif'
    }),
    MapModule.createAnnotation({
        latitude: 32.64069,
        longitude: -16.832752,
        title: 'Lavafinger',
        subtitle: '',
        animate: true,
        pincolor: MapModule.ANNOTATION_GREEN,
        leftButton: 'appcelerator.gif'
    }),
    MapModule.createAnnotation({
        latitude: 32.636274,
        longitude: -16.849485,
        title: 'Garajau',
        subtitle: 'Hand Tammed groupers',
        animate: true,
        pincolor: MapModule.ANNOTATION_GREEN,
        leftButton: 'appcelerator.gif'
    }),
    MapModule.createAnnotation({
        latitude: 32.636229,
        longitude: -16.850154,
        title: 'TReff, 2 Pinacles',
        subtitle: '2 Pinacles',
        animate: true,
        pincolor: MapModule.ANNOTATION_GREEN,
        leftButton: 'appcelerator.gif'
    }),
    MapModule.createAnnotation({
        latitude: 32.646718,
        longitude: -16.823602,
        title: 'Reis Magos',
        subtitle: 'Shallow wall',
        animate: true,
        pincolor: MapModule.ANNOTATION_GREEN,
        leftButton: 'appcelerator.gif'
    }),
    MapModule.createAnnotation({
        latitude: 32.687101,
        longitude: -16.786509,
        title: 'Ponta Santa Catarina',
        subtitle: 'Experienced divers',
        animate: true,
        pincolor: MapModule.ANNOTATION_GREEN,
        leftButton: 'appcelerator.gif'
    }),
    MapModule.createAnnotation({
        latitude: 32.714719,
        longitude: -16.756183,
        title: 'Machico',
        subtitle: 'Black Corals',
        animate: true,
        pincolor: MapModule.ANNOTATION_GREEN,
        leftButton: 'appcelerator.gif'
    }),
    MapModule.createAnnotation({
        latitude: 32.744611,
        longitude: -16.697815,
        title: 'Baia Abra',
        subtitle: 'Black Corals',
        animate: true,
        pincolor: MapModule.ANNOTATION_GREEN,
        leftButton: 'appcelerator.gif'
    }),
    MapModule.createAnnotation({
        latitude: 32.729475,
        longitude: -16.653062,
        title: 'Badajera Remains of shipwreck',
        subtitle: 'Wreck',
        animate: true,
        pincolor: MapModule.ANNOTATION_GREEN,
        leftButton: 'appcelerator.gif'
    }),
    MapModule.createAnnotation({
        latitude: 32.640917,
        longitude: -16.832824,
        title: 'Galo',
        subtitle: 'Cave with air chamber',
        animate: true,
        pincolor: MapModule.ANNOTATION_GREEN,
        leftButton: 'appcelerator.gif'
    })    
];

var mapView = MapModule.createView({
    mapType : MapModule.NORMAL_TYPE,
    animate : true,
    userLocation : true,
    zoom : 8,
    annotations : pins
});

mapView.setLocation ({
    latitude : 32.688656,
    longitude : -16.791765,
    animate : true,
    latitudeDelta : 0.04,
    longitudeDelta : 0.04
})




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
    Alloy.Globals.annotations = e;
    $.dMap.close();
});

function go_back () {
    var actionBar = $.dMap.activity.actionBar; 
    actionBar.onHomeIconItemSelected = function() { 
        $.dMap.close();
    };
}
