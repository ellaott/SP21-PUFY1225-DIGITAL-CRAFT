function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(53, 92, 70);
  let g = 114
  fill(31,184, 179);
  //help from https://theibbster.medium.com/a-gentle-introduction-to-coding-by-making-generative-art-c7f0a7b744a6
 
    
    var step = 20;
  for (var y = 0; y < 400; y = y + step) {
    strokeWeight(1);
    stroke("white");
    line(0, y, 600, y+step*20);
    stroke(g, 148, 212);
    line(0, y, 500, y+step*21);
    stroke(80, 104, 150);
    line(0, y, 1000, y+step*21);
    stroke("blue")
    line(0, y, 1300, y+step*21);
    stroke(80, 104, 150);
    line(0, y, 1900, y+step*21);
    stroke("white");
    line(0, y, 2500, y+step*21);
    stroke(80, 104, 150);
    line(0, y, 3000, y+step*21);
    stroke("white");
     line(0, y, 1000, y+step*21);
    stroke(80, 104, 150);
    line(0, y, 8000, y+step*21);
    stroke("white");
     line(0, y, 6000, y+step*21);
    stroke(80, 104, 150);
    line(0, y, 2000, y+step*21);
    stroke("white");
     line(0, y, 8000, y+step*21);
    stroke(80, 104, 150);
    line(0, y, 5000, y+step*21);
    
    const diam= 300
    noStroke();
    fill(166, 174, 189);
    ellipse(400,000,diam,diam);
    ellipse(0,0,diam,diam);
    ellipse(0,400,diam, diam);
    ellipse(400,400,diam, diam);
    
  
  
    
    
}
}
