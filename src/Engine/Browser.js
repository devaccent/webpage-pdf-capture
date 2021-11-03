const puppeteer = require('puppeteer');

class Browser {
    browser = null;

    width = 1920;
    height = 1080;
    deviceScaleFactor = 1;
    isMobile = false;
    isLandscape = true;

    constructor(options) {
        this.initializeOptions(options);
    }

    async launch(){
        const options = {
            headless: true,
            args: [
                '--no-sandbox',
                // '--disable-setuid-sandbox'
            ],
            defaultViewport: {
                width: this.width,
                height: this.height,
                deviceScaleFactor: this.deviceScaleFactor,
                isMobile: this.isMobile,
                isLandscape: this.isLandscape,
            },
            ignoreHTTPSErrors: true,
        };

        try {
            this.browser = await puppeteer.launch(options);
            return Promise.resolve(this.browser);
        } catch (err) {
            console.log("Error launching browser");
            console.error(err);
            return Promise.reject(err);
        }
    }

    initializeOptions(options){
        if(options.width){
            this.width = options.width;
        }

        if(options.height){
            this.height = options.height;
        }

        if(options.deviceScaleFactor){
            this.deviceScaleFactor = options.deviceScaleFactor;
        }

        if(options.isMobile){
            this.isMobile = options.isMobile;
        }

        if(options.isLandscape){
            this.isLandscape = options.isLandscape;
        }
    }

    async openPage(url){
        const page = await this.browser.newPage();
        await page.goto(url, {
            waitUntil: ["domcontentloaded", "networkidle0", "networkidle2"],
        });

        return page;
    }
}

module.exports = Browser;
