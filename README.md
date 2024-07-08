## appium-wdio

If you got issue on the first run the project and showing error on ts-node
```bash
npm i -D ts-node
```
If you want to run specific "IT" block
```bash
npx wdio run wdio.conf.js --spec "./test/specs/test.e2e.js" --mochaOpts.grep "Failed login with invalid email"
```
