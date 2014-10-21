FrameWreck
=========

A lightweight JavaScript library (< 1kb) featuring CSS Selectors, DOM Manipulation and a native Event-System.

### Usage:
```html
<script src="https://raw.githubusercontent.com/misantronic/min/master/framewreck/fw.min.js"></script>
```

### CSS Selectors
```javascript
F('#id');
F('#id').find('.class');
F('#id .class').find('a');
```

### DOM Manipulation
```javascript
// Output HTML of a selector
var html = F('#id').find('.class').html();

// Set HTML of a selector
F('#id').find('.class').html('<a href="#">Link</a>');

// Insert/Append HTML/Text to a DOM-Element
F('#id').insert('<a href="#">Link</a>');

// Move an existing DOM-Element to another
F('#id-2').insert('.class-1');
```

### Event-System
```javascript
var eventHandler = function(e) {
	console.log(e, e.detail); // output event and given parameter object
};

F('#id').on('event', eventHandler);
F('#id').trigger('event', { name: '@misantronic' } );
F('#id').off('event', eventHandler);
```

### Chaining
```javascript
F('#id')
	.find('.class')
	.html('test')
	.on('event', eventHandler)
	.trigger('event', { name: '@misantronic' } )
	.off('event', eventHandler);
```