
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
	var ground;
	var binwall1;
	var binwall2;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 900);
	
	engine = Engine.create();
	world = engine.world; 
	
	var balloptions = {
	isStatic : false,	
    restitution : 0.3,
	friction:0,
	density:1.2,

	}

	var groundoptions =  {
    isStatic : true,	
	}

	var binwalloptions = {
		isStatic : true,
	}



	

	
	
	//Create the Bodies Here.
	 var ball = Matter.Bodies.circle(200,800,30,balloptions)
	 var ground = Matter.Bodies.rectangle(300,450,10,80,groundoptions)
    
     var binwall1 = Matter.Bodies.rectangle(450,400,50,50,groundoptions);
	 var binwall2 = Matter.Bodies.rectangle(650,400,50,50,groundoptions);
	World.add(world,ball);
	World.add(world,ground)
	World.add(world,binwall1);
    World.add(world,binwall2);

	
    

	
  
}


function draw() {
	Engine.run(engine);	
  rectMode(CENTER);
  ellipse(ball.position.x,ball.position.y,30);
  background(0);
  rect(ground.position.x,ground.position.y,10,80);
  rect(binwall1.position.x,binwall1.position.y,50,50);
  rect(binwall2.position.x,binwall2.position.y,50,50);
  
}



