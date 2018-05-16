function Shooter(){
  shooterX = width/2;
	shooterY = height-30;
  this.drawn = function(){
	fill("red")
  rect(shooterX, shooterY, 32, 32)

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
