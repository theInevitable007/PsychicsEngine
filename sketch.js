const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var object;
var ball;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var options = {
    isStatic: true
  }
  var ballOptions = {
    restitution : 1
  }
  object = Bodies.rectangle(200,380,400,50,options);
  World.add(world,object);

  ball = Bodies.circle(200,200,50,ballOptions);
  World.add(world,ball);

  console.log(object);
  console.log(object.position.x);
}

function draw() {
  background("black"); 
  Engine.update(engine);
  
  fill("red");
  strokeWeight(3);
  stroke("yellow");
  
  rectMode (CENTER);
  rect (object.position.x,object.position.y,400,50);
  
  fill("green");
  strokeWeight(3.5);
  stroke("brown");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,50);
  
}