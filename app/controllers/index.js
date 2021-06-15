Ti.App.Properties.setString("serverUrl", "http://wave-labs.org/api/");

$.win.open();

function select_mode(e) {
    console.log(e.source.id);
    Ti.App.Properties.setString("mode", e.source.id);

    var dMain = Alloy.createController("dMain").getView();
    dMain.open();
}

const creatures = require("posts");
const allCreatures = [];
let pages = 1;

while(true) {
    let url = "creature";
    if (pages > 1) {
      url += "?page=" + pages;
    }
  
    creatures.post(url, `creatures${pages}`, "", "GET");
    const creaturesPage = Ti.App.Properties.getObject(`creatures${pages}`);
    allCreatures.push(JSON.parse(creaturesPage));
  
    if (pages === allCreatures[0].meta.last_page) {
      break;
    }
  
    Ti.App.Properties.removeProperty(`creatures${pages}`);
    pages++;
  }
  

  Ti.App.Properties.setObject('creatures', allCreatures);

  //creatures = null;
  
  var litter = require("posts");
  litter.post("litter-category", "litter", "", "GET");
  //console.log(Ti.App.Properties.getObject("litter"));
  litter = null;  
  
  var whaleAppImages = require("posts");
  whaleAppImages.post("image/sighting", "whaleAppImages", "", "GET");
  //console.log(Ti.App.Properties.getObject("whaleAppImages"));
  whaleAppImages = null; 