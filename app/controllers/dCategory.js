$.dCategory.addEventListener("open", function(e) { 
    var actionBar = $.dCategory.activity.actionBar; 
    actionBar.onHomeIconItemSelected = function() { 
        $.dCategory.close();
    }; 
});

function nextView() {
    var dSubcategory = Alloy.createController("dSubcategory").getView();
    dSubcategory.open();
}
