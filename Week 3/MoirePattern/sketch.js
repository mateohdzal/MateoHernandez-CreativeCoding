var a1=400;
var a2=300;
var a3=450;
var a4=10;
var c1=20;
function setup() {
  createCanvas(1000,1000);
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