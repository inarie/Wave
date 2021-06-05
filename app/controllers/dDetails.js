var args = arguments[0].args || {};
const winTitle = arguments[0].title;

if(winTitle === "persons"){
    $.dDetails.title = "Persons";
    $.slider.min = 1;
    $.slider.max = 20;
    $.label.text = "α " + winTitle;
}else{
    $.dDetails.title = "Time";
    $.slider.min = 2,
    $.slider.max = 120;
    $.label.text = "α minutes";
}

$.dDetails.backgroundImage = "background/" + Ti.App.Properties.getString("mode") + ".png";

if(Ti.App.Properties.getString("mode") === "dive"){
    $.dDetails.backgroundColor = "#0364BB";
    args.tintColor = "white";
} else if(Ti.App.Properties.getString("mode") === "whale") {
    $.dDetails.backgroundColor = "#EB807E";
    args.tintColor = "white";
} else {
    $.dDetails.backgroundColor = "#A7EAEB";
    args.tintColor = "black";
}

function sliderEvent(e){
    var appealingNum = Math.round(e.value);
    Ti.App.Properties.setInt(winTitle, appealingNum);
    
    if (winTitle === "persons") {
        $.label.text = appealingNum + " " + winTitle;
        if(appealingNum > 1 && appealingNum <20){
            appealingNum = 5;
        }
    }
    else {
        $.label.text = appealingNum + " minutes";
        if(appealingNum > 2 && appealingNum <120){
            appealingNum = 62;
        }
    }
}
