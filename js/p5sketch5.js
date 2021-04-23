let xPos = 0;
let yPos = 0;
let width = 50;
let height = 50;
let countX = 0;
let countY = 0;

let xPos2 = 0;
let yPos2 = 350;
let width2 = 50;
let height2 = 50;
let countX2 = 0;
let countY2 = 0;
 

function setup() {
  createCanvas(400, 400);
  noLoop();
  noStroke();
  colorMode(HSB);
  
  let rfill5 = random(100,360);
  fill(rfill5, 70,70);
  background(rfill5,20,90);
}
function add30x(val){
  const inc = 70 * countX;
  countX += 1; 
  return inc + val; 
}
function add30y(val){
  const inc = 0 * countY;
  countY += 1; 
  return inc + val; 
}
function add30x2(val){
  const inc = 70 * countX2;
  countX2 += 1; 
  return inc + val; 
}
function add30y2(val){
  const inc = 0 * countY2;
  countY2 += 1; 
  return inc + val; 
}


function draw() {
  let rfill = random(0,360);
  fill(rfill, 70,70);
  rect(add30x(xPos), add30y(yPos), width, height);
  rect(add30x(xPos), add30y(yPos), width, height);
  rect(add30x(xPos), add30y(yPos), width, height);
  rect(add30x(xPos), add30y(yPos), width, height);
  rect(add30x(xPos), add30y(yPos), width, height);
  rect(add30x(xPos), add30y(yPos), width, height);
  
  let rfill2 = random(0,360);
  fill(rfill2, 70,70);
  rect(add30x2(xPos2), add30y2(yPos2), width2, height2);
  rect(add30x2(xPos2), add30y2(yPos2), width2, height2);
  rect(add30x2(xPos2), add30y2(yPos2), width2, height2);
  rect(add30x2(xPos2), add30y2(yPos2), width2, height2);
  rect(add30x2(xPos2), add30y2(yPos2), width2, height2);
  rect(add30x2(xPos2), add30y2(yPos2), width2, height2);
  
  let rfill3 = random(100,360);
  fill(rfill3, 70,70);
  ellipse(200,200,200,200);
  
  let rfill4 = random(100,360);
  fill(rfill4, 70,70);
  ellipse(200,200,100,100);
}
  {
  

}


