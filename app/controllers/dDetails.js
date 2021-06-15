var args = arguments[0].args || {};
const winTitle = arguments[0].title;

if(winTitle === "persons"){
    $.dDetails.title = "Persons";
    $.slider.min = 1;
    $.slider.max = 20;
    $.label.text = "α " + winTitle;

    $.img.image = "/img/1.png";
}else{
    $.dDetails.title = "Time";
    $.slider.min = 2,
    $.slider.max = 120;
    $.label.text = "α minutes";

    $.img.image = "/img/2.png";
}

$.dDetails.backgroundImage = "/background/" + Ti.App.Properties.getString("mode") + ".png";

if(Ti.App.Properties.getString("mode") === "dive"){
    $.dDetails.backgroundColor = "#0364BB";
} else if(Ti.App.Properties.getString("mode") === "whale") {
    $.dDetails.backgroundColor = "#EB807E";
} else {
    $.dDetails.backgroundColor = "#A7EAEB";
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

    $.img.image = "/img/" + appealingNum + ".png";
        $.img.width = appealingNum / 2 + 100 + "%";
}

function go_back(){
    $.dDetails.close();
}