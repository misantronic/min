/**
 *
 * @param {Array|String} a Array or String containing the URL/Path to scripts
 * @param {Array|String} [c] Alternative Array or String containing the URL/Path to scripts
 * @param [i] placeholder
 * @returns {Promise}
 * @constructor
 */
Minclude = function(a, c, i) {
	if(a.big) a = [a];
	if(c.big) c = [c];
	return new Promise(
		function(r) {
			/**
			 *
			 * @param {String} d
			 * @param [e] placeholder
			 */
			function l(d, e){
				with(document)
					(e=createElement('script')).src = ((c ? c +'/'+ d : d) + ".js").replace(/https*:/, ""),
					head.appendChild(e),
					e.onload=e.onerror=function() {
						a[++i] ? l(a[i]) : r()
					}
			}

			l(a[i=0])
		}
	)
}