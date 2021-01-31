
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, groundObject, paperObject;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject = new ground(800,670,1600,20);
	dustbinObj = new dustbin(1200,650);
	paperObject = new Paper(135);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  if(keyDown(UP_ARROW)){
	Body.applyForce(paperObject.body, paperObject.body.position,{x:130, y:-145});
  }
  
  paperObject.display();
  groundObject.display();
  dustbinObj.display();
}