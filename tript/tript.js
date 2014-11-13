/**
 *
 * @param {String} t template
 * @param {String} r placeholder for replace function
 * @returns {String}
 * @constructor
 */
function T(t, r) {
	return eval("var _='';" + t[r = "replace"](/(<(\w+) *.*>.*<\/\2>)|(<\w+ *.*>)|(<\/\w+>)/g, function(p, a, b, c, d) {
		return '_+="'+ (a || c || d || "")[r](/"/g, '\\"')[r](/<%(.*)%>/, '"+ ($1) +"') +'";';
	}));
}