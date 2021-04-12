const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
var bgDay, bgNight
var fetchTime;
var bg;
var pipe1;
var background1;
var pipe2;
var pipe3;
var pipe4;
function preload()
 {
  img= loadImage("gameover.png")
  f=loadImage("Frame-1.png")
  p=loadImage("pipe-green.png")
}
function setup() {
  createCanvas(650,400);
  engine = Engine.create();
  world = engine.world;
  bgProperties()
flappy=createSprite(30,70,30,30)
flappy.scale=0.02
flappy.addImage(f)
pipe1=createSprite(230,10,30,30)
pipe1.scale=0.2
pipe1.addImage(p)

pipe2=createSprite(400,10,30,30)
pipe2.scale=0.23;
pipe2.addImage(p)
pipe3 = createSprite(230, 100, 30, 30)
pipe3.scale = 0.19;
pipe3.addImage(p);
pipe3.visible = true;
pipe4 = createSprite(400, 100, 30, 30)
pipe4.scale = 0.19;
pipe4.addImage(p)
pipe4.visible = true;

  bc = new ground()
}

function draw() {
  if(bg)
  background(bg); 

  Engine.update(engine)
 flappy.velocityY=flappy.velocityY+0.2
pipe1.velocityX=-2
pipe2.velocityX = -2;
pipe3.velocityX = -2;
pipe4.velocityX = -2;
if(keyDown("space")){
  flappy.velocityY=-3
}
  if(flappy.isTouching(pipe1)|| flappy.isTouching(pipe2)||flappy.isTouching(pipe3)||flappy.isTouching(pipe4)){
    g=createSprite(70,70,30,30)
    g.addImage(img)
    g.scale=0.5
    flappy.velocityX=0
    flappy.velocityY=0
    pipe1.velocityX=0
    pipe2.velocityX=0;
    pipe3.velocityX=0;
    pipe4.velocityX=0;
  }

  if(flappy.y<0||flappy.y>400){
    g=createSprite(70,70,30,30)
    g.addImage(img)
    g.scale=0.5
    flappy.velocityX=0
    flappy.velocityY=0
    pipe1.velocityX=0
    pipe2.velocityX=0;
    pipe3.velocityX=0;
    pipe4.velocityX=0;
  }

  if(pipe1.x<0){
    pipe1.x=380
  }

  if(pipe2.x<0){
    pipe2.x=550
  }

  if(pipe3.x<0){
    pipe3.x=380
  }

  if(pipe4.x<0){
    pipe4.x=550
  }
  

  bc.display()
  drawSprites()
}

async function bgProperties(){
  var fetchData = await fetch("http://worldtimeapi.org/api/timezone/Indian/Cocos")
    var storeData = await fetchData.json()
    var fetchDateTime = storeData.datetime
    var fetchTime = fetchDateTime.slice(11, 13)
   // console.log(fetchTime)

    if(fetchTime>=06 && fetchTime<=19){
      backgroundImage = ("background-day.png")
    }

    else{
      backgroundImage = ("background-night.png")
    }
    bg= loadImage(backgroundImage)
}