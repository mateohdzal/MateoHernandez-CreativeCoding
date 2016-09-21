/**
 * Kevin's notes: nice work.  I'd recommend using more descriptive variable names since they are easier
 * for others to read when they see your code.  Other than that nice work!
 */

  var dry1=250;
  var dry2=500;
  var c=10;
var drx2i=250;

function setup() {
  createCanvas(500, 500);
  background(255); //Background is white
  



 //Here I create a loop that generate the vertical lines
for( var x = 0;x <= 500; x += 10) { 
  line(x, 0, x, 500);
}
//Now, I create horizontal lines just for the 2nd quarter of the square surface
for( var y = 0;y <= 250; y += 10) {
  line(250, y, 500, y);
}
//This is the 3rd and 4th part of the square with horizontal lines
for( var y = 250;y <= 500; y += 10) {
  line(0, y, 500, y);
}




//this is the code for the diaginal right lines
for( var drx = 10;drx <= 500+250; drx += 10) {
  var drx1=drx;
  var drx2=drx;
  line(drx1, dry1, drx2-250, dry2);
  
}




//In this code I draw the top right half of the square 
for( var drx = 250;drx <= 500+250; drx += 10) {
  var drx1=drx;
  var drx2=drx;
  line(drx1, dry1, drx2+250, dry2);
}



  for( var dry5 = 490;dry5 >=260; dry5 -= 10) {
  drx2i=drx2i+(c);
  //since dry15 is the same as dry5, you can just use dry5 in your argument in line()
  var dry15=dry5;
  var dry25=500;
  line(250, dry15, drx2i, 500);
}



 
}

function draw() {

}
