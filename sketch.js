
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score=0;
var ground, groundImage;
var PLAY=1;
var END=0;
var gameState=PLAY;
var Bananaseaten=0;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");

 
}



function setup() {

  
  
  //Create sprite for the monkey
  monkey=createSprite(70,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  //Sprite for the ground
ground=createSprite(400,350,900,10);

  
  
  obstacleGroup=new Group();
  FoodGroup=new Group();
  


  
}


function draw() {
 background("white");
  
     textSize(30);
  text("Survival Time:"+ score, 100,60);
  text("Bananas eaten:" + Bananaseaten,100,90);
  
  if(gameState===PLAY){
    
      
  score=score+Math.ceil(frameCount/103440505)
  
  
  
    ground.velocityX=-3;
     
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
    if(keyDown("space")&&monkey.y>314){
      monkey.velocityY=-10;        
    }
      
      
  
    //Add gravity                       
    monkey.velocityY=monkey.velocityY+0.5;
      
    monkey.collide(ground);
  
  drawSprites();
  spawnBananas();
  spawnobstacles();
    
    if(obstacleGroup.isTouching(monkey)){
      gameState=END;
      reset();
                                        }
    if(FoodGroup.isTouching(monkey)){
      FoodGroup.destroyEach();
      Bananaseaten=Bananaseaten+1;
                                    }
  
    }
  if(gameState===END){
    FoodGroup.setVelocityXEach(0);
 
  }


    
  }


function spawnobstacles(){
if(frameCount%200===0){
obstacle=createSprite(600,328,10,10);
obstacle.velocityX=-9;
obstacle.addImage(obstaceImage); 
obstacle.scale=0.1;
obstacleGroup.add(obstacle);

}
}

function spawnBananas(){
if(frameCount%60===0){
banana=createSprite(600,Math.round(random(120,300)))
banana.velocityX=-9;
banana.addImage(bananaImage); 
banana.scale=0.1;
FoodGroup.add(banana);
  
  
  
  

}
  
  
}
function reset(){
  gameState=PLAY
  obstacleGroup.destroyEach();
  FoodGroup.destroyEach();
  score=0;
  Bananaseaten=0;
                }




