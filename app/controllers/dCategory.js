var textColor = "";

$.dCategory.backgroundImage = "/background/" + Ti.App.Properties.getString("mode") + ".png";

if(Ti.App.Properties.getString("mode") === "dive") {
    $.dCategory.backgroundColor = "#0364BB";
    $.next.backgroundColor = "#0364BB";
    textColor = "white";
} else if (Ti.App.Properties.getString("mode") === "whale") {
    $.dCategory.backgroundColor = "#EB807E";
    $.next.backgroundColor = "#EB807E";
    textColor = "white";
} else {
    $.dCategory.backgroundColor = "#A7EAEB";
    $.next.backgroundColor = "#A7EAEB";
    textColor = "black";
}

tableData = [];
var row = "";
var rowTitle = ["Category 1", "Category 2", "Category 3"];

for (var i=0; i<3; i++){
    row = Ti.UI.createTableViewRow({
        title: rowTitle[i],
        color: textColor,
        hasChild: true,
        id: i
    });
    tableData.push(row);
}

$.table.setData(tableData);

function openSummary() {
    var dSummary = Alloy.createController("dSummary", args).getView();
    dSummary.open();
}