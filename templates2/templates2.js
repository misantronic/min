String.prototype.tpl = function() {
	var M = [], i = 0, t, r = 'replace';

	t = this[r](/<[^%/].*?>/g, function(p) {
		M[i]=p;
		return "{#"+i++ +"#}"
	});

	for(i= M.length;i--;)
		t = t[r](RegExp("{#"+i+"#}([\\s\\S]*?)<\/(\\w+)>", "g"), "{#"+i+"#}$1{#/"+ i +"#}");

	console.log(t);

	return eval("var _ = '';" + t
		[r](/{#(\d)#}(.*){#\/\1#}/g, function(p, $1, $2) {
			return '_ += "'+ M[$1] + $2[r](/<%(.*)%>/, '"+ $1 +"') + M[$1][r](/<(.*?) *>/, "</$1>")  +'";';
		})
		[r](/{#(\d)#}(.*)/g, function(p, $1, $2) {
			return '_ += "'+ $2 +'";';
		})
		[r](/{#(\d)#}/g, function(p, $1) {
			return '_ += "'+ M[$1][r](/"/g, '\\"') +'";';
		})
		[r](/{#\/(\d)#}/g, function(p, $2) {
			return '_ += "'+ M[$2][r](/<(.+) .*>/, "</$1>")  +'";';
		}))
};