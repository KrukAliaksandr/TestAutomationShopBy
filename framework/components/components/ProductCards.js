const ComponentCollection = require("./ComponentCollection");

class ProductCards extends ComponentCollection {
	constructor(selector = ".ModelList__ModelBlockRow") {
		super(selector);
		this.nameBlock = {
			type: "Element",
			selector: ".ModelList__NameBloc"
		};
		this.priceBlock = {
			type: "Element",
			selector: ".ModelList__PriceBlock"
		};
	}

}

module.exports = ProductCards;