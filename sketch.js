var  fixedr  ;
var  movingr ;

function setup() {
  createCanvas(800,400);
  fixedr  = createSprite(400, 200, 50, 50);
  movingr = createSprite(600,200,50,50);

  fixedr.shapeColor  = "black";
  movingr.shapeColor = "black";

  fixedr.debug  = true ;
  movingr.debug = true ;
}

function draw() {
  background(255,255,255);
  
  movingr.x = World.mouseX ;
  movingr.y = World.mouseY ;

  if (movingr.x - fixedr.x  < movingr.width/2 + fixedr.width/2 && fixedr.x - movingr.x < movingr.width/2 + fixedr.width/2 &&
     movingr.y - fixedr.y < movingr.height/2 + fixedr.height/2 && fixedr.y - movingr.y < movingr.height/2 + fixedr.height/2  ) {
      movingr.shapeColor = "red";
      fixedr.shapeColor  = "red";
  }

  

  else {
         movingr.shapeColor = "black";
         fixedr.shapeColor  = "black";

  }

  drawSprites();
}