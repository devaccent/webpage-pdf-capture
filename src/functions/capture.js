const Browser = require("../Engine/Browser");
const generatePdf = require("../Engine/Capture/PDFCapture");

async function handler(event) {
    const options = event || {};
    const {pageUrl, storageOptions = {}} = options;

    const browser = await getBrowserInstance(event);

    //TODO: Add ability to generate PNG or PDF based on event
    return await generatePdf(pageUrl, browser);
}

async function getBrowserInstance(event){
    const options = event || {};
    const {browserOptions = {}} = options;

    const browser = new Browser(browserOptions);
    await browser.launch();

    return browser;
}

module.exports = handler;
