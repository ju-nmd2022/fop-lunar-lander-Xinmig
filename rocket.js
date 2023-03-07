//the rocket
function rocket(x, y) {
  push();
  translate(x, y);
  scale(0.5);

  //body
  push();
  stroke(139, 137, 137);
  fill(205, 201, 201);
  rect(0, 0, 45, 100);
  pop();

  //body shadow
  push();
  stroke(69, 74, 77);
  fill(119, 122, 125);
  rect(30, 0, 15, 100);
  pop();

  //head
  push();
  stroke(205, 102, 0);
  fill(255, 127, 0);
  triangle(0, 0, 22.5, -50, 46, 0);
  pop();

  //head shadow
  push();
  stroke(139, 69, 0);
  fill(205, 102, 0);
  triangle(30, 0, 22.5, -50, 45.5, 0);
  pop();

  //side left
  push();
  stroke(139, 137, 137);
  fill(205, 201, 201);
  quad(-10, 35, 0, 30, 0, 100, -10, 100);
  pop();

  //side right
  push();
  stroke(69, 74, 77);
  fill(119, 122, 125);
  quad(45, 30, 55, 35, 55, 100, 45, 100);
  pop();

  //bottom
  push();
  stroke(34, 39, 43);
  fill(51, 55, 59);
  rect(-10, 100, 65, 15);
  pop();

  pop();
}

//the ground
function ground() {
  noStroke();
  fill(199, 200, 201);
  rect(0, 700, 500, 100);

  push();
  translate(0, 700);
  noStroke();
  fill(168, 168, 168);
  ellipse(120, 25, 70, 20);
  ellipse(200, 60, 130, 40);
  ellipse(400, 45, 95, 30);
  pop();
}

//when it starts
let isGameActive = true;

// The following 24 lines of code was added by courtesy of Garrit Schaap
let starX = [];
let starY = [];
let starAlpha = [];

for (let i = 0; i < 200; i++) {
  const x = Math.floor(Math.random() * 500);
  const y = Math.floor(Math.random() * 800);
  const alpha = Math.random();

  starX.push(x);
  starY.push(y);
  starAlpha.push(alpha);
}

//location of rocket
let rocketY = 80;

//the fuel
let fuel = 200;

//the gravity, the speed for falling
let gravity = 6;

//the power slow the falling speed
let antigravity = 5;

//text when lose game
let loseGame = "You lose";

//text when win the game
let winGame = "You Win";

//when the game start
let start;

//how much left
let restFuel = "Rest fuel:";

//the name
let nameOfGame = "Lunar Lander";

//before start
let introduction = "Press Spase to strat\nand use uparrow to\npreventing crash";

//after start
function gameStart() {
  //start performing immediately
  if (isGameActive) {
    //let text disappaer
    nameOfGame = " ";
    introduction = " ";
    //start fall, change the location
    rocketY = rocketY + gravity;
    //when up is pressed
    if (keyIsDown(38)) {
      //slow down
      rocketY = rocketY - antigravity;
      //fuel reduction
      fuel = fuel - 2;
    }
    //when it get to the grund
    if (rocketY > 644.5) {
      rocketY = 644.5;
      isGameActive = false;
      gravity = 0;
    }
    //run out of the fuel
    if (fuel <= 0) {
      fuel = 0;
      antigravity = 0;
      rocketY = rocketY + gravity;
      isGameActive = false;
      gravity = 6;
    }
  }
}

//after out of fuel
function landing() {
  rocketY = rocketY + gravity;
  if (rocketY > 644.5) {
    rocketY = 644.5;
    isGameActive = false;
  }
}

function draw() {
  //the background
  createCanvas(500, 800);
  background(0, 0, 0);

  for (let index in starX) {
    fill(255, 255, 255, Math.abs(Math.sin(starAlpha[index])) * 255);
    ellipse(starX[index], starY[index], 2);
    starAlpha[index] = starAlpha[index] + 0.02;
  }

  //draw the picture
  rocket(245, rocketY);
  ground();

  //useful text
  textSize(20);
  text(restFuel + fuel, 2, 25);

  textSize(40);
  fill(255, 255, 255);
  text(nameOfGame, 150, 400);

  textSize(30);
  text(introduction, 120, 500);

  //klick space for start
  if (keyIsDown(32)) {
    start = true;
  }

  //after start the other function start to action too
  if (start === true) {
    gameStart();
  }

  //these are all for the final determination
  if (isGameActive === false) {
    if (rocketY < 644.5) {
      landing();
    }
    if (gravity === 0 && rocketY === 644.5) {
      textSize(40);
      text(winGame, 150, 400);
    } else if (gravity > 1 && rocketY === 644.5) {
      textSize(40);
      text(loseGame, 150, 400);
    }
  }
}
