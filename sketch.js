var ground,groungImg
var angel,angelImg;


function preload(){
  groundImg=loadImage("backGround.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  ground = createSprite(windowHeight,windowWidth)
  ground.addImage(groundImg);
  ground.scale=0.4
 
}

function draw() {
  background(255);
 
  
  drawSprites();
}

