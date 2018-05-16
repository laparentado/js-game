var brickRowCount = 4;
var brickColumnCount = 27;
var brickWidth = 15;
var brickHeight = 15;
var brickPadding = 10;
var brickOffsetTop = 25;
var brickOffsetLeft =25;
var dx = 5
var dy = -5

function Brick(){
  this.drawBrick = function(){
    var brickArray = []
    for(let c=0; c<brickColumnCount; c++){
      brickArray[c] = []
      for(let r=0;r<brickRowCount;r++){
        brickArray[c][r] = {x: 0, y:0, status: 1}
      }
    }
    for(let c=0; c<brickColumnCount; c++){
      for(let r=0; r<brickRowCount; r++){
        if(brickArray[c][r].status ==1){
          var brickX = (c*(brickWidth + brickPadding))+brickOffsetLeft;
          var brickY = (r*(brickHeight + brickPadding))+brickOffsetTop;
          brickArray[c][r].x = brickX;
          brickArray[c][r].y = brickY;
          fill("white")
          ellipse(brickX, brickY, brickWidth, brickHeight)
        }
      }
    }

}
}
