/**
 *
 * @param {String} s Template string
 * @param {Object} [c] Context object
 * @returns {String}
 */
function T(s, c) {
	var S = String.prototype,
		// map for if statements
		M = [],
		i = 0, r;

	// replace ifs with map numbers
	s = s[r = "replace"](/\{#if *(.*?) *}/g, function(p, a) {
		M[i] = a;
		return '{#'+i++ +'#}'
	});

	for(i= M.length;i--;)
		s = s[r](RegExp('{#'+i+'#}([\\s\\S]*?){#\\/if}', 'g'), "{#"+i+"#}$1{#/"+ i +"#}");

	/**
	 * Parse object
	 * @param {Object} c Context object
	 * @param [s] placeholder
	 * @param [x] placeholder
	 * @returns {String}
	 */
	S.O = function(c, s, x) {
		// look for each-tag
		return this[r](x=/{(?: *)(\w+)(?: *)}([\s\S]*?){\/(?: *)\1(?: *)}/g, function(p, a, b) {
			s = "";
			if(c[a])
				// when each is found
				for(i in c[a])
					// replace vars
					s += b.T("c['"+a+"']["+i+"]", c),

					// if statement
					s = s.I("c."+a+"["+i+"].", c),

						// check for another each
					s.match(x) && (s = s.O(c[a][i]));

			return s
		});
	};

	/**
	 * Parse {#if} ... {#else} ... {/if}
	 * @param {String} V eval base
	 * @param {Object} c context to look for vars in eval
	 * @param [m] placeholder
	 * @param [v] placeholder
	 * @param [e] placeholder
	 * @returns {RegExp}
	 */
	S.I = function(V, c, m, v, e) {
		return this[r](/{#(\d)#}([\s\S]*){#\/\1#}/g, function(p, a, b, f) {
			a = M[+a];

			// match ! or not statement
			m = a.match(/(^!|^not) */); v = V;
			if(m) a = a.replace(m[0], ""), v = '!'+v;

			try {
				f = eval(v+a)
			} catch(e) {
				f = 0
			}

			return b.match(e = /{#else}[\s\S]*/)
				? b[r](f ? e : /[\s\S]*\{#else}/, '')
				: f ? b : ''
		});
	};

	/**
	 * Parse tags {abc}
	 * @param {String} V eval base
	 * @param {Object} c context to look for vars in eval
	 * @param [t] placeholder
	 * @returns {RegExp}
	 */
	S.T = function(V, c, t) {
		return this[r](/{+ *([A-Za-z0-9_.]+)}+/g, function(p, $1, f) {
			try {
				f = eval(!V.big || $1.match(t=/\./g) ? V+"['"+$1.replace(t, "']['")+"']" : V)
			} catch(e) {}

			// return string or object or tag itself, if the value is not a string
			f = f ? f.big ? f : typeof f[$1] != "string" ? p : f[$1] : '';

			// if set, escape {{{ }}} tags
			return p[1] == '{' ? new Option(f).innerHTML : f
		})
	};

	return s
		// each
		.O(c, 1)
		// vars at level 0
		.T("c", c)
		// if's at level 0
		.I("c.", c)
}