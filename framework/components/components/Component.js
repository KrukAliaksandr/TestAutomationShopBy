const Element = require("../wrappers/Element");
const Collection = require("../wrappers/Collection");

class Component {

	constructor(selector) {
		this.selector = selector;
		this.children = new Map();
	}

	async get() {
		if (!this.element) {
			this.element = await $(this.selector);
		}
		return this;
	}

	async scrollIntoView(params) {
		await this.get();
		return this.element.scrollIntoView(params);
	}

	async getChild(childName) {
		return this[childName[0]]["type"] === "Collection" ?
			new Collection(`${this.selector} ${this[childName[0]].selector}`) :
			new Element(`${this.selector} ${this[childName[0]].selector}`);
	}

	async waitUntilDisplayed(options) {
		await this.get();
		return this.element.isDisplayed(options);
	}
}

module.exports = Component;
