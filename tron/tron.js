a=A=0;
with(c.getContext("2d"))
	onkeyup=function(e){
		d=(k=e.which)==39?2:k==37?4:k==38?1:k==40?3:d;
		D=k==87?1:k==68?2:k==83?3:k==65?4:D;
		k==32&&X&S()
	},
	(S=function(){
		X=0;
		w=[{x:795,y:400}];d=1;// player 1
		W=[{x:5,y:0}];D=3;// player 2
		v=setInterval('\
			c.width=c.width;\
			p1[H="innerHTML"]=A+=z(w,d,W,"blue",0);\
			p2[H]=a+=z(W,D,w,"red",1);\
			if(X)clearInterval(v)\
		',60)
	})(),

	// f: walls
	// g: direction
	// F: enemy wall
	// c: color
	// b: start index (for gradient)
	z=function(f,g,F,B,b){
		h={x:f[l=f[m="length"]-1].x,y:f[l].y};

		beginPath();
		L=lineWidth=10;

		h.x+=g==2?L:g==4&&-L;
		h.y+=g==3?L:g==1&&-L;

		if(F[I="filter"](t=function(o){return o.x==(T=this).x&o.y==T.y},h)[m]||f[I](t,h)[m])return X=1;

		strokeStyle=_=createLinearGradient(0,0,800,0);
		for($ in _);
		_[$](b,"magenta");
		_[$](.3,"#AFD2E6");
		_[$](.6,"#FF1493");
		_[$](!b,B);

		for(i=f.push({x:h.x,y:h.y})-1;i--;){
			lineTo(f[i].x,f[i].y)
		};
		stroke();
		return 0
	}