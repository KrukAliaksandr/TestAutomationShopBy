expect.extend({
    eachArrayRangeCrossRange(rangeArray, floor, ceiling) {
        const resultsArray = rangeArray.map((valueRange, index) => {
            const [lowest, highest] = valueRange.length === 1 ? [valueRange[0], valueRange[0]] : valueRange;
            return {
                position: index,
                pass: (lowest >= floor && lowest <= ceiling) || (highest >= floor && highest <= ceiling),
                lowest: lowest,
                highest: highest
            };
        });
        const pass = !resultsArray.find(result => result.pass === false);
        const failArray = resultsArray.filter(result => result.pass === pass);
        if (pass) {
            return {
                message: () =>
                    `expected values to be within range ${floor} - ${ceiling}, failed array:${JSON.stringify(failArray)}`,
                pass: true,
            };
        } else {
            return {
                message: () =>
                    `expected values to be within range ${floor} - ${ceiling}. failed array:${JSON.stringify(failArray)}`,
                pass: false,
            };
        }
    },
});