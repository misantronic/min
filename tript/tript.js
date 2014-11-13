/**
 * Tript template Engine
 * @param {String} t template
 * @param {Object} [c] context
 * @param {String} [r] placeholder for replace function
 * @returns {String}
 * @constructor
 */
function T(t, c, r) {
	return eval(
		// set context
		"with(c||{}){var _='';" +
		// match html-tags
		t[r = "replace"](/(<(\w+) *.*>.*<\/\2>)|(<\w+ *.*>)|(<\/\w+>)/g, function(p, a, b, c, d) {
			return '_+="'+
				(a || c || d)
					// replace quotes
					[r](/"/g, '\\"')
					// inline javascript
					[r](/<%(.*?)%>/g, '"+($1)+"') +'";';
	}) + "}");
}