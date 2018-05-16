function Bullet(){
  shooterX = width/2;
	shooterY = height-35;
  this.x = shooterX;
  this.y = shooterY;
  this.drawBullet = function(){
	fill("gold")
  ellipse(this.x, this.y, 5, -5)

}
this.move = function(){
  this.y -= 5;
}
}
