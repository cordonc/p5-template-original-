let xoff = 0.0;
let yoff = 0.0;
let xincrement = 0.0075;
let yincrement = 0.013;
let palette = [
  "#736384",
  "#cf9d51",
  "#d36f66",
  "#cd2e1a",
  "#003471",
  "#BA9697",
];


let PucolorParam;
let YcolorParam;
let PicolorParam;
let BcolorParam;
let WcolorParam;

function setup() {
  createCanvas(windowWidth, 650);
  noStroke();
  frameRate(25);
  margin = min(1800, 650) / 100;

/* RADIUS PARAMETERS*/

 //Red Radius Parameter
 createP();
 RradiusParam = createSlider(3, 8, 5, .5);
 RradiusParam.position (windowWidth/2 - 1050, height + 145);


 //Black Radius Parameter
 createP();
 BLradiusParam = createSlider(5, 15, 5, .25);
 BLradiusParam.position (windowWidth/2 - 800, height + 145);

  //Purple Radius Parameter
  createP();
  PuradiusParam = createSlider(noise * 6, noise * 65, 19, .5);
  PuradiusParam.position (windowWidth/2 - 500, height + 145);


  //Yellow Radius Parameter
  createP();
  YradiusParam = createSlider(noise * 6, noise * 65, 55, .5);
  YradiusParam.position (windowWidth/2 - 200, height + 145);

  //Pink Radius Parameter
  createP();
  PiradiusParam = createSlider(noise * 6, noise * 65, 45, .5);
  PiradiusParam.position(windowWidth/2 + 100, height + 145);


  //Blue Radius Parameter
  createP();
  BradiusParam = createSlider(noise * 6, noise * 65, 35, .5);
  BradiusParam.position(windowWidth/2 + 400 , height + 145);


  //White Radius Parameter
  createP();
  WradiusParam = createSlider(noise * 6, noise * 65, 45, .5);
  WradiusParam.position(windowWidth/2 + 700, height + 145);

 
 


/* COLOR PICKERS*/

//red
createP();
RcolorParam = createColorPicker('red');
RcolorParam.position(windowWidth/2 - 1050, height + 100);

  //black
  createP();
 BLcolorParam = createColorPicker('black');
 BLcolorParam.position(windowWidth/2 - 800, height + 100);

  //purple
  createP();
  PucolorParam = createColorPicker("#736384");
  PucolorParam.position (windowWidth/2 - 500, height + 100);

  //yellow
  createP();
  YcolorParam = createColorPicker("#cf9d51");
  YcolorParam.position(windowWidth/2 - 200, height + 100);


  //pink
  createP();
  PicolorParam = createColorPicker("#d36f66");
  PicolorParam.position(windowWidth/2 + 100, height + 100);

  

  //blue
  createP();
  BcolorParam = createColorPicker("#003471");
  BcolorParam.position(windowWidth/2 + 400 , height + 100);


  //white
  createP();
  WcolorParam = createColorPicker("#BA9697");
  WcolorParam.position(windowWidth/2 + 700, height + 100);

  

 

  
}

function draw() {
  fill(223, 217, 214, 20);
  rect(0, 0, width, height); 
  
  

  //purple dot
  let x1 = noise(xoff * 0.4) * 600;
  let y1 = noise(yoff * 0.33) * height;

  //yellow dot
  let x2 = noise(xoff * .6) * width;
  let y2 = noise(yoff) * height;

  //pink dot
  let x3 = noise(xoff * .3) * width;
  let y3 = noise(yoff * .4) * height;

  //blue dot
  let x4 = noise(xoff * .5) * width;
  let y4 = noise(yoff * 1) * 600;

  //white dot
  let x5 = noise(xoff) * 800;
  let y5 = noise(yoff) * height;

  //red dot
  let x6 = noise(xoff) * 1200;
  let y6 = noise(yoff) * height;

  xoff += xincrement;
  yoff += yincrement;


  /* RADIUS VALUES */
  let puVal = PuradiusParam.value();
  let yVal = YradiusParam.value();
  let piVal = PiradiusParam.value();
  let buVal = BradiusParam.value();
  let whVal = WradiusParam.value();
  let bVal = BLradiusParam.value();
  let rVal = RradiusParam.value();

/* COLOR PICKER */
  let purpCol = color(PucolorParam.value());
  let yellCol = color(YcolorParam.value());
  let pinkCol = color(PicolorParam.value());
  let blueCol = color(BcolorParam.value());
  let whiteCol = color(WcolorParam.value());
  let redCol = color(RcolorParam.value());


  //red dots
  fill(redCol);
  ellipse(x6, y6, rVal, rVal);

  fill(redCol);
  ellipse(x6, y3, rVal, rVal);

  fill(redCol);
  ellipse(x6, y1, rVal, rVal);


  
  //purple dot
  fill(purpCol);
  ellipse(x1, y1, puVal, puVal);

  //yellow dot
  fill(yellCol);
  ellipse(x2, y2, yVal, yVal);
  //pink dot
  fill(pinkCol);
  ellipse(x3, y3, piVal, piVal);

  //blue dot
  fill(blueCol);
  ellipse(x4, y4, buVal, buVal);

  //white dot
  fill(whiteCol);
  ellipse(x5, y5, whVal, whVal);


  //BLACK DOTS
  //black dot 1
  fill('black');
  ellipse(x1, y2, bVal, bVal);
  //black dot 2
  fill('black');
  ellipse(x2, y3, bVal, bVal);
  //black dot 3
  fill('black');
  ellipse(x3, y5, bVal, bVal);
  //black dot 4
  fill('black');
  ellipse(x5, y3, bVal, bVal);
  //black dot 5
  fill('black');
  ellipse(x4, y2, bVal, bVal);
  //black dot 6
  fill('black');
  ellipse(x6, y4, bVal, bVal);
  
  
}

//outside of the setup and draw functions (which are automatically called) - the rest of your code here is plain old javascript
  // X-Y AXIS LOCATION CODE
// let xlocationParam;
  // let ylocationParm;
  // slider.position(35, 35);
  // slider.style('width', '80px');

  // //X-Axis Transform Parameter
  // createP("Move Horizontally");
  // xlocationParam = createSlider(0.15, 1, 0.33, 0.01);
  // //Y-Axis Transofrm Parameter
  // createP("Move Vertically");
  // ylocationParam = createSlider(0.15, 1, 0.33, 0.01);