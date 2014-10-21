FrameWreck
=========

A lightweight JavaScript library (< 1kb) featuring CSS Selectors, DOM Manipulation and a native Event-System.

### Usage:
```javascript
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
F('#id').find('.class').html('&lt;a href="#"&gt;Link&lt;/a&gt;');
```

### Event-System
```javascript
F('#id').on('event', function(e) {
	console.log(e, e.detail); // output event and given parameter object
});
F('#id').trigger('event', { name: '@misantronic' } );
```