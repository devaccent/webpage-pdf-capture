const generatePdf = async (targetUrl, browser) => {
	const page = await browser.openPage(targetUrl);
	return await page.pdf({format: 'A4', printBackground: true});
};

module.exports = generatePdf;
