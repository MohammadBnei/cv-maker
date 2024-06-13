// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import puppeteer, { Page } from 'puppeteer';
// import fs from 'fs';
const url = process.argv[1] || 'https://cv.bnei.dev';
const path = process.argv[2] || './gen';

const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
	// Launch the browser and open a new blank page
	const browser = await puppeteer.launch({
		headless: 'new',
		args: ['--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage', '--disable-setuid-sandbox']
	});

	await Promise.all([
		saveToPdf(await browser.newPage(), { en: true, full: false }),
		saveToPdf(await browser.newPage(), { en: false, full: false }),
		saveToPdf(await browser.newPage(), { en: true, full: true }),
		saveToPdf(await browser.newPage(), { en: false, full: true }),
		saveToMhtml(await browser.newPage(), { en: true, full: false }),
		saveToMhtml(await browser.newPage(), { en: false, full: false }),
		saveToMhtml(await browser.newPage(), { en: true, full: true }),
		saveToMhtml(await browser.newPage(), { en: false, full: true })
	]);

	console.log('Created PDFs and MHTMLs!');

	await browser.close();
})();

/**
 * Saves the current page as a PDF.
 *
 * @param {Page} page - The page to save as a PDF.
 * @param {en: boolean; full: boolean} en - Whether to save the PDF in English/French, and to get the full experiences version or no.
 * @return {Promise<void>} - A promise that resolves when the PDF is saved.
 */
const saveToPdf = async (page, { en, full } = { en: false, full: false }) => {
	await page.goto(`${url}/${en ? 'en' : ''}?snapshot${full ? '&full' : ''}`);
	const fileName = path + '/' + (en ? 'cv-en' : 'cv') + (full ? '-full' : '') + '.pdf';
	await page.pdf({
		path: fileName,
		format: 'A4',
		pageRanges: '1',
		printBackground: true
	});
};

/**
 * Saves the current page as an MHTML file.
 *
 * @param {Page} page - The page to save as MHTML.
 * @param {en: boolean; full: boolean} en - Whether to save the PDF in English/French, and to get the full experiences version or no.
 * @return {Promise<void>} - A promise that resolves when the save is complete.
 */
const saveToMhtml = async (page, { en, full } = { en: false, full: false }) => {
	await page.goto(`${url}/${en ? 'en' : ''}?snapshot${full ? '&full' : ''}`);
	const session = await page.target().createCDPSession();
	await session.send('Page.enable');
	const { data } = await session.send('Page.captureSnapshot', { format: 'mhtml' });
	const fileName = path + '/' + (en ? 'cv-en' : 'cv') + (full ? '-full' : '') + '.mhtml';
	await fs.writeFile(fileName, data, 'utf8', (err) => {
		if (err) console.error({ err });
	});
};
