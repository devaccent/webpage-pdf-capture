import {getTemporaryPath} from './../Storage/StorageUtil';

async function takeScreenshot(targetUrl, browser) {
    const page = browser.openPage(targetUrl);
    const imagePath = getTemporaryPath();

    // @ts-ignore
    await page.screenshot({
        path: imagePath,
    });

    return imagePath;
}

module.exports = takeScreenshot;
