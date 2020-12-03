function setup() { 
   createCanvas(1530, 740);   
   background("#DDCA71");
}
function draw() {      
   strokeWeight(0);
   textSize(70);   
   textFont("Arial");   
   textStyle(ITALIC);   
   textAlign(LEFT);
    text("Free Yourself", 570,100)
   text(":)",750,200);
   fill("#DD585C");
   ellipse(mouseX, mouseY, 50, 50);
    fill("#8564CF");
 }