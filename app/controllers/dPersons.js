function sliderEvent(e){
    var appealingNum = Math.round(e.value);
    Ti.App.Properties.setInt("persons", appealingNum);
    $.label.text = appealingNum + "persons";
    if(appealingNum > 1 && appealingNum <20){
        appealingNum = 5;
    }
}
