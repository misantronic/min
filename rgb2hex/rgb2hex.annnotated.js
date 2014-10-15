function h(
	n  // array containing r, b, c
	){
	m=Math; 					// placeholder for Math
	s="";						// string which will be returned
	b="0123456789ABCDEF";		// string template containing all HEX-digits
	d="charAt";					// function return character from string
	for(i in n)					// iterate n
		c						// placeholder for the current rgb-character
			= m.max(			// get max value from
				0,  			// 0 to
				m.min(			// min value from
					n[i],		// rgb-character
					255)		// to 255
		)
		, 						// concat statements to spare curly brakets
		s+=
			b[d]((c-c%16)/16)+	// use charAt to get first HEX-Character
			b[d](c%16);			// use charAt to get second HEX-Character
	return s
}