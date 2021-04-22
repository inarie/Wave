function go_back () {
    var actionBar = $.dSubcategory.activity.actionBar; 
    actionBar.onHomeIconItemSelected = function() { 
        $.dSubcategory.close();
    }; 
}

function nextView(){
    var dSummary = Alloy.createController("dSummary").getView();
    dSummary.open();
}

var args = $.args;
console.log(args);

tableData = [];
var row = "";
var rowTitle = ["Subcategory 1", "Subcategory 2", "Subcategory 3"];

for (var i=0; i<3; i++){
    row = Ti.UI.createTableViewRow({
        title : rowTitle[i],
        color: "black",
        id : i
    }); 
    tableData.push(row);
}

$.table.setData(tableData);
