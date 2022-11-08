

let xoff = 0.0;
let yoff = 0.0;
let xincrement = 0.01;
let yincrement = 0.015;
let palette = ["#736384","#cf9d51", "#d36f66", "cd2e1a", "#003471"];


function setup() {
  
    createCanvas(windowWidth, windowHeight);
    // background(223, 217, 214);
    noStroke();
    frameRate(45);
    margin = min(windowWidth, windowHeight) / 100;



}

function draw() {
    let c = color(random(palette));
    fill(223, 217, 214, 30);
    rect(0, 0, width, height);

    let x1 = noise(xoff) *  200;
    let y1 = noise(yoff * .31) * 1400;

    let x2 = noise(xoff) * 1800;
    let y2 = noise(yoff* .1) * 1200;

    let x3 = noise(xoff * .21) * 900;
    let y3 = noise(yoff* .33) * 1600;

    let x4 = noise(xoff) * 1200;
    let y4 = noise(yoff* .25) * 1200;
  

  xoff += xincrement;
  yoff += yincrement;

  let radius = random (2, 10);
//purple dot
  fill(palette[0]);
  ellipse(x1, y1, 5, 5);

//yellow dot
  fill(palette[1]);
  ellipse(x2, y2, 6, 13);

//red dot
  fill(palette[2]);
  ellipse(x3, y3, 9, 12);

//blue dot
  fill(palette[4]);
  ellipse(x4, y4, 7, 10);

//black dot
fill('black');
ellipse(x1, y3, 4, 9);
}





//outside of the setup and draw functions (which are automatically called) - the rest of your code here is plain old javascript