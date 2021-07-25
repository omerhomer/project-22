const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

let engine;
let world;
var roof;

var bob1,bob2,bob3,bob4,bob5;
var con1,con2,con3,con4,con5;

//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true,			
	}
	var bob_options = {
		restitution: 1.1
	  }
    bob1 = Bodies.circle(300,300,25,bob_options);
	bob2 = Bodies.circle(350,300,25,bob_options);
	bob3 = Bodies.circle(400,300,25,bob_options);
	bob4 = Bodies.circle(450,300,25,bob_options);
	bob5 = Bodies.circle(500,300,25,bob_options);
	con1 = Matter.Constraint.create({
		pointA:{x:300,y:100},
		bodyB:bob1,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.05
	  });
	  con2 = Matter.Constraint.create({
		pointA:{x:350,y:100},
		bodyB:bob2,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.05
	  });
	
	  con3 = Matter.Constraint.create({
		pointA:{x:400,y:100},
		bodyB:bob3,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.1
	  });
	  con4 = Matter.Constraint.create({
		pointA:{x:450,y:100},
		bodyB:bob4,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.05
	  });
	  	con5 = Matter.Constraint.create({
		pointA:{x:500,y:100},
		bodyB:bob5,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.05
	  });
	
	
	
	
	World.add(world,con1);
	World.add(world,con2);
	World.add(world,con3);
	World.add(world,con4);
	World.add(world,con5);

	roof = Bodies.rectangle(400,100,250,20,roof_options);
    World.add(world,roof);
	World.add(world,bob1);
	World.add(world,bob2);
	World.add(world,bob3);
	World.add(world,bob4);
	World.add(world,bob5);
	Engine.run(engine);
	
  
}

function draw() {
    rectMode(CENTER);
  ellipseMode(RADIUS);

  background("#99004d");

  rect(roof.position.x,roof.position.y,250,20);

  //call display() to show ropes here
  
  
  //create ellipse shape for multiple bobs here

  ellipse(bob1.position.x,bob1.position.y,25);
  ellipse(bob2.position.x,bob2.position.y,25);
  ellipse(bob3.position.x,bob3.position.y,25);
  ellipse(bob4.position.x,bob4.position.y,25);
  ellipse(bob5.position.x,bob5.position.y,25);

  
  push();
  strokeWeight(3);
  stroke(255);
  line(con1.pointA.x,con1.pointA.y,bob1.position.x,bob1.position.y);
  line(con2.pointA.x,con2.pointA.y,bob2.position.x,bob2.position.y);
  line(con3.pointA.x,con3.pointA.y,bob3.position.x,bob3.position.y);
  line(con4.pointA.x,con4.pointA.y,bob4.position.x,bob4.position.y);
  line(con5.pointA.x,con5.pointA.y,bob5.position.x,bob5.position.y);
  pop();
  

}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed()
{
  if(keyCode==UP_ARROW)
    {
      Matter.Body.applyForce(bob1,{x:0,y:0},{x:-0.1,y:0});
    }
}

