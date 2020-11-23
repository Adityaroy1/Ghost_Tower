var doorgroups
var climbersgroup
var invisibleblock
var invisibleblockgroup
var end=0 
var play=1
var gamestate=play

function preload() {  
 towerimg=loadImage("tower.png") 
  ghostimg=loadImage("ghost-jumping.png")
  doorimg=loadImage("door.png")
  climberimg=loadImage("climber.png")
  
}
function setup(){
  createCanvas(600,600);
  tower=createSprite(300,300,50,50)
  tower.addImage(towerimg)
  ghost=createSprite(300,300,40,40)
  ghost.addImage(ghostimg)
  ghost.scale=0.4
  doorgroups=new Group()
  climbergroup=new Group()
  invisibleblockgroup=new Group
  
  
}
function draw(){
  background(0)
  if(gamestate===play){
    tower.velocityY=2
    if(tower.y>600){
      tower.y=300
     }
   if(keyDown("space")){
     ghost.velocityY=-10
   }
    ghost.velocityY=ghost.velocityY+0.2 

    if(keyDown("left")){
      ghost.x=ghost.x-5
    }
    if(keyDown("right")){
      ghost.x=ghost.x+5
    }
    spawndoors();
    if(climbergroup.isTouching(ghost)){
       ghost.velocityY=0 
       }
    if(invisibleblockgroup.isTouching(ghost)||ghost.y>600){
       gamestate=end
      ghost.destroy()
       }

    drawSprites();
    
  }
   if(gamestate===end){
     fill("yellow")
     
     textSize(30);
     text("GAME OVER",220,300)
    
    
        
  }
}
function spawndoors(){
  if(frameCount%200 == 0){
   door=createSprite(200,-60,40,40)
   door.velocityY=2 
    door.addImage(doorimg)
    door.depth=tower.depth
    ghost.depth=door.depth+1
    door.x=Math.round(random(100,500))
    doorgroups.add(door)
    
    climber=createSprite(200,0,10,3)
    climber.velocityY=2
    climber.addImage(climberimg)
    climber.x=door.x
    climbergroup.add(climber)
    climber.debug=false
    
    invisibleblock=createSprite(200,5,10,5)
    invisibleblock.velocityY=2
    invisibleblock.width=climber.width
    invisibleblock.x=climber.x
    invisibleblock.visible=true
    invisibleblockgroup.add(invisibleblock)
    invisibleblock.debug=true
    
    invisibleblockgroup.depth=ghost.depth
    invisibleblock.setCollider("rectangle",0,2,invisibleblock.width,7)
  }
}






