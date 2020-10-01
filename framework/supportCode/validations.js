const {getPageChild} = require("./actions");
const {validateProductNames, getPriceValues} = require("./helpers/textFunctions");

const validatePricesOnNotebooksPage = async (priceFloor, priceCeiling) => {
	const elementCollection = await getPageChild("productCards > priceBlock");
	const elementTexts = await elementCollection.getText();
	return getPriceValues(elementTexts);
};

const validateNamesOnNotebooksPage = async searchFilter => {
	const elementCollection = await getPageChild("productCards > nameBlock");
	const elementTexts = await elementCollection.getText();
	return validateProductNames(elementTexts, searchFilter);

};

module.exports = {
	validatePricesOnNotebooksPage,
	validateNamesOnNotebooksPage
};