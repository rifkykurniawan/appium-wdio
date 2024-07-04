const elements = require('../pageElements/Elements.json')

class loginEmailOtpPage{
    get pageTitle(){
        return $(elements.OTPCodePage.pageTitle)
    }
    get otp1Code(){
        return $(elements.OTPCodePage.otp1)
    }
    get otp2Code(){
        return $(elements.OTPCodePage.otp2)
    }
    get otp3Code(){
        return $(elements.OTPCodePage.otp3)
    }
    get otp4Code(){
        return $(elements.OTPCodePage.otp4)
    }
    get sendOtpButton(){
        return $(elements.OTPCodePage.sendOtpButton)
    }
    get invalidOtpToast(){
        return $(elements.OTPCodePage.invalidOtpToast)
    }


    async emailOTP (otp1, otp2, otp3, otp4){
        await this.otp1Code.setValue(otp1)
        await this.otp2Code.setValue(otp2)
        await this.otp3Code.setValue(otp3)
        await this.otp4Code.setValue(otp4)

    }
}
module.exports = new loginEmailOtpPage()