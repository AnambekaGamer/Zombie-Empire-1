
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var enemy1,enemy1Img,enemy2,enemy2Img,enemy3,enemy3Img;
var player,playerImg;
var hauntedCastle,castleImg,room1,room1Img,room2,room2Img;
function preload()
{
	/*enemy1Img=loadImage("zombie1.gif");
	enemy2Img=loadImage("zombie 2.gif");
	enemy3Img=loadImage("zombie 3.gif");
	playerImg=loadImage("shooting game.gif");*/
	castleImg=loadImage("ZOMBIEEMPIRE2.jpg");
	//room1Img=loadImage("room 1.gif");
	//room2Img=loadImage("room 2.gif");
    
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
  image(castleImg,200,200);
  //drawSprites();
 
}



