function go_back () {
    var actionBar = $.dMain.activity.actionBar; 
    actionBar.onHomeIconItemSelected = function() { 
        $.dMain.close();
    };
}

function nextView() {
    var dMap = Alloy.createController("dMap").getView();
    dMap.open();
}

var args = $.args;
console.log(args);

tableData = []
var section = "";
var row = "";
var rowTitle = ["Dive Buddies", "Dive Center", "Dive Time"];

for (var i=0; i<3; i++){

    /* if (i % 5 == 0){
        section = Ti.UI.createTableViewSection({
            headerTitle : "section"   
        });
        tableData.push(section);
    } */

    row = Ti.UI.createTableViewRow({
        title : rowTitle[i],
        color: "black",
        id : i
    }); 
    tableData.push(row);
    
    //section.add(row);
    
}

$.table.setData(tableData);
