//help from: https://editor.p5js.org/fergfluff/sketches/BJHjFwHjW

function setup() {
  createCanvas(400, 400);
}
let g= 250
function draw() {
  background(73,81,89);
  strokeWeight(1.5)
  stroke(g,119,109)
   var x = 0
  
   while (x <= 400) {
      fill(250,201,184);
    rect(x, 0, 20, 20);
x = x + 20;
 }
  var x = 0
  
   while (x <= 400) {
      fill(229,212,192);
    rect(x, 20, 30, 30);
x = x + 30;
   }
   var x = 0
  
   while (x <= 400) {
      fill(197,222,205);
    rect(x, 50, 35, 35);
x = x +35;
   }
  var x = 0
  
   while (x <= 400) {
      fill(161,232,204);
    rect(x, 85, 40, 40);
x = x +40;
   }
  fill(g,119,109)
  ellipse(400,260,250,250)
  ellipse(0,260,250,250)
}