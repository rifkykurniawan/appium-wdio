# appium-wdio

##General system requirements
* NodeJs
* Appium
* UiAutomator2
* Android Emulator
* JDK
* [Appium Inspector](https://github.com/appium/appium-inspector)

## Error and issues
If you got issue on the first run the project and showing error on ts-node
```bash
npm i -D ts-node
```
## Install NodeJS
## Install Appium
## Install UiAutomator2
## Install Android Emulator
## Install JDK
## Setup ANDROID_HOME
## Setup JDK_HOME
## Setup WebDriverIO
## 

## Run Project
If you want to run specific "IT" block
```bash
npx wdio run wdio.conf.js --spec "./test/specs/test.e2e.js" --mochaOpts.grep "Failed login with invalid email"
```
