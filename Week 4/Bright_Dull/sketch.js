
var h=360;
var myHue;
var Brightness;

function setup() {
  createCanvas(500,500);
}

function draw() {

  colorMode(HSB,h,100,100);

for (myHue = 0; myHue < 100; myHue++) {
  for (Brightness = 0; Brightness < 100; Brightness++) {
    stroke(myHue, 100, Brightness);
    for(i=0;i<5;i++){
      for(j=0;j<5;j++){
    point(5*myHue+i, 5*Brightness+j);
      }
    }
  }
}
}