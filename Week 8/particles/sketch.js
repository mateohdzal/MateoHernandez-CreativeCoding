function Particle(x, y,size,Ehue,r,r2){
    this.Ehue=Ehue;
  	this.size = size;
    this.x = x;
    this.y = y;
    this.r = r;
    this.r2 = r2;
}

var particleSystem = [];

function setup() {
  createCanvas(800,800); 
  background(100);
  colorMode(HSB,100,100,100);
 
  for(var i=0; i < 500; i++){
  	particleSystem.push( new Particle(random(width), random(height),random(10,50),random(100) ,random(-1,1),random(-1,1) ));
  }
  
} 

function draw() {
  background(100);
  
  for(var i=0; i < particleSystem.length; i++){
    fill(color(particleSystem[i].Ehue+map( sin(radians(frameCount*3)), -1, 1, -20, 20),100,100));
    ellipse(particleSystem[i].x, particleSystem[i].y, particleSystem[i].size+map( sin(radians(frameCount+(particleSystem[i].size/2))), -1, 1, -8, 8), particleSystem[i].size+map( sin(radians(frameCount+(particleSystem[i].size/2))), -1, 1, -8, 8));
   particleSystem[i].y=particleSystem[i].y+particleSystem[i].r2;
    particleSystem[i].x=particleSystem[i].x+particleSystem[i].r;
    
  }
  
}