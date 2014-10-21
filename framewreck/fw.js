F=function(c){
	var _=this			// placeholder for this context
		,x				// the context selected by querySelector
		,l				// length of x
		,i				// placeholder for a counter
		,j				// placeholder for a counter
		,a				// placeholder for an array
		,e				// placeholder for an element
		,m				// placeholder
		,q				// placeholder for the querySelector
		,h="innerHTML";	// placeholder for innerHTML

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
			v&&(e[h] = v);
		return v&&this||a.join("").replace(/\s/g, "")
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
	_.y=function() {
		for(i in x)_[i]=x[i];
		l=x[m]
	};

	/**
	 * Find selector s in context
	 * @param {String} s
	 * @returns {F}
	 */
	_.find=function(s){
		a=[];
		if(!x)a=document[q="querySelectorAll"](s);
		else for(i=l;i--;)a[i]=x[i][q](s);

		x=[];
		for(i=a[m="length"];i--;)
			if(a[i][m])
				for(j=a[i][m];j--;)
					x.push(a[i][j]);
			else x.push(a[i]);

		_.y();

		return this
	};

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
	 * @param {*} [d] data
	 * @returns {F}
	 */
	_.fire=function(v,d){
		for(i=l;i--;)x[i].dispatchEvent(new CustomEvent(v,{detail: d}));

		return this
	};

	// select context
	_.find(c);

	return this
};