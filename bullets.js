function Bullet(){
  this.x = shooterX;
  this.y = shooterY;
  this.drawBullet = function(){
  fill("gold")
  ellipse(this.x, this.y, 5, -5)
  //createSprite(this.x, this.y, 5, -5).shapeColor = color ("gold")

}
this.move = function(){
  this.x -= 10;
}
}
