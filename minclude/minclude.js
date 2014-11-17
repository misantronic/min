/**
 *
 * @param {Array|String} a array or string containing script(s)
 * @param {String} [c] base url / path
 * @param {Array|String} [d] alternative paths
 * @param [i] placeholder
 * @returns {Minclude}
 * @constructor
 */
Minclude = function(a, c, d, i) {
	if(a.big) a = [a];
	if(d.big) d = [d];

	return new Promise(
		function(r) {
			i = 0;
			/**
			 *
			 * @param {String} d
			 * @param [e] placeholder
			 */
			!function l(g, e){
				with(document)
					(e=createElement('script')).src = ((c && g === a ? c +'/'+ g[i] : g[i]) + ".js").replace(/https*:/, ""),
					head.appendChild(e),
					e.onload=e.onerror=function(e) {
						e.type == 'error' && d[i] ? l(d) : a[++i] ? l(a, i) : r()
					}
			}(a)
		}
	)
}