min
=========

Playground for my **[code golf]** projects.<br>
Coding great stuff with as few and tiny code as possible!

###**[Invasion]**
a space invader clone. invaders from outer space coming to kill your mom! (501 bytes)
<pre><code>p=389;$=l=m=t=0;c=&quot; _ &quot;;onkeydown=function(e){(k=e.which)==39?p++:k==37?p--:!l&amp;(l=p)};setInterval('_=&quot;&lt;pre&gt;&quot;;l&amp;(l-=20)&lt;0&amp;&amp;(l=0);m=(m+=20)&gt;p?b[+new Date%6]:m;for(i=0;i&lt;400;i++){if(i%20==0)_+=&quot;\\n&quot;;if(~b[n=&quot;indexOf&quot;](l))b.splice(b[n](l),1),$+=5,l=0;if(~b[n](p)||p==m)p=n,b=[],c=&quot;xxx&quot;;_+=i==p?&quot;oIo&quot;:~b[n](i)?&quot;.#.&quot;:i==m&amp;&amp;m?&quot; * &quot;:i==l&amp;&amp;l?&quot; | &quot;:c}document.body.innerHTML=_+=&quot;\\nP &quot;+$;t+=o;for(i in b)b[i]+=t%5e3==0?20:t%2e3==0?1:t%1e3==0&amp;&amp;-1',o=50);for(b=[],j=2;j&lt;136;j+=j==14||j==94?29:j==55?27:2)b.push(j)</code></pre>
[Invasion Hack] by [@aemkei] in 466 bytes

---

###**[Tron]**
destroy your friends! competitive 1on1 tron clone. (757 bytes)
<pre><code>a=A=0;with(c.getContext(&quot;2d&quot;))onkeyup=function(e){d=(k=e.which)==39?2:k==37?4:k==38?1:k==40?3:d;D=k==87?1:k==68?2:k==83?3:k==65?4:D;k==32&amp;&amp;X&amp;S()},(S=function(){X=0;w=[{x:795,y:400}];d=1;W=[{x:5,y:0}];D=3;v=setInterval('c.width=c.width;p1[H=&quot;innerHTML&quot;]=A+=z(w,d,W,&quot;blue&quot;,0);p2[H]=a+=z(W,D,w,&quot;red&quot;,1);if(X)clearInterval(v)',60)})(),z=function(f,g,F,B,b){h={x:f[l=f[m=&quot;length&quot;]-1].x,y:f[l].y};beginPath();L=lineWidth=10;h.x+=g==2?L:g==4&amp;&amp;-L;h.y+=g==3?L:g==1&amp;&amp;-L;if(F[I=&quot;filter&quot;](t=function(o){return o.x==(T=this).x&amp;o.y==T.y},h)[m]||f[I](t,h)[m])return X=1;strokeStyle=_=createLinearGradient(0,0,800,0);for($ in _);_[$](b,&quot;magenta&quot;);_[$](.3,&quot;#AFD2E6&quot;);_[$](.6,&quot;#FF1493&quot;);_[$](!b,B);for(i=f.push({x:h.x,y:h.y})-1;i--;){lineTo(f[i].x,f[i].y)};stroke();return 0}</code></pre>
*Note:* If you want to use this, be sure to have a HTML-construct like:
<pre><code>&lt;b id=&quot;p1&quot;&gt;0&lt;/b&gt;
&lt;b id=&quot;p2&quot;&gt;0&lt;/b&gt;
&lt;canvas id=&quot;c&quot; width=&quot;800&quot; height=&quot;400&quot;&gt;&lt;/canvas&gt;</code></pre>
---

###**[Hyper Hydration]**
collect underwater-bubbles to stay alive. Oxygen is runnin' low! (816 bytes)
<pre><code>(function(_,o,n,T,S,a,q,x,k,p,b,e,w){for(i=0,P=r();i&lt;24;i++){while(~w[_](P)||P==q||!P)P=r();w[i]=P}function r(){return~~(Math.random()*(e+1))}function d(){s='&lt;pre style=border:solid;width:350px&gt;';q&lt;0&amp;&amp;(q=e);p&lt;0&amp;&amp;(p=e);p&gt;e&amp;&amp;(p=e-b);for(i=0;i&lt;e;i++){if(i^0&amp;&amp;i%b==0)s+=&quot;\n&quot;;R=0;for(y in w)if(w[y]==i)s+=&quot;~|~&quot;,R++;s+=i==p?&quot; &gt; &quot;:q==i?' o ':!R?'   ':''}document.body.innerHTML=s+&quot;\n P: &quot;+x+&quot;\t\t\t\t    O2: &quot;+~~((1-a/T)*100)+&quot;%&quot;}onkeyup=function(e){h=e.which;g=h==39?p+1:h==37?p-1:h==40?p+b:h==38?p-b:0;if(!~w[_](g))p=g;if(q==g)x+=5,a-=S,m(),n(k),k=o(function(){m();d()},3e3);d()};function m(){q=w[0];while(~w[_](q))q=r();d()}o(function(){a+=S;if(a&gt;=T)n(k),onkeyup=0,a=T,d(); else {for(i in w)w[i]=w[i]-1&lt;0?e:w[i]-1,w[i]==q&amp;&amp;(q--),w[i]==p&amp;&amp;(p--);d();}},S)})(&quot;indexOf&quot;,setInterval,clearInterval,6e4,600,0,5,0,0,0,15,255,[])</code></pre>

---

###**[Script Loader]**
dynamically load scripts (131 bytes)
<pre><code>function l(a,c,f){with(document)for(;(f=createElement('script')).
src=a.shift();head.appendChild(f))f.onload=function(){c&&c(this)}}</code></pre>

---

###**[Random Range]**
generate a random integer from min to max (50 bytes)
<pre>function r(m,M){return~~(Math.random()*(M-m+1))+m}</pre>

---

###**[RGB2HEX]**
convert rgb to hex (140 bytes)
<pre><code>function h(n){m=Math;s="";b="0123456789ABCDEF";
d="charAt";for(i in n)c=m.max(0,m.min(n[i],255)
),s+=b[d]((c-c%16)/16)+b[d](c%16);return s}</code></pre>

[code golf]:http://en.wikipedia.org/wiki/Code_golf
[Invasion]:http://rawgit.com/misantronic/min/master/invasion/invasion.html
[Invasion Hack]:http://jsbin.com/spaceinvader
[@aemkei]:http://twitter.com/aemkei
[Hyper Hydration]:http://rawgit.com/misantronic/min/master/hyperhydration/hyperhydration.html
[Random Range]:http://github.com/misantronic/min/tree/master/random_range
[RGB2HEX]:http://github.com/misantronic/min/tree/master/random_range
[Tron]:http://rawgit.com/misantronic/min/master/tron/tron.html
[Script Loader]:http://github.com/misantronic/min/tree/master/scriptLoader