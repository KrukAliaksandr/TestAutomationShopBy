const {Then} = require("cucumber");
const {validatePriceRange, validateProductNames} = require("../supportCode/actions");
const {getCurrentPage} = require("../supportCode/browserActions");
const {validatePricesOnNotebooksPage, validateNamesOnNotebooksPage} = require("../supportCode/validations");

Then(/^All prices of products should be in range from (\d+) to (\d+)$/, async function (priceFloor, priceCeiling) {
	this.info(`All prices of products should be in range from ${priceFloor} to ${priceCeiling}`);
	const parsedPrices = await validatePricesOnNotebooksPage(priceFloor, priceCeiling);
	expect(parsedPrices).eachArrayRangeCrossRange(priceFloor, priceCeiling);
});

Then(/^All products should contain "([^"]+)" in title$/, async function (string) {
	this.info(`All products should contain ${string} in title`);
	const rangeComparisonArray = await validateNamesOnNotebooksPage(string);
	expect(rangeComparisonArray).not.toContain(false);
});



