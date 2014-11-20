### Minclude

> A tiny fileloader for modern browsers.

Minclude is a lightweight fileloader (286 bytes) making it super-easy to dynamically embed your scripts.
You simply pass an array with your scripts and optionally another array with fallback-scripts to `Minclude`. That's it.
 
#### See how it's done
 
```javascript
Minclude(
	[										// load a bunch of scripts
		'//code.jquery.com/jquery-2.1.0.js',
		'//mycdn.com/my-cool-lib.min.js'
	],
	[										// set up alternatives, if the CDN is down etc.
		'lib/jquery-2.1.0.js',
		'src/myCoolApp.min.js'
	]
).then(function() {							// callback
	// entry point
	myCoolApp.init();
});
```

or you might just pass a string:

```javascript
Minclude( '//code.jquery.com/jquery-2.1.0.js', 'lib/jquery-2.1.0.js' );
```

#### Cross-browser

Minclude is optimized for modern browsers who natively support [Promises](http://caniuse.com/#feat=promises).<br>
However, there are [polyfills](https://github.com/jakearchibald/es6-promise) for IE available.