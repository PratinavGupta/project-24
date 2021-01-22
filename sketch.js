var engine, world;

var wall1, wall2, wall3;
var ball;
var ground;


function setup() {
	createCanvas(800, 700);

	engine = Matter.Engine.create();
	world = engine.world;

	ground = new GROUND(400, 680, 800, 20);

	rectMode(CENTER);
	wall1=new WALL(550,600,10,100);
	wall2=new WALL(700,600,10,100);
	wall3=new WALL(625,650,150,10);
	ball = new PAPPER(100, 600);

	Matter.Engine.run(engine);
}


function draw() {
	background(0);

	wall1.display();
	wall2.display();
	wall3.display();
	ground.display();
	ball.display();

	if (keyDown(UP_ARROW))
		Matter.Body.applyForce(ball.body, ball.body.position, { x: 30, y: -35 });

	Matter.Engine.update(engine);
	drawSprites();
}