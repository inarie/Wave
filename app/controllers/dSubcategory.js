const winTitle = arguments[0].title;
const id = arguments[0].id;

$.dSubcategory.title = winTitle;
$.label.text = "α " + winTitle;

$.dSubcategory.backgroundImage = "/background/" + Ti.App.Properties.getString("mode") + ".png";

if(Ti.App.Properties.getString("mode") === "dive"){
    $.dSubcategory.backgroundColor = "#0364BB";
    $.img.image = Ti.App.Properties.getString("serverUrl") + "image/dive/" + id;
} else if(Ti.App.Properties.getString("mode") === "whale") {
    $.dSubcategory.backgroundColor = "#EB807E";

    var images = JSON.parse(Ti.App.Properties.getObject("whaleAppImages"));
    images.data.forEach(img => {
        if(img.creature_id === id)
            $.img.image = Ti.App.Properties.getString("serverUrl") + img.url;
    });
} else {
    $.dSubcategory.backgroundColor = "#A7EAEB";
    $.img.image = "http://wave-labs.org/images/litter-reporter/menu/" + id + ".png";
}

function sliderEvent(e){
    var appealingNum = Math.round(e.value);
    Ti.App.Properties.setInt(winTitle, appealingNum);
    
    $.label.text = appealingNum + " " + winTitle;
    if(appealingNum > 1 && appealingNum < 20){
        appealingNum = 5;
    }
}

function go_back(){
    $.dSubcategory.close();
}
