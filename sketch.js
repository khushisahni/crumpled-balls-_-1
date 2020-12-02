const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world,dustbin,paper;


function setup() {
	createCanvas(1000, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	
	//Create the Bodies Here.

	dustbin = new Dustbin(700,400);
	paper = new Paper(100,300,10);
	ground = new ground(width/2,670,width,20);
			
	
			
			Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("black");

  dustbin.display();
  paper.display();
  ground.display();

  //drawSprites();
 }

 function keyPressed(){
	if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(paper.body,paper.body.position,{
		x: 12,
		y: -13
	  });
	}
 }


