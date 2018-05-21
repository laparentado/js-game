function Shooter(){
  shooterX = width-10;
	shooterY = height-200;
	this.dia = 10
  this.drawn = function(){
		fill("salmon")
		ellipse(shooterX, shooterY, this.dia, this.dia)
}
this.move = function(direction){
		if(direction == "ArrowLeft"){
			if (shooterX <=0){
				shooterX =0
			}
			shooterX -= moving;
		}else if(direction == "ArrowRight"){
			if(shooterX >= width-30){
				shooterX = width-30
			}
				shooterX += moving

		}if(direction == 'ArrowUp'){
			if(direction <=0){
				shooterY = 0
			}
			shooterY -= moving;
		}else if(direction == 'ArrowDown'){
			shooterY += moving;
		}
	}


}
