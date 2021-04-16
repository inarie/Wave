$.dSubcategory.addEventListener("open", function(e) { 
    var actionBar = $.dSubcategory.activity.actionBar; 
    actionBar.onHomeIconItemSelected = function() { 
        $.dSubcategory.close();
    }; 
});

function nextView(){
    var dSummary = Alloy.createController("dSummary").getView();
    dSummary.open();
}
