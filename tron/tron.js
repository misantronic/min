a=A=0;
with(c.getContext("2d")){
	onkeyup=function(e){
		(k=e.which)==39?d=2:k==37?d=4:k==38?d=1:k==40?d=3:k==87?D=1:k==68?D=2:k==83?D=3:k==65?D=4:k==32&X&(S())
	};

	S=function(){
		X=0;
		w=[{x:795,y:400}];d=1;// player 1
		W=[{x:5,y:0}];D=3;// player 2
		v=setInterval('\
			c.width=c.width;\
			p1[H="innerHTML"]=(A+=z(w,d,W,"blue",0));\
			p2[H]=(a+=z(W,D,w,"red",1));\
			if(X)clearInterval(v)\
		',60)
	};S();

	// f: walls
	// g: direction
	// F: enemy wall
	// c: color
	// b: start index (for gradient)
	z=function(f,g,F,c,b){
		t=function(o){
			return o.x==(T=this).x&o.y==T.y
		};

		l=f.length-1;
		h={x:f[l].x,y:f[l].y};

		beginPath();
		L=lineWidth=10;

		h.x+=g==2?L:g==4&&-L;
		h.y+=g==3?L:g==1&&-L;

		if(F.filter(t,h).length||f.filter(t,h).length)return X=1;

		strokeStyle=_=createLinearGradient(0,0,800,0);
		_[$="addColorStop"](b,"magenta");
		_[$](.3,"#AFD2E6");
		_[$](.6,"#FF1493");
		_[$](!b,c);

		for(i=f.push({x:h.x,y:h.y})-1;i--;){
			lineTo(f[i].x,f[i].y)
		}
		stroke();
		return 0
	}
}