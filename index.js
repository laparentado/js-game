var shooter;
var bullet;
var bullets =[]
var bricks = []
var canvasWidth = 700
var canvasHeight = 400
var shooterX;
var shooterY;
var brickX
var brickY
var brickW
var brickH
var bulletX
var bulletY
var brickColor
var moving = 15
var hit = false

function setup(){
	createCanvas(canvasWidth, canvasHeight)
	background("turquoise")
  shooter = new Shooter()
	bullet = new Bullet()
	for(i=0;i<1;i++){
		b = new Brick(random(width),random(height), random(50,75), random(25,50) )
		bricks.push(b);
	}
}

function draw(){
	background("turquoise")
  shooter.drawn()


for(var i=0; i<bullets.length;i++){
		bullets[i].drawBullet()
		bullets[i].move()
		bulletX = bullets[i].x
		bulletY = bullets[i].y
	}
for(var j=0; j<bricks.length;j++){
		bricks[j].disp()
		brickX = Math.round(bricks[j].x)
		brickY = Math.round(bricks[j].y)
	}

	//rect(200,200,100,150);
		ellipse(shooterX, shooterY,25,25);

		hit = collideRectCircle(brickX, brickY,b.w, b.h,bulletX, bulletY,1);
		console.log(hit)
		if(hit==true){
			b.w =0
			b.h = 0
			location.reload()
		}
	}
// console.log(brickX)
// console.log(bulletY)
	// if(brickY == bulletX){
	// 	alert("hit")
	// }


function keyPressed(event){

	if(event.key == "ArrowRight" || event.key == "ArrowLeft" || event.key == "ArrowUp" || event.key == "ArrowDown"){
		shooter.move(event.key)
	}
	if(event.key == " "){
		bullets.push(new Bullet)
}
}
