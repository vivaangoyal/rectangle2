var fixedRect, movingRect;
var object1,object2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
    movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
    movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  object1 = createSprite(130,203,122,49);
  object1.shapeColor = "brown";
  object2 = createSprite(1100,23,12,19);
  object2.shapeColor = "blue";
}

function draw() {
  background(0,0,0);  

  
  drawSprites();
  bounceOff();
}
function bounceOff(){
if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
  }
  if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
  }
}