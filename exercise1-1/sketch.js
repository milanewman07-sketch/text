let raw;
let reviewText = ""; 
let reviewLabel = "";

function preload() {
  raw = loadStrings("assets/imdb_labelled.txt");
}

function setup() {
  createCanvas(600, 600);
  textSize(20);
  textWrap(WORD);  
}

function draw() {
  background(0);

  if (reviewLabel === "1") {
    fill(0, 255, 0); 
  } else if (reviewLabel === "0") {
    fill(255, 0, 0);
  } else {
    fill(255);
  }

  text(reviewText, 20, 40, width - 40);
}

function keyPressed() {

  let line = random(raw);


  let parts = split(line, "\t");

  reviewText = parts[0];
  reviewLabel = parts[1];
}
