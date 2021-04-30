function go_back () {
    var actionBar = $.dMain.activity.actionBar; 
    actionBar.onHomeIconItemSelected = function() { 
        $.dMain.close();
    };
}

function persons_click(){
    var dMap = Alloy.createController("dMap").getView();
    dMap.open(); 
}

function duration_click(){
    var dMap = Alloy.createController("dMap").getView();
    dMap.open(); 
}

function map_click(){
    var dMap = Alloy.createController("dMap").getView();
    dMap.open(); 
}

function loadProperties (){
    $.location.text = "Company: " + Alloy.Globals.annotation.title;
}
/* function nextView(e) {
    if (e.source.id == 3){
        var dMap = Alloy.createController("dMap").getView();
        dMap.open();
    }else{
        var dCategory = Alloy.createController("dCategory").getView();
        dCategory.open();
    }
}

var args = $.args;
console.log(args);

tableData = []
var section = "";
var row = "";
var rowTitle = ["Dive Buddies", "Dive Center", "Dive Time", "Dive Location"];

for (var i=0; i<4; i++){

    /* if (i % 5 == 0){
        section = Ti.UI.createTableViewSection({
            headerTitle : "section"   
        });
        tableData.push(section);
    } 

    row = Ti.UI.createTableViewRow({
        title : rowTitle[i],
        color: "black",
        id : i
    }); 
    tableData.push(row);
    
    //section.add(row);
    
}

$.table.setData(tableData); */