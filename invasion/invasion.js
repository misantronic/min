p=389;$=l=m=t=0;c=" _ ";
onkeydown=function(e){(k=e.which)==39?p++:k==37?p--:!l&(l=p)};
setInterval('_="<pre>";l&(l-=20)<0&&(l=0);\
	m=(m+=20)>p?b[+new Date%6]:m;\
	for(i=0;i<400;i++){\
		if(i%20==0)_+="\\n";\
		if(~b[n="indexOf"](l))b.splice(b[n](l),1),$+=5,l=0;\
		if(~b[n](p)||p==m)p=n,b=[],c="xxx";\
		_+=i==p?"oIo":~b[n](i)?".#.":i==m&&m?" * ":i==l&&l?" | ":c\
	}\
	document.body.innerHTML=_+="\\nP "+$;\
	t+=o;\
	for(i in b)b[i]+=t%5e3==0?20:t%2e3==0?1:t%1e3==0&&-1\
',o=50);
for(b=[],j=2;j<136;j+=2)b.push(j),j==14&&(j=41)||j==55&&(j=80)||j==94&&(j=121)