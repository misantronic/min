p={x:795,y:400};w=[];d=1;
P={x:5,y:0};W=[];D=3;
with(c.getContext('2d')){
	onkeyup=function(e){
		(k=e.which)==39?d=2:k==37?d=4:k==38?d=1:k==40?d=3:k==87?D=1:k==68?D=2:k==83?D=3:k==65&&(D=4)
	};

	v=setInterval(function(){
		c.width=c.width;
		z(p,w,d,W,'blue');
		z(P,W,D,w,'red')
	},60);

	// h: player
	// f: walls
	// g: direction
	// F: enemy wall
	// c: color
	z=function(h,f,g,F,c) {
		f.push({x:h.x,y:h.y});
		beginPath();
		moveTo(h.x,h.y);

		h.x+=g==2?10:g==4&&-10;
		h.y+=g==3?10:g==1&&-10;

		t=function(o){
			return o.x==this.x&&o.y==this.y
		}

		if(F.filter(t,h).length||f.filter(t,h).length)clearInterval(v);

		lineWidth=10;
		strokeStyle=c;
		for(i=f.length-1;i--;){
			lineTo(f[i].x,f[i].y)
		}
		stroke()
	}
}