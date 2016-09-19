function setup() {
  createCanvas(500, 500);
  for( var x = 0;x <= 500; x += 10) { 
  line(x, 0, x, 500);
}
for( var y = 0;y <= 500; y += 10) { 
  line( 0, y, 500,y);
}
  
  var a1=random(500);
  arc(0, a1/2, random(500), a1, radians(270), radians(90));

var a2=random(500);
  arc(0, 500-a2/2, random(500), a2, radians(270), radians(90));

   var a3=random(500);
  arc(500, a3/2, random(500), a3, radians(90), radians(270));
  
   var a4=random(500);
  arc(500, 500-a4/2, random(500), a4, radians(90), radians(270));
  
}

function draw() {
  
}