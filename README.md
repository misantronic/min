min
=========

Playground for my **[code golf]** projects.<br>
Coding great stuff with as few and tiny code as possible!

###**[Invasion]**
a space invader clone. invaders from outer space coming to kill your mom! (501 bytes)
```javascript
p=389;$=l=m=t=0;c=" _ ";onkeydown=function(e){(k=e.which)==39?p++:k==37?p--:!l&(l=p)};setInterval('_="<pre>";l&(l-=20)<0&&(l=0);m=(m+=20)>p?b[+new Date%6]:m;for(i=0;i<400;i++){if(i%20==0)_+="\\n";if(~b[n="indexOf"](l))b.splice(b[n](l),1),$+=5,l=0;if(~b[n](p)||p==m)p=n,b=[],c="xxx";_+=i==p?"oIo":~b[n](i)?".#.":i==m&&m?" * ":i==l&&l?" | ":c}document.body.innerHTML=_+="\\nP "+$;t+=o;for(i in b)b[i]+=t%5e3==0?20:t%2e3==0?1:t%1e3==0&&-1',o=50);for(b=[],j=2;j<136;j+=j==14||j==94?29:j==55?27:2)b.push(j)
```
[Invasion Hack] by [@aemkei] in 466 bytes

---

###**[Tron]**
destroy your friends! competitive 1on1 tron clone. (757 bytes)
```javascript
a=A=0;with(c.getContext("2d"))onkeyup=function(e){d=(k=e.which)==39?2:k==37?4:k==38?1:k==40?3:d;D=k==87?1:k==68?2:k==83?3:k==65?4:D;k==32&&X&S()},(S=function(){X=0;w=[{x:795,y:400}];d=1;W=[{x:5,y:0}];D=3;v=setInterval('c.width=c.width;p1[H="innerHTML"]=A+=z(w,d,W,"blue",0);p2[H]=a+=z(W,D,w,"red",1);if(X)clearInterval(v)',60)})(),z=function(f,g,F,B,b){h={x:f[l=f[m="length"]-1].x,y:f[l].y};beginPath();L=lineWidth=10;h.x+=g==2?L:g==4&&-L;h.y+=g==3?L:g==1&&-L;if(F[I="filter"](t=function(o){return o.x==(T=this).x&o.y==T.y},h)[m]||f[I](t,h)[m])return X=1;strokeStyle=_=createLinearGradient(0,0,800,0);for($ in _);_[$](b,"magenta");_[$](.3,"#AFD2E6");_[$](.6,"#FF1493");_[$](!b,B);for(i=f.push({x:h.x,y:h.y})-1;i--;){lineTo(f[i].x,f[i].y)};stroke();return 0}
```
*Note:* If you want to use this, be sure to have a HTML-construct like:
<pre><code>&lt;b id=&quot;p1&quot;&gt;0&lt;/b&gt;
&lt;b id=&quot;p2&quot;&gt;0&lt;/b&gt;
&lt;canvas id=&quot;c&quot; width=&quot;800&quot; height=&quot;400&quot;&gt;&lt;/canvas&gt;</code></pre>
---

###**[Hyper Hydration]**
collect underwater-bubbles to stay alive. Oxygen is runnin' low! (816 bytes)
```javascript
(function(_,o,n,T,S,a,q,x,k,p,b,e,w){for(i=0,P=r();i<24;i++){while(~w[_](P)||P==q||!P)P=r();w[i]=P}function r(){return~~(Math.random()*(e+1))}function d(){s='<pre style=border:solid;width:350px>';q<0&&(q=e);p<0&&(p=e);p>e&&(p=e-b);for(i=0;i<e;i++){if(i^0&&i%b==0)s+="\n";R=0;for(y in w)if(w[y]==i)s+="~|~",R++;s+=i==p?" > ":q==i?' o ':!R?'   ':''}document.body.innerHTML=s+"\n P: "+x+"\t\t\t\t    O2: "+~~((1-a/T)*100)+"%"}onkeyup=function(e){h=e.which;g=h==39?p+1:h==37?p-1:h==40?p+b:h==38?p-b:0;if(!~w[_](g))p=g;if(q==g)x+=5,a-=S,m(),n(k),k=o(function(){m();d()},3e3);d()};function m(){q=w[0];while(~w[_](q))q=r();d()}o(function(){a+=S;if(a>=T)n(k),onkeyup=0,a=T,d(); else {for(i in w)w[i]=w[i]-1<0?e:w[i]-1,w[i]==q&&(q--),w[i]==p&&(p--);d();}},S)})("indexOf",setInterval,clearInterval,6e4,600,0,5,0,0,0,15,255,[])
```

---

###**[Script Loader]**
dynamically load scripts (131 bytes)
```javascript
function l(a,c,f){with(document)for(;(f=createElement('script')).
src=a.shift();head.appendChild(f))f.onload=function(){c&&c(this)}}
```

---

###**[Random Range]**
generate a random integer from min to max (50 bytes)
```javascript
function r(m,M){return~~(Math.random()*(M-m+1))+m}
```

---

###**[RGB2HEX]**
convert rgb to hex (140 bytes)
```javascript
function h(n){m=Math;s="";b="0123456789ABCDEF";
d="charAt";for(i in n)c=m.max(0,m.min(n[i],255)
),s+=b[d]((c-c%16)/16)+b[d](c%16);return s}
```

[code golf]:http://en.wikipedia.org/wiki/Code_golf
[Invasion]:http://rawgit.com/misantronic/min/master/invasion/invasion.html
[Invasion Hack]:http://jsbin.com/spaceinvader
[@aemkei]:http://twitter.com/aemkei
[Hyper Hydration]:http://rawgit.com/misantronic/min/master/hyperhydration/hyperhydration.html
[Random Range]:http://github.com/misantronic/min/tree/master/randomrange
[RGB2HEX]:http://github.com/misantronic/min/tree/master/random_range
[Tron]:http://rawgit.com/misantronic/min/master/tron/tron.html
[Script Loader]:http://github.com/misantronic/min/tree/master/scriptloader