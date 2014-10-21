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
var html = F('#id').find('.class').html();
F('#id').find('.class').html('<a href="#">Link</a>');
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