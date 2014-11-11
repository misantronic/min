/**
 *
 * @param {String} s Template string
 * @param {Object} [c] Context object
 * @returns {String}
 */
function tmpl(s, c) {
	var S = String.prototype,
		// map for if statements
		M = [],
		i = 0, r;

	// replace ifs with map numbers
	s = s[r = "replace"](/(?:{{#if(?: *))(.*)(?: *)}}/g, function(p, a) {
		M[i] = a;
		return '{##'+(i++)+'##}'
	});

	for(i= M.length;i--;)
		s = s[r](RegExp('{##'+i+'##}([\\s\\S]*?){{\\/if}}', 'g'), "{##"+i+"##}$1{##/"+ i +"##}");

	/**
	 * Parse object
	 * @param {Object} ctx Context object
	 * @param [s] placeholder
	 * @param [x] placeholder
	 * @returns {String}
	 */
	S.O = function(ctx, s, x) {
		// look for each-tag
		return this[r](x=/{{(?: *)(\w+)(?: *)}}([\s\S]*?){{\/(?: *)\1(?: *)}}/g, function(p, a, b) {
			s = "";
			if(ctx[a])
				// when each is found
				for(i in ctx[a])
					// replace vars
					s += b.T("ctx['"+a+"']["+i+"]", ctx),

					// if statement
					s = s.I("ctx."+a+"["+i+"].", ctx),

						// check for another each
					s.match(x) && (s = s.O(ctx[a][i]));

			return s
		});
	};

	/**
	 * Parse {{#if}} ... {{/if}, {{##if}} ... {{//if}, etc
	 * @param {String} V eval base
	 * @param {Object} ctx context to look for vars in eval
	 * @param [m] placeholder
	 * @param [v] placeholder
	 * @param [e] placeholder
	 * @returns {RegExp}
	 */
	S.I = function(V, ctx, m, v, e) {
		return this[r](/{##(\d)##}([\s\S]*){##\/\1##}/g, function(p, a, b, f) {
			a = M[+a];

			// match ! or not statement
			m = a.match(/(^!|^not) */); v = V;
			if(m) a = a.replace(m[0], ""), v = '!'+v;

			try {
				f = eval(v+a)
			} catch(e) {
				f = 0
			}

			return b.match(e = /{{(#+)else}}[\s\S]*/)
				? b[r](f ? e : /[\s\S]*\{{(#+)else}}/, '')
				: f ? b : ''
		});
	};

	/**
	 * Parse tags ({{abc}}), also look for helper functions
	 * @param {String} V eval base
	 * @param {Object} ctx context to look for vars in eval
	 * @param [t] placeholder
	 * @returns {RegExp}
	 */
	S.T = function(V, ctx, t) {
		return this[r](/{+\{ *([A-Za-z0-9_.]+)}}+/g, function(p, $1, f) {
			try {
				f = eval(!V.big || $1.match(t=/\./g) ? V+"['"+$1.replace(t, "']['")+"']" : V)
			} catch(e) {}

			// return string or object or tag itself, if the value is not a string
			f = f ? f.big ? f : typeof f[$1] != "string" ? p : f[$1] : '';

			// if set, escape {{{ }}} tags
			return p[2] == '{' ? new Option(f).innerHTML : f
		})
	};

	return s
		// each
		.O(c, 1)
		// vars at level 0
		.T("ctx", c)
		// if's at level 0
		.I("ctx.", c)
		// remove whitespace
		.trim()
}