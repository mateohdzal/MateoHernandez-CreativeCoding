var myHue,sat;

function setup() {
  createCanvas(400,400);
}

function draw() {
  noStroke();
colorMode(HSB, width);
for (myHue = 0; myHue < width; myHue++) {
  for (sat = 0; sat < width; sat++) {
    stroke(myHue, sat, sat);
    point(myHue, sat);
  }
}
}