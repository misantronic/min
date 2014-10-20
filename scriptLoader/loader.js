function l(
	a,	// array containg url to scripts
	c	// optional callback
	){
	with(document)											// set document context
		for(												// parse through array
			;(f=createElement('script')).src = a.shift()	// - create script element by shifting the array
			;head.appendChild(f))							// - append to head
			f.onload=function(){							// - when script is loaded...
				c&&c(this)									// - ... when set, invoke callback
			}
}