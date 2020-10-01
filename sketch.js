const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world,ground;
var engine;

function setup(){
  createCanvas(600,600);
  engine = Engine.create();
  world = engine.world;

  ground = Bodies.rectangle(300,600,600,20, {isStatic : true});
  ball = Bodies.circle(300,300,20,{restitution : 1});

  World.add(world,ground);
  World.add(world,ball);
}

function draw(){
  Engine.update(engine);
  background("blue");

  fill("black");

  rectMode(CENTER);
  rect(ground.position.x, ground.position.y,600,20);

  ellipseMode(CENTER);
  ellipse(ball.position.x, ball.position.y,40,40);
}