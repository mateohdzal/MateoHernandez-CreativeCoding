var a= 160;
var b=120;
function setup() {
  createCanvas(350, 480);
}

function draw() {
  //Black background
  background(17,18,64);

  fill(247,243,223);
  noStroke();
  triangle(0, 0, 0, a, a,0);
  
  
  fill(247,243,223);
  noStroke();
  triangle(350,480,350,480-a,350-a,480);
  
  fill(247,243,223);
  noStroke();
  rect(80,80,b,b);  
  
  fill(247,243,223);
  noStroke();
  rect(350-80-b,480-80-b,b,b);
  
  fill(247,243,223);
  noStroke();
  quad(80,height,0,height-80,0,height-80-125,80,height-120);
  
  fill(247,243,223);
  noStroke();
  quad(width-80,0,width-80,120,width,120+80,width,80);

  // Recreation of a paint:
  // artist: Alfredo Volpi
  // Title: Sem título
  // Date: 1950s
  // Credit Line: The Adolpho Leirner Collection of Brazilian Constructive Art, museum purchase funded by the Caroline Wiess Law Accessions Endowment Fund
  // Link: https://www.google.com/culturalinstitute/beta/u/0/asset/sem-t%C3%ADtulo/WAGizd-L5fPK_g

}