F=function(c){
	var _=this					// this context
		,x						// the context selected by querySelector
		,l						// length of x
		,i						// placeholder counter1
		,j						// placeholder counter2
		,a						// placeholder array
		,e						// placeholder element
		,m="length"				// placeholder length
		,q="querySelectorAll"	// placeholder querySelectorAll
		,h="innerHTML"			// placeholder innerHTML
		,d=document				// placeholder document
		,g;						// placeholder generic

	if(_.__proto__.constructor!=F)return new F(c);

	/**
	 * Set or return html content of context
	 * @param {*} [v] value
	 * @returns {F|string}
	 */
	_.html=function(v){
		a=[];
		for(i=0;i<l;i++)
			e=x[i],
			a.push(e[h]),
			v&&(e[h]=v);
		return v&&this||a.join("").replace(/\s/g,"")
	};

	/**
	 * Iterate over context, call f for each item
	 * Note: Iteration is inverse
	 * @param {Function} f
	 * @returns {F}
	 */
	_.each=function(f){
		for(i=l;i--;)f(_[i],i);
		return this
	};

	/**
	 * Reset keys inside this object and recount length
	 */
	_.y=function(){
		for(i=99;i--;)delete _[i];	// clean up objects indicies
		for(i in x)_[i]=x[i];		// assign new indicies
		_[m]=l=x[m]					// set .length and internal placeholder l
	};

	/**
	 * Find selector s in context
	 * @param {String} s
	 * @returns {F}
	 */
	_.find=function(s){
		a=[];
		if(!x)a=d[q](s);
		else for(i=l;i--;)a[i]=x[i][q](s);

		x=[];
		for(i=0;i<a[m];i++)
			if(a[i][m])
				for(j=0;j<a[i][m];j++)
					x.push(a[i][j]);
			else x.push(a[i]);

		_.y();

		return this
	};

	/**
	 * Get element at index g from context
	 * @param {Number} g index
	 * @returns {F}
	 */
	_.get=function(g){
		x=[x[g]];
		_.y();

		return this
	};

	/**
	 * Move selector around in the context
	 * or insert HTML/Text
	 * Note: selector s will always appended
	 * to the first element in context
	 * @param {String} s selector or HTML/Text
	 */
	_.append=function(s){
		g=s.match(/^</)?0:d[q](s)[0];
		for(i=l;i--;)
			g?g.appendChild(x[i]):x[i].innerHTML+=s;

		return this
	};
	_.appendTo=_.append;

	/**
	 * Get direct children of the context
	 * @returns {F}
	 */
	//_.children=function(){
	//	x=x[0].children;
	//	_.y();
	//	return this
	//};

	/**
	 * Get direct parent of the context
	 * @returns {F}
	 */
	//_.parent=function(){
	//	x=[x[0].parentNode];
	//	_.y();
	//	return this
	//};

	/**
	 * Attach event listener
	 * @param {String} v eventname
	 * @param {Function} m callback
	 * @returns {F}
	 */
	_.on=function(v,m){
		for(i=l;i--;)x[i].addEventListener(v,m);

		return this
	};

	/**
	 * Remove event listener
	 * @param {String} v eventname
	 * @param {Function} m callback
	 * @returns {F}
	 */
	_.off=function(v,m){
		for(i=l;i--;)x[i].removeEventListener(v,m);

		return this
	};

	/**
	 * Fire event listener
	 * @param {String} v eventname
	 * @param {*} [D] data
	 * @returns {F}
	 */
	_.fire=function(v,D){
		for(i=l;i--;)x[i].dispatchEvent(new CustomEvent(v,{detail:D}));

		return this
	};

	/**
	 * AJAX Call
	 * @param M method - get/post
	 * @param u url
	 * @param [g] callback if passed -> asych call
	 * @param [d] post_data
	 * @param X
	 */
	_.ajax=function(M,u,g,d,X){
		with(X=new XMLHttpRequest)
			return onreadystatechange=function(){
				readyState^4||g(this)
			},
			open(M,u,g),send(d),
			X
	};

	// select context
	_.find(c);

	return this
};