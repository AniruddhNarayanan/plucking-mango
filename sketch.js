var gameState="sling";
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree, treeImage
var ground

function preload()
{
	treeImage=loadImage("tree.png");
}

function setup() {
	createCanvas(1000, 800,10,10);
	
	ground =  createSprite(500,795,1000,10);
	ground.shapecolor=color( "green");
	tree=createSprite(800,510,10,10);
	tree.addImage(treeImage);
	tree.scale=0.5;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	boy1= new boy(250,740,250,250);
	mango1= new mango(720, 530,50);
	// mango2 = new mango();
	stone1 = new Stone(160,660,50);
	string1 = new String( stone1.Body, {x:165,y:660});
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  mango1.display(); 
  boy1.display();
  stone1.display();
  string1.display();
 detectcollision(stone1, mango1);
  
  drawSprites();
 
}

function mouseDragged(){
    if(gameState!=="launched")
    Matter.Body.setPosition(stone1.Body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
	string1.fly();
    gameState="launched"
}

function detectcollision(lstone, lmango ){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.Body.position

var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPosition.x, mangoBodyPosition.y)
if(distance<=lmango.r+lstone.r){
	Matter.Body.setStatic(lmango.body,false);
}
}


