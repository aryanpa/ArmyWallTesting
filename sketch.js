var bullet,wall;
var speed,wieght,thickness;
var damage;
function setup() {
  createCanvas(1600,400);
  
  speed = random(223,321);
  thickness = random(22,83)
  wieght = random(30,52);

  bullet = createSprite(50,200,25,5);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);

}

function draw() {
  background(0); 
  

  if(hasCollided(bullet,wall)){

    bullet.velocityX = 0;
    damage = 0.5 * wieght * speed * speed/(thickness * thickness * thickness);
   
    if(damage>10){

       wall.shapeColor ="red";
    }

    if(damage<10){

     wall.shapeColor ="green";
    }
  }

  drawSprites();
}

function hasCollided(lbullet,lwall){
  
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
if(bulletRightEdge>=wallLeftEdge){
   return true

  }else {
    return false;
  }  




}