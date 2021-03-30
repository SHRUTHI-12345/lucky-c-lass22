const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	engine = Engine.create();
	world = engine.world;
	
	fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
	
	var options= {
		'restitution' : 0.5,
		isStatic : true

	}

	starBody=Bodies.circle(650,30,5,options);
	world.add(world,starBody);
	// add var options of restitution 0.5 and isStatic to true
	
	// create starBody in circle shape with position 650,30,5 and options
	// add it to the world
	
	
	Engine.run(engine);

}


function draw() {
	
	background(bgimage);
 

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  if(star.y > 470 && starBody.position.y > 470 ){
  	Matter.Body.setStatic(starBody,true);
  }

  drawSprites();

}

function keyPressed() {

	if(keyCode === RIGHT_ARROW){
           fairy.x = fairy.x + 20;
	}
	if (keyCode=== LEFT_ARROW){
		fairy.x = fairy.x-20;
	}
	if (keyCode===DOWN_ARROW){
		matter.Body.setStatic(starBody,false);
		
	}



        // Understand how code is written for RIGHT_ARROW in the above three lines and write same if condition for LEFT_ARROW also by subtracting 20

	// Then add the if condition for DOWN_ARROW also and in the curly brackets write the line : Matter.Body.setStatic(starBody,false);

}


