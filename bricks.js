function Brick(x,y,w,h){
	this.x = x
	this.y = y
	this.w = w
	this.h = h
	this.brickColor = color("whitesmoke")
	// this.hit = false;

	this.collide = function(obj){

		this.hit = collidePointPoint(this.x, this.y, shooterX, shooterY);

		if(this.hit==true){
			this.color = color("turquoise")
		}
}
this.disp = function(){
	noStroke();
	fill("white");
	// this.x += 4
	// if(this.x > width){
	// 	this.x = -this.w;
	//}
	rect(this.x,this.y,this.w,this.h);

}
}
