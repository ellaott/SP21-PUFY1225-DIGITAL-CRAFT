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
      const rFill = random(200, 360);               
      fill(rFill, 100, 100);
      ellipse(a, b, 90,90);
    }
  }
  for (let a = 0; a < width; a += 10) {
    for (let b = 0; b < height; b += 3) {
      const rFill = random(150,300);               
      fill(rFill, 50, 70);
      rect(a, b, 3,3);
    }
}
  for (let a = 0; a < width; a += 3) {
    for (let b = 0; b < height; b += 10) {
      const rFill = random(150,300);               
      fill(rFill, 50, 70);
      rect(a, b, 3,3);
    }
}
}