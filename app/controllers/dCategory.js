function go_back () {
    var actionBar = $.dCategory.activity.actionBar; 
    actionBar.onHomeIconItemSelected = function() { 
        $.dCategory.close();
    }; 
}

function nextView() {
    var dSubcategory = Alloy.createController("dSubcategory").getView();
    dSubcategory.open();
}

var args = $.args;
console.log(args);

tableData = [];
var row = "";
var rowTitle = ["Category 1", "Category 2", "Category 3"];

for (var i=0; i<3; i++){
    row = Ti.UI.createTableViewRow({
        title : rowTitle[i],
        color: "black",
        id : i
    }); 
    tableData.push(row);
}

$.table.setData(tableData);
