/**
** Kevin's notes:  This is a very cool sketch.  I really like what you're doing here visually.
Comments inline...
*/

//Consider clearer variable names.  a1 a2, etc.  are not descriptive of their visual role.  Don't
//be afraid to have a longer variable name as long as it represents its purpose in the sketch.
var a1=400;
var a2=300;
var a3=450;
var a4=10;
var c1=20;
function setup() {
  createCanvas(1000,1000);
//consider moving this for loop into your draw loop.
//You'll then need to reset a1,a2,a3,and a4 to their default values above.
//otherwise every draw call will add 3,5,and 8 to each variable respectively.
  for(var i=1;i<=50;i++){
  beginShape();
	vertex(a1,100);
	vertex(400,a2);
	vertex(a3,300);
	vertex(a4,a2);
endShape();
a1+=3;
a2+=5;
a3+=3;
a4+=8;
}



}

function draw() {
// for(var i1=50;i1<=200;i1=i1+10){
//   noFill()
// ellipse(250,200,i1*2,i1);
// } 

// for(var i1=50;i1<=250;i1=i1+4){
//   noFill()
// ellipse(260,160,i1*2,i1*sin(i1));
// } 

// for(var i1=280;i1<=500;i1=i1+4){
//   noFill()
// triangle(i1-30, i1+75, i1+58, i1-20, i1+86, i1+75);
// } 

//These shapes are great, but consider replacing the hard coded numbers with
//variables referencing proportion of width and height of your canvas.  What would happen
//to the sketch if I resized the canvas?
for(var i1=400;i1<=800;i1=i1+4){
  line(i1,300,i1-280,500);
} 

for(var i1=50;i1<=250;i1=i1+4){
   noFill()
 ellipse(600,500,i1,i1);
} 

for(var i1=50;i1<=150;i1=i1+4){
   noFill()
 rect(280, 300, i1, i1, 20);
}

for(var i1=400;i1<=580;i1=i1+4){
  line(i1,50+c1,i1-40,200+c1);
} 

}
