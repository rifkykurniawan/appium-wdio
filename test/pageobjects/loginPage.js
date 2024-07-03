const elements = require('../pageElements/Elements.json')
class loginPage{
    get welcomeText(){
        return $(elements.loginPageElements.welcomeText)
    }
    get yoripeText(){
        return $(elements.loginPageElements.yoripeText)
    }
    get continueWithEmailButton(){
        return $(elements.loginPageElements.continueWithEmail)
    }
    get emailTextField(){
        return $(elements.loginPageElements.emailTextField)
    }
    get continueButton(){
        return $(elements.loginPageElements.continueButton)
    }

}
module.exports = new loginPage()