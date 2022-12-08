const getCount = require('./getCount');

describe('Vowels Count Tests', () => {
	it("should return 5 for 'abracadabra'", () => {
		expect(getCount('abracadabra')).toEqual(5);
	});
	it("should return 1 for 'test'", () => {
		expect(getCount('test')).toEqual(1);
	});
	it("should return 5 for 'mood'", () => {
		expect(getCount('mood')).toEqual(2);
	});
});
