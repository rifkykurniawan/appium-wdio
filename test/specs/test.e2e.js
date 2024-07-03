const phoneApp = require('../pageobjects/phoneApp');
const loginPage = require ('../pageobjects/loginPage');
const emailOTPpage = require('../pageobjects/loginEmailOtpPage');

describe('Login Page', () => {
    before(async() => {
        await phoneApp.openApp.click()   
        driver.pause(5000)     
    });
    it('Verify login page', async () => {
        await expect(loginPage.welcomeText).toBeDisplayed()
        await expect(loginPage.welcomeText).toHaveText('Welcome to the')
        await expect(loginPage.yoripeText).toHaveText('YoRipe community!')
    })
    it('login with valid email', async() => {
        // await loginPage.continueWithEmailButton.click()
        await expect(loginPage.emailTextField).toHaveText('Enter your Email..')
        await loginPage.emailTextField.setValue('qa@yoripe.com')        
        await loginPage.continueButton.click()
        await emailOTPpage.emailOTP('0','0','0','0')
    });
    it('verify OTP code verification page', async () => {
        await expect(emailOTPpage.sendOtpButton).toBeDisabled()
        await expect(emailOTPpage.pageTitle).toHaveText('OTP code verification')
        await expect(emailOTPpage.otp1Code).toBeDisplayed()
        await expect(emailOTPpage.otp2Code).toBeDisplayed()
        await expect(emailOTPpage.otp3Code).toBeDisplayed()
        await expect(emailOTPpage.otp4Code).toBeDisplayed()
        
    });
})

