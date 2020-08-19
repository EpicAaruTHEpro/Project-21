var bullet, wall, thickness;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  bullet = createSprite(50, 200, 50, 20);
  bullet.shapeColor = color(255,255,255);
  bullet.velocityX = speed;
  thickness = random(22,83);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(0,0,0);
  
  if (wall.x - bullet.x < (bullet.width-wall.width) / 2) {
    bullet.velocityX=0;
    bullet.x = wall.x-20;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    console.log(damage);
    console.log(thickness);
    if (damage>=10) {
      bullet.shapeColor = color(255,0,0);
      //"Car Crashed hard RED LEVEL"
    }

    if (damage> 6 && damage<10) {
      bullet.shapeColor = color(230,230,0);
      //"Car Crashed okay YELLOW LEVEL"
    }

    if (damage<=6) {
      bullet.shapeColor = color(0,255,0);
      //"Car Crashed good GREEN LEVEL"
    }

  }

  drawSprites();
}