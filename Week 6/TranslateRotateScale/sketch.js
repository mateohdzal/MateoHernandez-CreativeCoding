function setup() {
  createCanvas(500,500);
  colorMode(HSB,8);
}

function draw() {
   translate(width/2,height/2); //translate the object to the center of the canvas
  for(var j=0;j<100;j++){
  for(var i =0; i < 8; i++){
    
    push();
    rotate((TWO_PI * i / 8)+(frameCount%j/100)); //rotate and move the object
    scale(2,2);
    fill(i,8,8);
    stroke(i,8,8);
    myobject();  // this is the object that i create
    ellipse(0,15,8,8)
    pop();
  }
 
  }
  
 
}


function myobject(){
line(0,25,0,50);
  line(0,50,15,40);
  line(15,40,0,80);
  line(0,80,20,65);
  line(20,65,0,100);
}