function go_back () {
    var actionBar = $.dSummary.activity.actionBar; 
    actionBar.onHomeIconItemSelected = function() { 
        $.dSummary.close();
    }; 
}