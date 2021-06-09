var args = arguments[0] || {};
var textColor = "";

var tableData = [];
var row = "";
var rowContent = [];

$.dCategory.backgroundImage = "background/" + Ti.App.Properties.getString("mode") + ".png";

if(Ti.App.Properties.getString("mode") === "dive"){
    $.dCategory.backgroundColor = "#0364BB";
    $.next.backgroundColor = "#0364BB";
    args.tintColor = "white";
    textColor = "white";

    var creatures = Ti.App.Properties.getObject("creatures");

    creatures.forEach(element => {
        element.data.forEach(data => {
            if(data.dive_center_app === true){
                rowContent.push( { name: data.name, id: data.id, image: "image/dive/" } );
            }
        })
    });

} else if(Ti.App.Properties.getString("mode") === "whale") {
    $.dCategory.backgroundColor = "#EB807E";
    $.next.backgroundColor = "#EB807E";
    args.tintColor = "white";
    textColor = "white";

    var creatures = Ti.App.Properties.getObject("creatures");
    
    creatures.forEach(element => {
        element.data.forEach(data => {
            if(data.whale_reporter_app === true)
                rowContent.push( { name: data.name, id: data.id, image: "image/sighting/" } );
        })
    });

} else {
    $.dCategory.backgroundColor = "#A7EAEB";
    $.next.backgroundColor = "#A7EAEB";
    args.tintColor = "black";
    textColor = "black";

    var litter = JSON.parse(Ti.App.Properties.getObject("litter")).data;

    litter.forEach(element => {
        rowContent.push( { name: element.name, id: element.id, image: "http://wave-labs.org/images/litter-reporter/menu/" } );
    });
}

function loadTableData() {
    tableData = [];
    row = "";

    $.table.setData(tableData);

    for (var i = 0; i < rowContent.length; i++){
        row = Ti.UI.createTableViewRow({
            hasChild: true,
            id : rowContent[i].id,
            height: 60,
            name: rowContent[i].name
        });
    
        var image = Ti.UI.createImageView({
            image: (Ti.App.Properties.getString("mode") === "litter") ? (rowContent[i].image + rowContent[i].id + ".png") : (Ti.App.Properties.getString("serverUrl") + rowContent[i].image + rowContent[i].id),
            left: 10,
            height: 50,
            width: (Ti.App.Properties.getString("mode") === "litter") ? 50 : 80,
            borderRadius: 10,
            borderWidth: 0,
            name: rowContent[i].name,
            id : rowContent[i].id
        });
    
        var label = Ti.UI.createLabel({
            text: (Ti.App.Properties.getInt(rowContent[i].name)) ? rowContent[i].name + ": " + Ti.App.Properties.getInt(rowContent[i].name) : rowContent[i].name,
            color: textColor,
            left: (Ti.App.Properties.getString("mode") === "litter") ? 80 : 100,
            name: rowContent[i].name,
            id : rowContent[i].id
        });
    
        row.add(image);
        row.add(label);
    
        tableData.push(row);
    }
    
    $.table.setData(tableData);

    for (var i = 0; i < rowContent.length; i++){
        if(Ti.App.Properties.getInt(rowContent[i].name)){
            $.next.opacity = "100%";
            break;
        }
    }
}

function openSubCategory(e) {
    var dSubCategory = Alloy.createController("dSubCategory", {args, title: e.source.name, id: e.source.id}).getView();
    args.openWindow(dSubCategory);
}

function openSummary() {
    var dSummary = Alloy.createController("dSummary", args).getView();
    args.openWindow(dSummary);
}
