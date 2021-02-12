const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon_img;
var holder, ball;
var slingshot;
var stand1;
var ground;

function preload(){
  polygon_img = loadImage("polygon.png");
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground();
  stand1 = new Stand(400,300,400,10);

  //level one
  block21 = new Block(240,275,30,40);
  block20 = new Block(270,275,30,40);
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  block17 = new Block(510,275,30,40);
  block18 = new Block(540,275,30,40);
  //level two
  block25 = new Block(270,235,30,40);
  block24 = new Block(300,235,30,40);
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  block22 = new Block(480,235,30,40);
  block23 = new Block(510,235,30,40);
  //level three
  block27 = new Block(300,195,30,40);
  block26 = new Block(330,195,30,40);
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  block28 = new Block(450,195,30,40);
  block29 = new Block(480,195,30,40);
  //level four
  block31 = new Block(330,155,30,40);
  block30 = new Block(360,155,30,40);
  block16 = new Block(390,155,30,40);
  block32 = new Block(420,155,30,40);
  block33 = new Block(450,155,30,40);
  //level five
  block34 = new Block(360,115,30,40);
  block35 = new Block(390,115,30,40);
  block36 = new Block(420,115,30,40);
  //level six
  block37 = new Block(390,75,30,40);

  ball = Bodies.circle(50,200,20);
  World.add(world,ball);
  slingshot = new Slingshot(this.ball,{x:100,y:200});


}

function draw() {
  background("wheat"); 

  textSize(20);
  fill("black");
  text("Drag toward the blocks", 100,30);

  ground.display();
  stand1.display(); 
  strokeWeight(2);
  stroke(15);
  fill("pink");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block17.display();
  block18.display();
  block20.display();
  block21.display();
  fill("lightgreen");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  fill("grey");
  block16.display();
  block30.display();
  block31.display();
  block32.display();
  block33.display();
  fill("lightblue");
  block34.display();
  block35.display();
  block36.display();
  fill("white");
  block37.display();

  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);
  
  slingshot.display();
  
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(this.ball);
  }
}