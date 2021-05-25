function sliderEvent(e){
    var appealingNum = Math.round(e.value);
    Ti.App.Properties.setInt("duration", appealingNum);
    $.label.text = appealingNum + "duration";
    if(appealingNum > 2 && appealingNum <120){
        appealingNum = 62;
    }
}
