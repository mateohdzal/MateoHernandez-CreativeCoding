//Create variables for each square
var a1 = 45;
var a2 = 90;
var a3 = 180;
var a4 = -90;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  //Black background
  background(0);
  //translate the origin point to the center of the canvas
  translate(width / 2, width / 2);

  //rotate the square 
  rotate(radians(a1));
  //fill the square with black
  fill(0);
  //create the square with the same dimensions as the canvas
  rect(0, 0, height, height);

  //repeat the process from the first square changing the color and angle.
  rotate(radians(a2));
  fill(247, 195, 22);
  rect(0, 0, height, height);

  //repeat the process from the first square changing the color and angle.
  rotate(radians(a3));
  fill(247, 195, 22);
  rect(0, 0, height, height);

  //repeat the process from the first square changing the color and angle.
  rotate(radians(a4));
  fill(247, 195, 22);
  rect(0, 0, height, height);
  
  // Recreation of a paint:
  // artist: Mira Schendel. 
  // Title: Sem título
  // Date: 1962
  // Credit Line: The Adolpho Leirner Collection of Brazilian Constructive Art, museum purchase
  // Medium: Oil on canvas
  // Link: https://www.google.com/culturalinstitute/beta/u/0/asset/sem-t%C3%ADtulo/zAEQNuhXY0O8kw

}