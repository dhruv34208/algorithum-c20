var fixedbox,movingbox;
function setup() {
  createCanvas(800,400);
 fixedbox= createSprite(400, 200, 50, 50);
 fixedbox.shapeColor="green";
 movingbox=createSprite(500,300,50,50);
 movingbox.shapeColor="yellow";
 
}

function draw() {
  background(0); 
  movingbox.x=mouseX;
  movingbox.y=mouseY;

  if(movingbox.x-fixedbox.x<movingbox.width/2+fixedbox.width/2
    &&fixedbox.x-movingbox.x<fixedbox.width/2+movingbox.width/2
    &&movingbox.y-fixedbox.y<fixedbox.height/2+movingbox.width/2
    &&fixedbox.y-movingbox.y<movingbox.height/2+fixedbox.height/2
    ){movingbox.shapeColor="red";
    fixedbox.shapeColor="red";
  }else{
    movingbox.shapeColor="yellow";
    fixedbox.shapeColor="green"
;  }
 
  drawSprites();
}