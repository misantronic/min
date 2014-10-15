function r(
	m, // min value
	M  // max value
	) {
	return ~~ // replaces Math.floor
		(Math.random()*(M-m+1))+m;
}