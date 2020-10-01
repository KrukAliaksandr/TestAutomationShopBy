class Element {
	constructor(selector) {
		this.selector = selector;
	}

	async get() {
		if (!this.element) {
			this.element = await $(this.selector);
		}
		return this;
	}

	async click() {
		await this.get();
		return this.element.click();
	}

	async sendKeys(keys) {
		await this.get();
		await this.click();
		return browser.keys(keys);
	}

	async getText() {
		await this.get();
		return this.element.getText();
	}

	async scrollIntoView(scrollOptions) {
		await this.get();
		return this.element.scrollIntoView(scrollOptions);
	}

	async waitUntilDisplayed(options) {
		await this.get();
		return this.element.isDisplayed(options);
	}

	async waitUntilClickable(options) {
		await this.get();
		return this.element.isClickable(options);
	}
}

module.exports = Element;
