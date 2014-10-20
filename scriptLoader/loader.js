function l(
	a,	// array containg url to scripts and css-files
	c	// callback
	){
	with(document)									// set document context
		i=0,										// set counter i to 0
		!function k(){								// self-invoking function to load a script
			head.appendChild						// append to head
					(f=createElement('script'))		// create script element f...
				.src=a[i++];						// ... and assign the source url
			f.onload=								// when the script is loaded
				function(){
					a[i]?k():c()					// look for next script in array, else call callback function
				}
		}()
}