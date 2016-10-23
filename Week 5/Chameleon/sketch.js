
function setup() {
    createCanvas(800,800);
}

function draw() {
  background(0);
  chameleon(mouseX,mouseY,width);
}

function chameleon(myColor,move,cSize){
  var eyesSize=200;
  var positionX=width/2;
  var positionY=width/2;
  var scalemoveY=400;
  var moveY=(move-positionY);
  var scalemoveX=400;
  var moveX=(myColor-positionX);
  colorMode(HSB,cSize);
  fill(myColor,cSize,cSize)
  while(eyesSize>25){
    
  ellipse(positionX-160+(moveX/scalemoveX), positionY+(moveY/scalemoveY), eyesSize, eyesSize);
  
  ellipse(positionX+160+(moveX/scalemoveX), positionY+(moveY/scalemoveY), eyesSize, eyesSize);
  
  eyesSize=eyesSize-25;
  scalemoveY=scalemoveY-60;
  scalemoveX=scalemoveX-60;
  
  println(moveY);
  }
}


