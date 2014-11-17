/**
 *
 * @param {Array} a
 * @param {String} [c]
 * @param [i] placeholder
 * @returns {Minclude}
 * @constructor
 */
Minclude = function(a, c, i) {
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