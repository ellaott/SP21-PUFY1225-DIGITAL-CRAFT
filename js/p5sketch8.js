function setup() {
  createCanvas(400, 400);
  noStroke();
  frameRate(5);
}

function draw() {
  background(18,53,91);
  fill(random(0,255),random(0,255),random(0,255))
  for (let i = 0; i<width; i += 30){
    for (let y = 0; y < height; y += 30){
      ellipse(i, y, random(10,25), random(10,25))
    }
  }
    for (let i = 0; i<width; i += 2){
    for (let y = 0; y < height; y += 2){
      rect(i, y, 1,1)
    }
    }
}