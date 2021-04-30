function setup() {
  createCanvas(400, 400, SVG);
  noStroke();
  frameRate(8);
  noLoop();
}

function draw() {
  background(0);
  fill("white")
    for (let i = 0; i < width; i += 30){
    for (let y = 0; y < height; y += 30){
      rect(i, y, 25,25)
    }
    }
   fill(random(0,255),random(0,255),random(0,255),70);
  ellipse(200,200,random(50,300), 300);
  fill(random(0,255),random(0,255),random(0,255),50);
  ellipse(350,20,random(20,300), 300);
  fill(random(0,255),random(0,255),random(0,255),50);
  ellipse(0,0,random(20,300), 300);
  fill(random(0,255),random(0,255),random(0,255),50);
  ellipse(0,400,random(200,300), 300);
  fill(random(0,255),random(0,255),random(0,255),50);
  ellipse(400,400,random(200,400), 400);
   fill(random(0,255),random(0,255),random(0,255),50);
  ellipse(100,200,random(20,200), 200);
   fill(random(0,255),random(0,255),random(0,255),50);
  ellipse(100,20,random(20,100), 100);
   fill(random(0,255),random(0,255),random(0,255),50);
  ellipse(340,200,random(20,100), 100);
  
  save();
}

