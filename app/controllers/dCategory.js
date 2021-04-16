$.dCategory.addEventListener("open", function(e) { 
    var actionBar = $.dCategory.activity.actionBar; 
    actionBar.onHomeIconItemSelected = function() { 
        $.dCategory.close();
    }; 
});
