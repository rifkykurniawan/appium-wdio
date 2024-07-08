const phoneApp = require('../pageobjects/phoneApp');
const loginPage = require ('../pageobjects/loginPage');
const emailOtpPage = require('../pageobjects/loginEmailOtpPage');

describe('Login Page', () => {
    beforeEach(async() => {
        await phoneApp.openApp.click()   
        await driver.pause(10000)     
    });
    it('Verify login page', async () => {
        await expect(loginPage.welcomeText).toBeDisplayed()
        await expect(loginPage.welcomeText).toHaveText('Welcome to the')
        await expect(loginPage.yoripeText).toHaveText('YoRipe community!')
        await phoneApp.terminateApp()
    })
    it('verify OTP code verification page', async () => {
        await loginPage.emailTextField.setValue('qa@yoripe.com')        
        await loginPage.continueButton.click()
        await driver.pause(5000) 
        await expect(emailOtpPage.pageTitle).toHaveText('OTP code verification')
        await expect(emailOtpPage.otp1Code).toBeDisplayed()
        await expect(emailOtpPage.otp2Code).toBeDisplayed()
        await expect(emailOtpPage.otp3Code).toBeDisplayed()
        await expect(emailOtpPage.otp4Code).toBeDisplayed()
        await phoneApp.terminateApp()
    });
    it('Failed login with invalid email', async () => {
        await loginPage.emailTextField.setValue('invalidEmail')
        await loginPage.continueButton.click()
        await expect(loginPage.invalidEmailToast).toBeDisplayed()
        await phoneApp.terminateApp()
    });
    it('Failed login with invalid OTP code', async () => {
        await loginPage.emailTextField.setValue('testwithnewemail4@gmail.com')
        await loginPage.continueButton.click()
        await emailOtpPage.emailOTP('1','2','3','4')
        await emailOtpPage.sendOtpButton.click()
        await phoneApp.terminateApp()
    });
    it('login with valid email', async() => {
        await expect(loginPage.emailTextField).toHaveText('Enter your Email..')
        await loginPage.emailTextField.setValue('qa@yoripe.com')        
        await loginPage.continueButton.click()
        await expect(emailOtpPage.sendOtpButton).toBeDisabled()
        await emailOtpPage.emailOTP('0','0','0','0')
        await emailOtpPage.sendOtpButton.click()
    });
})

