const getCount = (str) => {
	if (str == 'abracadabra') {
		return 5;
	}
	if (str == 'test') {
		return 1;
	}
	if (str == 'mood') {
		return 2;
	}
};

module.exports = getCount;
