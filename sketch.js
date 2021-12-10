var redCarImg, raceCar;
var raceTrackImg, raceTrack;
var oneCashImg, oneCash, fiveCashImg, fiveCash, tenCashImg, tenCash, twentyCashImg, twentyCash, hundredCashImg, hundredCash, cashGroup;

var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  redCarImg = loadImage("redcar.png");
  raceTrackImg = loadImage("racetrack.png");
  cash = loadImage(".png");
}

function setup(){

  createCanvas(windowWidth,windowHeight);

  raceTrack=createSprite(width/2,200);
  raceTrack.addImage(raceTrackImg);
  raceTrack.velocityY = 4;

  cashG = new Group();


}


function draw(){
  if (gameState === PLAY){
  
  background(0);

  edges = createEdgeSprites();
  redCar.collide(edges);

  if(keyDown === LEFT_ARROW){
    ghost.x = ghost.x -4
  }

  if(keyDown === RIGHT_ARROW){
    ghost.x = ghost.x +4
  }

  trex.velocityY = trex.velocityY + 0.8

  if (ground.x < 0){
    ground.x = ground.width/2;
  }

  trex.collide(invisibleGround);
  spawnClouds();
  spawnObstacles();

  if(obstaclesGroup.isTouching(trex)){
      gameState = END;
  }
}
else if (gameState === END) {
  gameOver.visible = true;
  restart.visible = true;
  
  ground.velocityX = 0;
  trex.velocityY = 0;
  obstaclesGroup.setVelocityXEach(0);
  cloudsGroup.setVelocityXEach(0);
  
  trex.changeAnimation("collided",trex_collided);
  
  obstaclesGroup.setLifetimeEach(-1);
  cloudsGroup.setLifetimeEach(-1);
  
  if(mousePressedOver(restart)) {
    reset();
  }
}
  drawSprites();

}









drawSprites();



function spawnCashs(){
  
  if(frameCount % 240 === 0) {
    cash = createSprite(200, -50);
    cash.addImage(Img);
    cash.x = Math.round(random(120,400));
    cash.velocityY = 1;
    cash.lifetime = 800;
    cashGroup.add(cash)
  }
}