y=x=20;p=y*x-x/2;$=l=t=0;n="indexOf";c="...";
for(b=[],j=2;j<136;j+=2) {
	b.push(j);j==14&&(j=41)||j==55&&(j=80)||j==94&&(j=121)
}
onkeydown=function(e){(k=e.which)==39?p++:k==37?p--:!l&&(l=p)};
setInterval(function(){
	_="<pre>";if(l)(l-=y)<0&&(l=0);
	for(i=0;i<x*y;i++){
		i^0&&(i%20==0)&&(_+="\n");
		if(~b[n](l))b.splice(b[n](l),1),$+=25,l=0;
		if(~b[n](p))p=-1,b=[],c="xxx";
		_+=i==p?"oIo":~b[n](i)?" x ":i==l&&l?" | ":c
	}
	document.body.innerHTML=_+="\n.P "+$;
	for(var i=0;i<b.length;i++)b[i]+=t^0&&t%5e3==0?y:t%2e3==0?1:t%1e3==0&&(-1);
	t+=o
},o=50);