# Appium + WebDriver IO (Android)

### General system requirements
* NodeJs
* Appium
* UiAutomator2
* Android Emulator
* JDK
* [Appium Inspector](https://github.com/appium/appium-inspector)

### Install NodeJS
* Download [Node.Js](https://nodejs.org/dist/v20.15.1/node-v20.15.1-x64.msi) depending on your operating system.

### Install Appium
* Install appium use command prompt
```bash
npm install -g appium
```
* Check appium version use command prompt
```bash
appium -v
```
* How to run the appium server (it will run on port : 4723)
```bash
appium -p 4723
```

### Install UiAutomator2
* Install UiAutomator2 using command prompt
```bash
appium driver install uiautomator2
```

### Install Android Emulator
* To install the Android Emulator, you can download the [Android Studio](https://redirector.gvt1.com/edgedl/android/studio/install/2024.1.1.11/android-studio-2024.1.1.11-windows.exe)and install the Android Emulator it self.

### Install JDK
* To install the Java Development Kit, you can download that [JDK](https://download.oracle.com/java/22/latest/jdk-22_windows-x64_bin.exe) in the official oracle website.

### Setup ANDROID_HOME
* To setup the ANDROID_HOME you can follow this [tutorial](https://stackoverflow.com/questions/26356359/error-android-home-is-not-set-and-android-command-not-in-your-path-you-must)

### Setup JAVA_HOME
* To setup the JAVA_HOME you can follow this [tutorial.](https://docs.oracle.com/en/cloud/saas/enterprise-performance-management-common/diepm/epm_set_java_home_104x6dd63633_106x6dd6441c.html)

### Setup WebDriverIO
1- To add a full WebdriverIO setup to an existing or new project using the WebdriverIO Starter Toolkit, If you're in the root directory of an existing project, run:
```bash
npm i --save-dev @wdio/cli
```
2- Run the initial WebdriverIO command : 
```bash
npm init wdio
```
3- Using the WDIO Configuration Helper select the options you want to select. In my case I decided to use:  
* On my local machine
* Mocha
* No compiler
* Spect Location: Default
* Do you want WebDriverIO to generate some test files?: No
* Reporter: Spec
* No Plugin 
* Service: Appium
* Base URL: Default
* NPM Install: Yes

### Check the appium requirements
* Install Appium-doctor
```bash
npm install appium-doctor -g
```
* Run the Appium-doctor
```bash
appium-doctor
```

### Error and issues
If you got issue on the first run the project and showing error on ts-node
```bash
npm i -D ts-node
```

### Run Project
If you want to run specific "IT" block
```bash
npx wdio run wdio.conf.js --spec "./test/specs/test.e2e.js" --mochaOpts.grep "Failed login with invalid email"
```
