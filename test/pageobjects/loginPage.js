const elements = require('../pageElements/Elements.json')
class loginPage{
    get welcomeText(){
        return $(elements.loginPageElements.welcomeText)
    }
    get yoripeText(){
        return $(elements.loginPageElements.yoripeText)
    }
    get authPhoneButton(){
        return $(elements.loginPageElements.authPhoneButton)
    }
    get emailTextField(){
        return $(elements.loginPageElements.emailTextField)
    }
}
module.exports = new loginPage()