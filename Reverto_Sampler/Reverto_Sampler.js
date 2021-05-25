var font1, rand;
const letters= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
var listLength;
function preload(){
  font1 = loadFont('data/Reverto.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  textSize(80);
  noStroke();
  textFont(font1);
  textAlign(CENTER);
  listLength=letters.length;
  //frameRate(12);
}

function draw() {
  rand = int(random(0, listLength-1)); //random(0,60)
  textSize(random(12, 300));
  background(210, 5); //add more alpha to fade it quicker
  text(letters[rand], random(width), random(height));
}
