
var thickness,wall;
var bullet,speed,weight



function setup() {
  createCanvas(1600,400);
    thickness = random(22,83);
    speed=random(223,321);
   weight=random(30,52);
    wall = createSprite(500, 200, thickness, 50);
    wall.shapeColor=color(80,80,80);
    wall2 = createSprite(500, 100, thickness,50);
    wall2.shapeColor=color(80,80,80);
    wall3 = createSprite(500, 300, thickness, 50);
    wall3.shapeColor=color(80,80,80);
    bullet=createSprite(50,200,50,5)
    bullet.velocityX=speed;
    bullet2=createSprite(50,100,50,5)
    bullet2.velocityX=speed;
    bullet3=createSprite(50,300,50,5)
    bullet3.velocityX=speed;
   
    
}



function draw() {
    background(0);  

    
  

if (hasCollided(bullet, wall))
{
bullet.velocityX=0;
var damage=0.5 * weight * speed * speed /(thickness *  thickness * thickness);
console.log(damage);
if(damage>10)
{
wall.shapeColor= color(255,0,0);
}
if(damage<10)
{
wall.shapeColor =color(0, 255,0);
}
}
if (hasCollided(bullet2, wall2))
{
bullet2.velocityX=0;
var damage=0.5 * weight * speed * speed /(thickness *  thickness * thickness);
console.log(damage);
if(damage>10)
{
wall2.shapeColor= color(255,0,0);
}
if(damage<10)
{
wall2.shapeColor =color(0, 255,0);
}
}
if (hasCollided(bullet3, wall3))
{
bullet3.velocityX=0;
var damage=0.5 * weight * speed * speed /(thickness *  thickness * thickness);
console.log(damage);
if(damage>10)
{
wall3.shapeColor= color(255,0,0);
}
if(damage<10)
{
wall3.shapeColor =color(0, 255,0);
}
}
drawSprites();

}