import Decemberlabs from '../pageobjects/decemberlabs.page.js';

describe('Austin office e2e test', () => {
	beforeEach(async () => {
		await browser.deleteCookies();
		await Decemberlabs.open();
	});

	it('Should open December Labs homepage successfully', async () => {
		const results = ['', 'About', 'Services', 'Our Work', 'Blog', 'FAQ', 'Careers', 'Get in touch'];
		await Decemberlabs.menuItems.forEach(async (elem, i) => {
			const text = await elem.getText();
			await expect(text).toBe(results[i]);
		});
		await expect(await browser.getTitle()).toContain('December Labs');
	});

	it('Should navigate to Austin webpage', async () => {
		await Decemberlabs.austinLink.click();
		await expect(await browser.getTitle()).toContain('Austin Web & App Developers');
		await expect(await browser.getUrl()).toBe('https://inhouse.decemberlabs.com/locations/austin/');
	});

	it('Should display "Schedule free consultation" popup', async () => {
		await Decemberlabs.austinLink.click();
		await Decemberlabs.scheduleCalendarOpenBtn.click();
		await expect(Decemberlabs.scheduleCalendar).toBeDisplayed();
	});

	it('Should close "Schedule free consultation" popup', async () => {
		await Decemberlabs.austinLink.click();
		await Decemberlabs.scheduleCalendarOpenBtn.click();
		await Decemberlabs.scheduleCalendarCloseBtn.click();
		await expect(Decemberlabs.scheduleCalendar).not.toBeDisplayed();
	});
});
