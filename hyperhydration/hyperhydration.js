(function(_,o,n,T,S,a,q,x,k,p,b,e,w){
for(i=0,P=r();i<24;i++){
	while(~w[_](P)||P==q||!P)P=r();
	w[i]=P
}
function r(){
	return~~(Math.random()*(e+1))
}
function d(){
	s='<pre style=border:solid;width:350px>';q<0&&(q=e);p<0&&(p=e);p>e&&(p=e-b);
	for(i=0;i<e;i++){
		if(i^0&&i%b==0)s+="\n";R=0;
		for(y in w)if(w[y]==i)s+="~|~",R++;
		s+=i==p?" > ":q==i?' o ':!R?'   ':''
	}
	document.body.innerHTML=s+"\n P: "+x+", O2: "+~~((1-a/T)*100)+"%"
}
onkeyup=function(e){
	h=e.which;
	g=h==39?p+1:h==37?p-1:h==40?p+b:h==38?p-b:0;
	if(!~w[_](g))p=g;
	if(q==g)x+=5,a-=S,m(),n(k),k=o(function(){m();d()},3e3);
	d()
};
function m(){
	q=w[0];
	while(~w[_](q))q=r();d()
}
o(function(){
	a+=S;
	if(a>=T)n(k),onkeyup=0,a=T,d(); else {
		for(i in w)w[i]=w[i]-1<0?e:w[i]-1,w[i]==q&&(q--),w[i]==p&&(p--);
		d();
	}
},S)
})("indexOf",setInterval,clearInterval,6e4,600,0,5,0,0,0,15,255,[])