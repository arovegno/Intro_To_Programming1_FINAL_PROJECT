// code allows user to press a button and create a new "stained glass" with unique filtering.based on image filter project but expanded significantly


// declaring image variables
let img;
let img2;
let img3;
let img4;
let img5;
// sets size of "region" which is a slice of an image
let regionSize = 90;
// sets the max offset value. high value = further spacing
let offsetMax = 1000;
//declaring buttons
let button1;

let button2;

let button3;

let button4; 

let button5; 
//loading images into sketch
function preload() {
  img = loadImage('1.jpg');
  img2 = loadImage('3.JPG');
  img3 = loadImage('DARK 1.png');
  img4 = loadImage('4.png');
  img5 = loadImage('5.JPG');

}

function setup() {
  createCanvas(img.width * 0.5, img.height * 0.5);
  
  //declaring name, position, and function of each button
  button1 = createButton('THRESHOLD');
  button1.position (0,0);
  button1.mousePressed(changeFilter1);
  
  button2 = createButton('DILATE');
  button2.position (100,0);
  button2.mousePressed(changeFilter2);
  
  button3 = createButton('ERODE');
  button3.position (163, 0);
  button3.mousePressed(changeFilter3);
  
  button4 = createButton('INVERT');
  button4.position (228, 0);
  button4.mousePressed(changeFilter4);
  
  button5 = createButton('POSTERIZE');
  button5.position (294, 0);
  button5.mousePressed(changeFilter5);
  
  
  //reset image orientation to center
  imageMode(CENTER);
  
  //display image at canvas center with canvas width and height
  image(img, width/2, height/2, width, height);
  
  img = get();
  
  image(img, 0, 0);
  
  print('Intro to Programming 1, Rovegno FINAL PROJECT, 5_5_2023');
}

function draw() {
  //randomize point for region to be drawn: multiplied by aribraty value for added randomness
  
  let rX = random(width *0.11);
  let rY = random(height *0.99);
  
  //selects random slice of image to reproduce and then is filtered gray
  let region = get(rX,rY, regionSize *0.29, regionSize);
  
  //"generate a random position near our sampling position" 
  let offsetX = random(-offsetMax *4, offsetMax *10);
  let offsetY = random(-offsetMax *0.9, offsetMax *1.1);
  
  //redraw image region near its original position
  image(region, rX + offsetX/ 3.5, rY + offsetY *0.3);
  
  
  blendMode(OVERLAY);

}

// function for button 1 changes bg image and applies threshold filter to both bg and slices
function changeFilter1() {
  clear();
  imageMode(CENTER);
  
  image(img3, width/2, height/2, width, height);
  
  img3 = get();
  
  image(img3, 0, 0);
  
  filter (GRAY, 0.1);
   
  // blendMode(THRESHOLD);
  
  let rX = random(width *0.11);
  let rY = random(height *0.99);
  
  //selects random slice of image to reproduce and then is filtered gray
  let region = get(rX,rY, regionSize *0.29, regionSize);
  // region.filter(BLUR);

  
  //"generate a random position near our sampling position" 
  let offsetX = random(-offsetMax *4, offsetMax *10);
  let offsetY = random(-offsetMax *0.9, offsetMax *1.1);
  
  //redraw image region near its original position
  image(region, rX + offsetX/ 3.5, rY + offsetY *0.3);
  
  region.filter(THRESHOLD);
  blendMode(OVERLAY);

}

//function for button 2 changes bg image and applies dilate filter 
function changeFilter2() {
  clear();
  imageMode(CENTER);
  
  //display image at canvas center with canvas width and height
  image(img, width/2, height/2, width, height);
  
  img = get();
  
  image(img, 0, 0);
  filter (DILATE);
  
  blendMode(LIGHTEST);
  //inverts image color (steady)
  
  let rX = random(width *0.11);
  let rY = random(height *0.99);
  
  //selects random slice of image to reproduce and then is filtered gray
  let region = get(rX,rY, regionSize *0.29, regionSize);
  // region.filter(BLUR);

  
  //"generate a random position near our sampling position" 
  let offsetX = random(-offsetMax *4, offsetMax *10);
  let offsetY = random(-offsetMax *0.9, offsetMax *1.1);
  
  //redraw image region near its original position
  image(region, rX + offsetX/ 3.5, rY + offsetY *0.3);
  
  
  region.filter(DILATE);
  
  blendMode(OVERLAY);
  
}
// function for button 3 applies erode filter 
function changeFilter3() {
  clear();
  imageMode(CENTER);

  image(img4, width/2, height/2, width, height);
  
  img4 = get();
  
  image(img4, 0, 0);
  filter (ERODE);
  blendMode(SCREEN);
  
  let rX = random(width *0.11);
  let rY = random(height *0.99);
  
  //selects random slice of image to reproduce and then is filtered gray
  let region = get(rX,rY, regionSize *0.29, regionSize);
  // region.filter(BLUR);

  
  //"generate a random position near our sampling position" 
  let offsetX = random(-offsetMax *4, offsetMax *10);
  let offsetY = random(-offsetMax *0.9, offsetMax *1.1);
  
  //redraw image region near its original position
  image(region, rX + offsetX/ 3.5, rY + offsetY *0.3);
  
  region.filter(ERODE);
  blendMode(OVERLAY);
}
// function for button 4 applies inversion filter
function changeFilter4() {
  clear();
  imageMode(CENTER);
  
  image(img2, width/2, height/2, width, height);
  
  img2= get();
  
  image(img2, 0, 0);
  
  filter(INVERT);
  
  let rX = random(width *0.11);
  let rY = random(height *0.99);
  
  //selects random slice of image to reproduce and then is filtered gray
  let region = get(rX,rY, regionSize *0.29, regionSize);
  // region.filter(BLUR);

  
  //"generate a random position near our sampling position" 
  let offsetX = random(-offsetMax *4, offsetMax *10);
  let offsetY = random(-offsetMax *0.9, offsetMax *1.1);
  
  //redraw image region near its original position
  image(region, rX + offsetX/ 3.5, rY + offsetY *0.3);
  blendMode(OVERLAY);
  
}
// function for button 5 applies posterize filter
function changeFilter5() {
  clear();
  imageMode(CENTER);
  
  image(img5, width/2, height/2, width, height);
  
  img5= get();
  
  image(img5, 0, 0);
  
  filter(POSTERIZE, 255);
  
  let rX = random(width *0.11);
  let rY = random(height *0.99);
  
  //selects random slice of image to reproduce and then is filtered gray
  let region = get(rX,rY, regionSize *0.29, regionSize);
  
  //"generate a random position near our sampling position" 
  let offsetX = random(-offsetMax *4, offsetMax *10);
  let offsetY = random(-offsetMax *0.9, offsetMax *1.1);
  
  //redraw image region near its original position
  image(region, rX + offsetX/ 3.5, rY + offsetY *0.3);
  region.filter(POSTERIZE, 255);
  blendMode(OVERLAY);
  

}