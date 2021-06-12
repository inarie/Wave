var selectedCategories = arguments[0].categories || {};

var textColor = "";

var tableData = [];
var row = "";
var rowContent = [];

$.dSummary.backgroundImage = "background/" + Ti.App.Properties.getString("mode") + ".png";

if(Ti.App.Properties.getString("mode") === "dive"){
    $.dSummary.backgroundColor = "#0364BB";
    $.submit.backgroundColor = "#0364BB";
    textColor = "white";
} else if(Ti.App.Properties.getString("mode") === "whale") {
    $.dSummary.backgroundColor = "#EB807E";
    $.submit.backgroundColor = "#EB807E";
    textColor = "white";
} else {
    $.dSummary.backgroundColor = "#A7EAEB";
    $.submit.backgroundColor = "#A7EAEB";
    $.submit.color = "black";
    textColor = "black";
}

var headerViewArray = [];
var headViewTitles = ["Pre Survey", "Report", "Categories"];
for(var i = 0; i < 3; i++){
    var headerView = Ti.UI.createView({ height: 40, backgroundColor:'transparent' });
    var headerLabel = Ti.UI.createLabel({ text: headViewTitles[i], color: textColor, font: { fontWeight: "bold" }});
    headerView.add(headerLabel);    
    headerViewArray.push(headerView);
}

var section1 = Ti.UI.createTableViewSection({ headerView: headerViewArray[0] });
var section2 = Ti.UI.createTableViewSection({ headerView: headerViewArray[1] });
var section3 = Ti.UI.createTableViewSection({ headerView: headerViewArray[2] });

function loadTableData() {
    tableData = [];
    row = "";

    $.table.setData(tableData);

    section1.add(Ti.UI.createTableViewRow({ title: "Persons: " + Ti.App.Properties.getInt("persons"), color: textColor }));
    section1.add(Ti.UI.createTableViewRow({ title: "Time: " + Ti.App.Properties.getInt("duration"), color: textColor }));
    section1.add(Ti.UI.createTableViewRow({ title: "Company: " + Alloy.Globals.annotations.title, color: textColor }));

    section2.add(Ti.UI.createTableViewRow({ title: "Latitude: " + Ti.App.Properties.getInt("latitude"), color: textColor }));
    section2.add(Ti.UI.createTableViewRow({ title: "Longitude: " + Ti.App.Properties.getInt("longitude"), color: textColor }));

    for (var i = 0; i < selectedCategories.length ; i++){
        row = Ti.UI.createTableViewRow({
            id : selectedCategories[i].id,
            height: 60,
            name: selectedCategories[i].name
        });

        var path = "";

        if(Ti.App.Properties.getString("mode") === "whale"){
            path = Ti.App.Properties.getString("serverUrl") + selectedCategories[i].image;
        } else if(Ti.App.Properties.getString("mode") === "litter"){
            path = selectedCategories[i].image + selectedCategories[i].id + ".png";
        } else {
            path = Ti.App.Properties.getString("serverUrl") + selectedCategories[i].image + selectedCategories[i].id;
        }
        var image = Ti.UI.createImageView({
            image: path,
            left: 10,
            height: 50,
            width: (Ti.App.Properties.getString("mode") === "litter") ? 50 : 80,
            borderRadius: 10,
            borderWidth: 0,
            name: selectedCategories[i].name,
            id : selectedCategories[i].id
        });
    
        var label = Ti.UI.createLabel({
            text: selectedCategories[i].name + ": " + Ti.App.Properties.getInt(selectedCategories[i].name),
            color: textColor,
            left: (Ti.App.Properties.getString("mode") === "litter") ? 80 : 100,
            name: selectedCategories[i].name,
            id : selectedCategories[i].id
        });
    
        row.add(image);
        row.add(label);

        section3.add(row);
    }
    
    $.table.setData([section1, section2, section3]);
}

function onSubmit() {
    Ti.App.Properties.removeProperty('persons');
    Ti.App.Properties.removeProperty('duration');
    Alloy.Globals.annotations = "";
    Ti.App.Properties.removeProperty('latitude');
    Ti.App.Properties.removeProperty('longitude');
    
    for (var i = 0; i < selectedCategories.length ; i++){
        Ti.App.Properties.removeProperty(selectedCategories[i].name);
    }
    args.popToRootWindow();
    
    alert("Congrats, you made a report!");
}

function go_back(){
    $.dSummary.close();
}