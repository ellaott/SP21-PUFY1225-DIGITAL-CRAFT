let xPos = 200;
let yPos = 200;
let xSpeed = 3;
let ySpeed = 3;

let xPos2 = 200;
let yPos2 = 200;
let xSpeed2 = 4;
let ySpeed2 = 3;

let xPos3 = 200;
let yPos3 = 200;
let xSpeed3 = 3;
let ySpeed3 = 4;

let xPos4 = 200;
let yPos4 = 200;
let xSpeed4 = 5;
let ySpeed4 = 3;

let xPos5 = 200;
let yPos5 = 200;
let xSpeed5 = 5;
let ySpeed5 = 4;
function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(57, 147, 221);
  xPos += xSpeed;
  yPos += ySpeed;
 
  fill(random(0, 255),random(0, 255),random(0, 255))
  ellipse(xPos, yPos, 50, 50);
  if(xPos >= width || xPos<= 0){
    xSpeed *= -1
  }
  if(yPos >= height || yPos<= 0){
    ySpeed *= -1
  }
  xPos2 += xSpeed2;
  yPos2 += ySpeed2;
  
  fill(random(0, 255),random(0, 255),random(0, 255))
  ellipse(xPos2, yPos2, 50,random(0,50));
  if(xPos2 >= width || xPos2<= 0){
    xSpeed2 *= -1
  }
  if(yPos2 >= height || yPos2<= 0){
    ySpeed2 *= -1
  }
  
  xPos3 += xSpeed3;
  yPos3 += ySpeed3;
  
  fill(0,random(0, 255),random(0, 255))
  ellipse(xPos3, yPos3,  random(0,100),100);
  if(xPos3 >= width || xPos3<= 0){
    xSpeed3 *= -1
  }
  if(yPos3 >= height || yPos3<= 0){
    ySpeed3 *= -1
  }
  xPos4 += xSpeed4;
  yPos4 += ySpeed4;
  
  fill(random(0, 255),100,0)
  ellipse(xPos4, yPos4,  random(0,140),random(0,140));
  if(xPos4 >= width || xPos4<= 0){
    xSpeed4 *= -1
  }
  if(yPos4 >= height || yPos4<= 0){
    ySpeed4 *= -1
  }
  xPos5 += xSpeed5;
  yPos5 += ySpeed5;
  
  fill(random(0, 255),0,0)
  ellipse(xPos5, yPos5,  random(0,30),random(0,30));
  if(xPos5 >= width || xPos5<= 0){
    xSpeed5 *= -1
  }
  if(yPos5 >= height || yPos5<= 0){
    ySpeed5 *= -1
  }
  
  fill(random(0, 255),random(0, 255),random(0, 255))
  ellipse(200,200, random(0,200),200)
  
  
  
}