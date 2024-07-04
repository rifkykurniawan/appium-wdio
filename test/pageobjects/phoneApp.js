const elements = require('../pageElements/Elements.json')
class phoneApp{
    get openApp(){
        return  $(elements.openAppElements.appID);
    }
    
    async terminateApp(){ 
        await driver.execute('mobile: terminateApp', {
            appId: 'com.yoripeapp'});
    }
}
module.exports = new phoneApp()