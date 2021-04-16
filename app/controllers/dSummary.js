$.dSummary.addEventListener("open", function(e) { 
    var actionBar = $.dSummary.activity.actionBar; 
    actionBar.onHomeIconItemSelected = function() { 
        $.dSummary.close();
    }; 
});
