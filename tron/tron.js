p={x:795,y:400};w=[];d=1;
P={x:5,y:0};W=[];D=3;
with(c.getContext("2d")){
	onkeyup=function(e){
		(k=e.which)==39?d=2:k==37?d=4:k==38?d=1:k==40?d=3:k==87?D=1:k==68?D=2:k==83?D=3:k==65&&(D=4)
	};

	v=setInterval('\
		c.width=c.width;\
		z(p,w,d,W,"blue",0);\
		z(P,W,D,w,"red",1)\
	',60);

	// h: player
	// f: walls
	// g: direction
	// F: enemy wall
	// c: color
	// b: start index (for gradient)
	z=function(h,f,g,F,c,b) {
		f.push({x:h.x,y:h.y});
		beginPath();
		L=lineWidth=10;

		h.x+=g==2?L:g==4&&-L;
		h.y+=g==3?L:g==1&&-L;

		t=function(o){
			return o.x==(T=this).x&&o.y==T.y
		}

		if(F.filter(t,h).length||f.filter(t,h).length)clearInterval(v);

		strokeStyle=_=createLinearGradient(0,0,800,0);
		_[$="addColorStop"](b,"magenta");
		_[$](.3,"#AFD2E6");
		_[$](.6,"#FF1493");
		_[$](!b,c);

		for(i=f.length-1;i--;){
			lineTo(f[i].x,f[i].y)
		}
		stroke()
	}
}