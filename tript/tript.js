/**
 *
 * @param {String} t template
 * @returns {String}
 * @constructor
 */
function T(t) {
	var M = [], i = 0, r = 'replace';

	t = t[r](/<[^%/].*?>/g, function(p) {
		M[i]=p;
		return "#"+i++ +"#"
	});

	for(i= M.length;i--;)
		t = t[r](RegExp("#("+i+")#([\\s\\S]*?)<\/\\w+>", "g"), "#$1#$2#/$1#");

	//console.log(t);

	return eval("var _='';" + t
		[r](/#(\d)#(.*)#\/\1#/g, function(p, a, b) {
			return '_+="'+ M[a] + b[r](/<%(.*)%>/, '"+ ($1) +"') + M[a][r](/<(.*?) *>/, "</$1>")  +'";';
		})
		//[r](/#(\d)#(.*)/g, '_ += "$2";')
		[r](/#(\d)#/g, function(p, a) {
			return '_+="'+ M[a][r](/"/g, '\\"') +'";';
		})
		[r](/#\/(\d)#/g, function(p, b) {
			return '_+="'+ M[b][r](/<(.+) .*>/, "</$1>") +'";';
		}))
}