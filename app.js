var vid;
var counter = 0;
var bgOpacity;
var tintVar;
var tintVar2
var posterizeVar;
var imgPosX;
var imgPosY;
var imgWidth;
var imgHeight;
var imgWidth2;
var imgHeight2;
var rotationVar;
var rotationVar2;


function setup() {
  createCanvas(windowWidth, windowHeight);
  //load camera video & hide it
  vid = createCapture(VIDEO);
  vid.size(width, height);
  vid.hide();
  //when loaded start the video with no effects other than party effect
  noTouching();
}

function draw(){
  let keyDown;

  if (keyIsDown(LEFT_ARROW)) {
    keyDown = 3;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    keyDown = 4;
  }

  if (keyIsDown(UP_ARROW)) {
    keyDown = 5;
  }

  switch (keyDown) {
  case 3:
    alcoholActive();
    break;
  case 4:
    lsdActive();
    break;
  case 5:
    weedActive();
    break;
  default:
    noTouching();
}
}


//resize canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

//not touching the object anymore returns to regular party video
function noTouching(){
  background(0);
  imageMode(CENTER);
  //here
  pixelDensity(0.3);
  //color filter
  tint(random(100,255),0,random(120,255));
  //draw the live video
  image(vid, width/2, height/2, width, height);
}

//lsd active
function lsdActive(){
  background(0, 20);
  //color filter
  tint(random(0,255),0,random(120,255), 180);
  //draw the live video
  image(vid, width/2, height/2, random(width, width*2), random(height, height*2));
  filter(POSTERIZE, random(2,18));
}

//alcohol active
function alcoholActive(){
  background(0);
  //here
  pixelDensity(0.3);
  //color filter
  tint(random(100,255),0,random(120,255));
  //draw the live video
  image(vid, width/2, height/2, width, height);
  filter(BLUR, random(0.3,5.5));
  //layer 1
  push();
    tint(255, 50);
    rotate(PI/random(10,200));
    image(vid, width/2, height/2, random(width, width+100), random(height, height+100));
  pop();
}

//weed active
function weedActive(){
 background(0);
  pixelDensity(0.3);
    filter(BLUR, random(0.3,5.5));
  push();
    translate(width / 2, height / 2)
    imageMode(CENTER);
       tint(random(100,255),0,random(120,255), 180);
    counter+= 4;
    filter(BLUR, random(0.3,5.5));
    filter(POSTERIZE, 8);
    rotate((PI+counter)*0.03);
    image(vid,0, 0, width*3, height*3);
      rotate((PI-counter)*0.02);
  tint(random(100,255),0,random(120,255), 100);
     image(vid,0, 0, width*3.3, height*3.3);
  pop();
}
