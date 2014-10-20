min
=========

Playground for my **[code golf]** projects.<br>
Coding great stuff with as few and tiny code as possible!

###**[Invas!on]**
invaders from outer space coming to kill your mom! (501 bytes)
<pre><code>p=389;$=l=m=t=0;c=&quot; _ &quot;;onkeydown=function(e){(k=e.which)==39?p++:k==37?p--:!l&amp;(l=p)};setInterval('_=&quot;&lt;pre&gt;&quot;;l&amp;(l-=20)&lt;0&amp;&amp;(l=0);m=(m+=20)&gt;p?b[+new Date%6]:m;for(i=0;i&lt;400;i++){if(i%20==0)_+=&quot;\\n&quot;;if(~b[n=&quot;indexOf&quot;](l))b.splice(b[n](l),1),$+=5,l=0;if(~b[n](p)||p==m)p=n,b=[],c=&quot;xxx&quot;;_+=i==p?&quot;oIo&quot;:~b[n](i)?&quot;.#.&quot;:i==m&amp;&amp;m?&quot; * &quot;:i==l&amp;&amp;l?&quot; | &quot;:c}document.body.innerHTML=_+=&quot;\\nP &quot;+$;t+=o;for(i in b)b[i]+=t%5e3==0?20:t%2e3==0?1:t%1e3==0&amp;&amp;-1',o=50);for(b=[],j=2;j&lt;136;j+=j==14||j==94?29:j==55?27:2)b.push(j)</code></pre>
[Invasion Hack] by [@aemkei] in 466 bytes

---

###**[Tron]**
destroy your friends! competitive 1on1 tron clone. (773 bytes)
<pre><code>a=A=0;with(c.getContext(&quot;2d&quot;))onkeyup=function(e){d=(k=e.which)==39?2:k==37?4:k==38?1:k==40?3:d;D=k==87?1:k==68?2:k==83?3:k==65?4:D;k==32&amp;&amp;X&amp;S()},S=function(){X=0;w=[{x:795,y:400}];d=1;W=[{x:5,y:0}];D=3;v=setInterval('c.width=c.width;p1[H=&quot;innerHTML&quot;]=(A+=z(w,d,W,&quot;blue&quot;,0));p2[H]=(a+=z(W,D,w,&quot;red&quot;,1));if(X)clearInterval(v)',60)},S(),z=function(f,g,F,B,b){t=function(o){return o.x==(T=this).x&amp;o.y==T.y};h={x:f[l=f[m=&quot;length&quot;]-1].x,y:f[l].y};beginPath();L=lineWidth=10;h.x+=g==2?L:g==4&amp;&amp;-L;h.y+=g==3?L:g==1&amp;&amp;-L;if(F[I=&quot;filter&quot;](t,h)[m]||f[I](t,h)[m])return X=1;strokeStyle=_=createLinearGradient(0,0,800,0);for($ in _);_[$](b,&quot;magenta&quot;);_[$](.3,&quot;#AFD2E6&quot;);_[$](.6,&quot;#FF1493&quot;);_[$](!b,B);for(i=f.push({x:h.x,y:h.y})-1;i--;){lineTo(f[i].x,f[i].y)}stroke();return 0}</code></pre>

---

###**[HyperHydration]**
collect underwater-bubbles to stay alive. Oxygen is runnin' low! (816 bytes)
<pre><code>a=A=0;with(c.getContext(&quot;2d&quot;))onkeyup=function(e){d=(k=e.which)==39?2:k==37?4:k==38?1:k==40?3:d;D=k==87?1:k==68?2:k==83?3:k==65?4:D;k==32&amp;&amp;X&amp;S()},S=function(){X=0;w=[{x:795,y:400}];d=1;W=[{x:5,y:0}];D=3;v=setInterval('c.width=c.width;p1[H=&quot;innerHTML&quot;]=(A+=z(w,d,W,&quot;blue&quot;,0));p2[H]=(a+=z(W,D,w,&quot;red&quot;,1));if(X)clearInterval(v)',60)},S(),z=function(f,g,F,B,b){t=function(o){return o.x==(T=this).x&amp;o.y==T.y};h={x:f[l=f[m=&quot;length&quot;]-1].x,y:f[l].y};beginPath();L=lineWidth=10;h.x+=g==2?L:g==4&amp;&amp;-L;h.y+=g==3?L:g==1&amp;&amp;-L;if(F[I=&quot;filter&quot;](t,h)[m]||f[I](t,h)[m])return X=1;strokeStyle=_=createLinearGradient(0,0,800,0);for($ in _);_[$](b,&quot;magenta&quot;);_[$](.3,&quot;#AFD2E6&quot;);_[$](.6,&quot;#FF1493&quot;);_[$](!b,B);for(i=f.push({x:h.x,y:h.y})-1;i--;){lineTo(f[i].x,f[i].y)}stroke();return 0}</code></pre>

---

###**[Script Loader]**
dynamically load scripts (131 bytes)
<pre><code>function l(a,c,f){with(document)for(;(f=createElement('script')).sr
c=a.shift();head.appendChild(f))f.onload=function(){c&&c(this)}}</code></pre>

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
[Invas!on]:http://rawgit.com/misantronic/min/master/invasion/invasion.html
[Invasion Hack]:http://jsbin.com/spaceinvader
[@aemkei]:http://twitter.com/aemkei
[HyperHydration]:http://rawgit.com/misantronic/min/master/hyperhydration/hyperhydration.html
[Random Range]:http://github.com/misantronic/min/tree/master/random_range
[RGB2HEX]:http://github.com/misantronic/min/tree/master/random_range
[Tron]:http://rawgit.com/misantronic/min/master/tron/tron.html
[Script Loader]:http://github.com/misantronic/min/tree/master/scriptLoader