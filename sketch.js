var box;

function setup() {
  createCanvas(800,800) ;
  box=createSprite(400,400,100,100) ;
}

function draw(){
  background("blue") ;

  if(keyIsDown(UP_ARROW)){
    box.position.y=box.position.y-5 ;
  }
  if(keyIsDown(DOWN_ARROW)){
    box.position.y=box.position.y+5 ;
  }
  if(keyIsDown(LEFT_ARROW)){
    box.position.x=box.position.x-5 ;
  }
  if(keyIsDown(RIGHT_ARROW)){
    box.position.x=box.position.x+5 ;
  }

  drawSprites() ;
}