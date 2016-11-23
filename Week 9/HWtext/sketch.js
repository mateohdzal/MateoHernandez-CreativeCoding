var Adj1;
var Noun2;
var words = [];
var WordX = 10;
var WordY = 10;
var WordN = 0;
function preload(){
var lines = "I HEAR the dull low thunder of the guns. Beyond the hills that doze uneasily,A sullen doomful growl that ever runs. From end to end of the heavy freighted sky: A friend of mine writes, squatted on the floor,And scrapes by yellow spluttering candle light.'Ah, hush!' he breathes, and gazes at the door,That creaks on rusty hinge, in pale affright! (No words spoke he, nor I, for well we knew.What rueful things these sounds did tell.)A pause—I hear the trees sway sighing thro'The gloom, like dismal moan of hollow knell,Them out across the dark, and startling me. Bursts forth a laugh, a shout of drunken glee!";    
words = RiTa.tokenize(lines);
}
function setup() {
colorMode(HSB,100,100,100);
createCanvas(500,500);
background(100);
Adj1 = new RiLexicon();
Noun2 = new RiLexicon();
for(var i=0; i < words.length; i++){
text(words[i], WordX, WordY, textWidth(words[i]),20);
if(RiTa.isPunctuation(words[i+1])){
WordX += textWidth(words[i]);
}else{
WordX += 4+textWidth(words[i]);
}
if(WordX > width-50){
WordX = 10;
WordY +=  20;
}
}
}
function mousePressed() {
background(100);
var WordX = 10;
var WordY = 10;
for(var i=0; i < words.length; i++){
if(Adj1.isAdjective( words [i])){
words[i]= Adj1.randomWord("jj");
}
else if(Noun2.isNoun(words [i])){
words[i]= Noun2.randomWord("nn");
}
else {}
}
for(var i=0; i < words.length; i++){
text(words[i], WordX, WordY, textWidth(words[i]),20);
if(RiTa.isPunctuation(words[i+1])){
  WordX += textWidth(words[i]);
}else{
WordX += 4+textWidth(words[i]);
}
if(WordX > width-50){
 WordX = 10;
WordY +=  20;
}
}
}