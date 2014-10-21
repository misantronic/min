FrameWreck
=========

A lightweight JavaScript library (< 1kb) featuring CSS Selectors, DOM Manipulation and a native Event-System.

### Usage:
<pre><code>&lt;script src=&quot;https://raw.githubusercontent.com/misantronic/min/master/framewreck/fw.min.js&quot;&gt;&lt;/script&gt;</code></pre>

### CSS Selectors
<pre><code>F('#id');
F('#id').find('.class');
F('#id .class').find('a');</code></pre>

### DOM Manipulation
<pre><code>var html = F('#id').find('.class').html();
F('#id').find('.class').html('<a href="#">Link</a>');</code></pre>

### Event-System
<pre><code>F('#id').on('event', function(e) {
	console.log(e, e.detail); // output event and given parameter object
});
F('#id').trigger('event', { name: '@misantronic' } );
</code></pre>