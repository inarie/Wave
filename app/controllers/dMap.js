$.dMap.addEventListener("open", function(e) { 
    var actionBar = $.dMap.activity.actionBar; 
    actionBar.onHomeIconItemSelected = function() { 
        $.dMap.close();
    };
});

function nextView() {
    var dCategory = Alloy.createController("dCategory").getView();
    dCategory.open();
}