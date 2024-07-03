const phoneApp = require('../pageobjects/phoneApp');
const loginPage = require ('../pageobjects/loginPage');

describe('Login Page', () => {
    before(async() => {
        await phoneApp.openApp.click()        
    });
    it('Verify login page', async () => {
        await expect(loginPage.welcomeText).toBeDisplayed()
        await expect(loginPage.welcomeText).toHaveText('Welcome to the')
        await expect(loginPage.yoripeText).toHaveText('YoRipe community!')
    })
    it('login with valid email', async() => {
        await loginPage.authPhoneButton.click()
        await expect(loginPage.emailTextField).toHaveText('Enter your Email..')
        
    });
})

