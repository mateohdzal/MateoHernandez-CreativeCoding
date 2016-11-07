var waveLengthOne = 125.0;
var waveLengthTwo = 90.0;
var pointCount = 0;
var angle = 0.0;
var amplitude = 200;
var j=0;

function setup(){
  createCanvas(400,400);
  colorMode(HSB, 360,100,100);  //Define Color mode
  
}
function draw(){
  
  if(pointCount > 10000){
    noLoop();
  }
  noFill();
  strokeWeight(1);
  stroke(100);
  translate(width/2, height/2);
beginShape();
  for(var i=0; i < pointCount; i++){
  angle = i / waveLengthOne * TWO_PI;
  var y = sin(angle)* amplitude;
  angle = i / waveLengthTwo * TWO_PI;
  var x = sin(angle)* amplitude;
  j=i+100;
   angle = j / waveLengthOne * TWO_PI;
  var y1 = sin(angle)* amplitude;
  angle = j / waveLengthTwo * TWO_PI;
  var x1 = sin(angle)* amplitude;
 
  background(255);
  fill(360-abs(360*sin(frameCount/100)),width,width); //the hue is changed using the sin of the frameCount and I divided it by 100 to make it slower
  rect(x,y,80*cos(frameCount/100),80*cos(frameCount/100));//the width and height of the rectangle is defined 
  fill(abs(360*sin(frameCount/100)),width,width);
ellipse(x1,y1,100*sin(frameCount/100),100*sin(frameCount/100));
  }
endShape();
pointCount++;
}