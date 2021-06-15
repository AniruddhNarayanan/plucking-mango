var gameState="sling"
// var stone
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// var tree, treeImage
var ground

function preload()
{
	treeImage=loadImage("tree.png");
}

function setup() {
	createCanvas(1000, 800,10,10);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	mango1= new mango(720, 530,50);
	mango2 = new mango(900, 540,50);
	mango3 = new mango(800, 450,50);
	tree1=new tree(800,510,500,600);
	boy1= new boy(250,740,250,250);
	
	stone1 = new stone(160,660,50);
	string1 = new String( stone1.Body, {x:165,y:660});
	// string2 = new String(mango1.body, {x:720, y:510});

	Engine.run(engine);
	ground =  createSprite(500,795,1000,10);

  
}


function draw() {
  rectMode(CENTER);
  background(255);
  mango1.display(); 
  mango2.display(); 
  mango3.display(); 
  boy1.display();
  stone1.display();
  string1.display();
  tree1.display();
  
  detectcollision(mango1, stone1);
  detectcollision(mango2, stone1); 
  detectcollision(mango3, stone1);
  drawSprites();
 
}




function mouseDragged(){
    if(gameState!=="launched")
    Matter.Body.setPosition(stone1.Body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
	string1.fly();
    gameState="launched"
	// Matter.Body.setStatic(mango1, false);
}


function keyPressed(){
    if(keyCode === 32){
        string1.attach(stone1.Body);
		gameState="sling";
    }
}

function detectcollision(lmango, lstone){
	
	var mangoBodyPosition = lmango.Body.position
	var stoneBodyPosition = lstone.Body.position
	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	// console.log("detected" + " " + distance);
	if (distance <= lmango.radius + lstone.radius )
	{
		// console.log("detected" + " " + distance);
		Matter.Body.setStatic(lmango.Body, false);
	}
}

