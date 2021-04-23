let xPos = 0;
let yPos = 0;
let diam = 100;

let xPos2 = 200;


let xPos3 = 400;


let xPos4 = -200;


let xPos5 = -400;




function setup() {
  createCanvas(600, 600);
  background(200);
  noLoop();
  noStroke();
  colorMode(HSB);

}

function draw() {
  for (let a = 0; a < width; a += 40) {
    for (let b = 0; b < height; b += 30) {
      const rFill = random(0, 360);               
      fill(rFill, 50, 50);
      rect(a, b, 90,90);  
      
  const randF1 = random(100, 360);
  const randF2 = random(100, 360);
  const randF3 = random(100, 360);
  const randF4 = random(100, 360);
  const randF5 = random(100, 360);
  const randF6 = random(100, 360);
  const randF7 = random(100, 360);
  
  fill(randF1, 100, 100);
  ellipse(xPos, yPos, diam);
  fill(randF2, 100, 100);
  ellipse(xPos + 100, yPos + 100, diam);
  fill(randF3, 100, 100);
  ellipse(xPos + 200, yPos + 200, diam);
  fill(randF4, 100, 100);
  ellipse(xPos + 300, yPos + 300, diam);
  fill(randF5, 100, 100);
  ellipse(xPos + 400, yPos + 400, diam);
  fill(randF6, 100, 100);
  ellipse(xPos + 500, yPos + 500, diam);
  fill(randF7, 100, 100);
  ellipse(xPos + 600, yPos + 600, diam);
      
  const randF8 = random(100, 360);
  const randF9 = random(100, 360);
  const randF10 = random(100, 360);
  const randF11 = random(100, 360);
  const randF12 = random(100, 360);
  const randF13 = random(100, 360);
  const randF14 = random(100, 360);
  
  fill(randF1, 100, 100);
  ellipse(xPos2, yPos, diam);
  fill(randF8, 100, 100);
  ellipse(xPos2 + 100, yPos + 100, diam);
  fill(randF9, 100, 100);
  ellipse(xPos2 + 200, yPos + 200, diam);
  fill(randF10, 100, 100);
  ellipse(xPos2 + 300, yPos + 300, diam);
  fill(randF11, 100, 100);
  ellipse(xPos2 + 400, yPos + 400, diam);
  fill(randF12, 100, 100);
  ellipse(xPos2 + 500, yPos + 500, diam);
  fill(randF13, 100, 100);
  ellipse(xPos2 + 600, yPos + 600, diam);
      
  
  fill(randF1, 100, 100);
  ellipse(xPos3, yPos, diam);
  fill(randF8, 100, 100);
  ellipse(xPos3 + 100, yPos + 100, diam);
  fill(randF9, 100, 100);
  ellipse(xPos3 + 200, yPos + 200, diam);
  fill(randF10, 100, 100);
  ellipse(xPos3 + 300, yPos + 300, diam);
  fill(randF11, 100, 100);
  ellipse(xPos3 + 400, yPos + 400, diam);
  fill(randF12, 100, 100);
  ellipse(xPos3 + 500, yPos + 500, diam);
  fill(randF13, 100, 100);
  ellipse(xPos3 + 600, yPos + 600, diam);
  
  fill(randF1, 100, 100);
  ellipse(xPos4, yPos, diam);
  fill(randF8, 100, 100);
  ellipse(xPos4 + 100, yPos + 100, diam);
  fill(randF9, 100, 100);
  ellipse(xPos4 + 200, yPos + 200, diam);
  fill(randF10, 100, 100);
  ellipse(xPos4 + 300, yPos + 300, diam);
  fill(randF11, 100, 100);
  ellipse(xPos4 + 400, yPos + 400, diam);
  fill(randF12, 100, 100);
  ellipse(xPos4 + 500, yPos + 500, diam);
  fill(randF13, 100, 100);
  ellipse(xPos4 + 600, yPos + 600, diam);
      
  fill(randF1, 100, 100);
  ellipse(xPos5, yPos, diam);
  fill(randF8, 100, 100);
  ellipse(xPos5 + 100, yPos + 100, diam);
  fill(randF9, 100, 100);
  ellipse(xPos5 + 200, yPos + 200, diam);
  fill(randF10, 100, 100);
  ellipse(xPos5 + 300, yPos + 300, diam);
  fill(randF11, 100, 100);
  ellipse(xPos5 + 400, yPos + 400, diam);
  fill(randF12, 100, 100);
  ellipse(xPos5 + 500, yPos + 500, diam);
  fill(randF13, 100, 100);
  ellipse(xPos5 + 600, yPos + 600, diam);
  
      
      
    
  }
}
}