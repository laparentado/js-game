var shooter1;
var brick1;
var bullet;
var bullets =[]
var brickArray = []
var canvasWidth = 700
var canvasHeight = 400
var speedX = 1;
var speedY = 4;
var shooterX;
var shooterY;
var moving = 15


function setup(){
  createCanvas(canvasWidth, canvasHeight)
  shooter1 = new Shooter()
	brick1 = new Brick()
	bullet = new Bullet()
}

function draw(){
	background("turquoise")
  shooter1.drawn()
	brick1.drawBrick()
	for(let i = 0;i<bullets.length;i++){
        bullets[i].drawBullet()
				bullets[i].move()

}

}

function keyPressed(event){

	if(event.key == "ArrowRight" || event.key == "ArrowLeft" || event.key == "ArrowUp" || event.key == "ArrowDown"){
		shooter1.move(event.key)
		clear();
	}
	if(event.key == " "){
		bullets.push(new Bullet)
	}
}
