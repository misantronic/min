/**
 *
 * @param {Array|String} a Array or String containing the URL/Path to scripts
 * @param {Array|String} [b] Alternative Array or String containing the URL/Path to scripts
 * @param [i] placeholder
 * @returns {Promise}
 * @constructor
 */
Minclude = function(a, b, i) {
	if(a.big) a = [a];
	if(b.big) b = [b];
	return new Promise(
		function(r) {
			/**
			 *
			 * @param {String} c
			 * @param [d] placeholder
			 */
			function l(c, d){
				with(document)
					(d=createElement('script')).src = c.replace(/https*:/, ""),
					head.appendChild(d),
					d.onload=d.onerror=function(e) {
						e.type == 'error' && b[i] ? l(b[i]) : a[++i] ? l(a[i]) : r()
					}
			}

			l(a[i=0])
		}
	)
}