const elements = require('../pageElements/Elements.json')
class phoneApp{
    get openApp(){
        return  $(elements.openAppElements.appID);
    }
}
module.exports = new phoneApp()