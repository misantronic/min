/**
 *
 * @param {String} t template
 * @param {Object} [c] context
 * @param {String} [r] placeholder for replace function
 * @returns {String}
 * @constructor
 */
function T(t, c, r) {
	return eval("with(c){var _='';" + t[r = "replace"](/(<(\w+) *.*>.*<\/\2>)|(<\w+ *.*>)|(<\/\w+>)/g, function(p, a, b, c, d) {
		return '_+="'+ (a || c || d || "")[r](/"/g, '\\"')[r](/<%(.*?)%>/g, '"+($1)+"') +'";';
	}) + "}");
}