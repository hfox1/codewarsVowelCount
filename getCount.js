const getCount = (str) => {
	return str.match(/[aeiou]/g).length;
};

module.exports = getCount;
