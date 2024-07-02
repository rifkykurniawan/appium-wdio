import { expect as chaiExpect } from "chai";
const phoneApp = require('../pageobjects/phoneApp');
const loginPage = require ('../pageobjects/loginPage');

describe('Login Page', () => {
        it('Verify login page', async () => {
            await phoneApp.openApp.click()
            const welcomeText = await loginPage.welcomeText.getText()
            chaiExpect(welcomeText).to.equal('Welcome to the ')
    })
})

