const getCount = (str) => {
	return str.match(/[aeiou]/g) ? str.match(/[aeiou]/g).length : 0;
};

module.exports = getCount;
