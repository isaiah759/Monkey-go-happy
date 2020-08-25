var backImage,backgr;
var player, player_running;
var ground,ground_img;

var FoodGroup, bananaImage;
var obstaclesGroup, obstacle_img;

var gameOver;
var score=0;

function preload(){
  backImage=loadImage("jungle.png");
  
player_running=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaImage=loadImage("banana.png");
  obstacle_img=loadImage("stone.png");
  
}


function setup() {
  createCanvas(800, 400);
  backgr= createSprite(200,200,800,400);
  backgr. addImage("jungle",backImage);
  backgr.scale=2.1;
  backgr.velocityX=-4;
  
  player=createSprite(100,300,20,20);
  player.addAnimation("running", player_running);
  player.scale=0.09;
  
  ground=createSprite(200,390,800,20);
  ground.visible=false;
  
}

function draw() {
  background(220);
  backgr.x = background.width/2;
  drawSprites();
  
  
  if(FoodGroup.isTouching(player)){
  score=score+2;
    FoodGroup.destroyEach();
    
  }
  
  switch(score){
  case 10:player.scale=0.12;
      break;
      case 20:player.scale=0.14;
      break;
      case 30:player.scale=0.16;
      break;
      case 40:player.scale=0.18;
      break;
      default:break;
  }
  
  if(obstaclesGroup.isTouching(player)){
  player.scale=0.09;
  }
  
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,500,50);
  
  }