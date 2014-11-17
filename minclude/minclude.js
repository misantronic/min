/**
 *
 * @param {Array} a
 * @param {Function} [b]
 * @param {String} [c]
 * @param [i] placeholder
 * @returns {Minclude}
 * @constructor
 */
Minclude = function(a, b, c, i) {

	/**
	 *
	 * @param {String} d
	 * @param [e] placeholder
	 */
	function l(d, e){
		d = c ? c +'/'+ d : d;

		with(document)
			(e=createElement('script')).src=d,
			head.appendChild(e),
			e.onload=e.onerror=function() {
				a[++i] ? l(a[i]) : b && b()
			}
	}

	l(a[i=0])
}