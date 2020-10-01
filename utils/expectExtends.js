expect.extend({
	eachArrayRangeCrossRange(rangeArray, floor, ceiling) {
		const resultsArray = rangeArray.map((valueRange, index) => {
			const [lowest, highest] = valueRange.length === 1 ? [valueRange[0],valueRange[0]] : valueRange;
			return {
				pass: (lowest >= floor && lowest <= ceiling) || (highest >= floor && highest <= ceiling),
				lowest: lowest,
				highest: highest,
				position: index
			};
		});
		const pass = !resultsArray.find(result => result.pass === false);
		if (pass) {
			return {
				message: () =>
					`expected values to be within range ${floor} - ${ceiling}, actual values array:${JSON.stringify(resultsArray)}`,
				pass: true,
			};
		} else {
			return {
				message: () =>
					`expected values to be within range ${floor} - ${ceiling}, actual values array:${JSON.stringify(resultsArray)}`,
				pass: false,
			};
		}
	},
});