const { expect } = require('@wdio/globals')
const phoneApp = require('../pageobjects/phoneApp')

describe('My Login application', () => {
    before(async() => {
        await phoneApp.openApp.click()
        await driver.pause(10000)
    });
    it('Verify login page', async () => {
    })
})

