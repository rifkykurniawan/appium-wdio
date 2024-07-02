class loginPage{
    get welcomeText(){
        return $('//android.widget.TextView[@text="Welcome to the "]')
    }
}
module.exports = new loginPage()