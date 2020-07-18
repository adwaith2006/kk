const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

  var engine,world;
  var bow;
  var arrow;  
  var ground;
  var gameState="onSling";
  var playerimg,groundimg;
  var obstacle;
  var shoot;
  var backgroundimg;
  
function preload(){

  
  
  backgroundimg=loadImage("img/bg1.jpg");

}

function setup() {

  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
 
  ground=new Ground(600,height,1200,20);
  arrow=new Arrow(90,500,200,200);
  bow=new Bow(90,500,200,200);
  shoot = new Shoot(arrow.body,{x:90, y:500});
  
  obstacle=new Obstacle();

}

function draw() {

  background(backgroundimg); 
  Engine.update(engine);
  bow.display();
  ground.display();
  arrow.display();
  obstacle.js();
  console.log(mouse.x,mouse.y);

}
function mouseDragged(){
  if(gameState!=="launch"){
      Matter.Body.setPosition(bow.body, {x: mouseX , y: mouseY});
  }
  
}


function mouseReleased(){
  //shoot.fly();
  gameState="launch";
}
