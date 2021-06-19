var ground,groungImg
var angel,angelImg;


function preload(){
  groundImg=loadImage("backGround.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  ground = createSprite(windowWidth,windowHeight)
  ground.addImage(groundImg);
  ground.scale=0.1
 
}

function draw() {
  background(255);
 
  
  drawSprites();
}

