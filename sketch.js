const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let engine;
let world;
var ball
var ground
var left
var right

function setup() {
createCanvas(1600,700);
var ball_options = {
isStatic:false,
restitution:0.3,
friction:0,
density:1.2
}


	engine = Engine.create();
	world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
	//Create the Bodies Here.
    ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);

	Engine.run(engine);
  ground =new Ground(width/2,670,width,20);
  left = new Ground(1000,600,20, 120);
  right = new Ground(1200,600,20,120)
 
}

function draw() {
  background(0);
  ellipse(ball.position.x, ball.position.y,20,20)
 ground.show();
 left.show();
 right.show();
 Engine.update(engine);
 drawSprites();
}
function keyPressed(){
if (keyCode === UP_ARROW){
  Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
}
}





