import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DecemberLabs extends Page {
	/**
	 * define selectors using getter methods
	 */
	get menuItems() {
		return $$('#menu-header-main-menu > li > a ');
	}

	get austinLink() {
		return $$('a.city')[0];
	}

	get scheduleCalendarOpenBtn() {
		return $('//*[contains(text(), "Schedule free consultation")]');
	}

	get scheduleCalendar() {
		return $('.dl-modal.calendar-modal');
	}

	get scheduleCalendarCloseBtn() {
		return $('.btn-close-modal');
	}

	open() {
		return super.open('/');
	}
}

export default new DecemberLabs();
