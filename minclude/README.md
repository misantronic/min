### Minclude

> A tiny JavaScript-loader for modern browsers.

Minclude is a lightweight JavaScript-loader (286 bytes) making it super-easy to dynamically embed your scripts.
You simply pass an array with your scripts to `Minclude`. That's it.<br>
If you load your scripts from a CDN, you can optionally add another array with fallback-scripts.
 
#### See how it's done
 
```javascript
Minclude(
	[										// load a bunch of scripts
		'//code.jquery.com/jquery-2.1.0.js',
		'//mycdn.com/my-cool-lib.min.js'
	],
	[										// optional: set up alternatives, if the CDN is down...
		'lib/jquery-2.1.0.js',
		'src/myCoolApp.min.js'
	]
).then(function() {							// callback, when scripts are being loaded
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
However, there are [polyfills](https://github.com/jakearchibald/es6-promise) for IE available.<br>
<br>
<img src="http://i.picresize.com/images/2014/11/20/ISiqt.jpg" style="max-width: 100%">