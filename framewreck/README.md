FrameWreck
=========

A lightweight JavaScript library (~ 750 b) featuring CSS Selectors, DOM Manipulation, AJAX and a native Event-System.

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

// Append HTML/Text to a DOM-Element
F('#id').append('<a href="#">Link</a>');

// Move an existing DOM-Element to another
F('#id-2').appendTo('.class-1');
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

### AJAX
```javascript
F().ajax('get', 'http://server.com/api?id=1337', function(e){ console.log(e.responseText) });
F().ajax('post', 'http://server.com', function(e){ console.log(e.responseText) }, { name: '@misantronic' });
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

---

[fw.packed.js] crushed with [RegPack]<br>
Configuration: No Math-Packing, all checkboxes off except "Reassign variable names except: F x l i j a e m q h d g"

[fw.packed.js]:https://github.com/misantronic/min/blob/master/framewreck/fw.packed.js
[RegPack]:http://siorki.github.io/regPack.html