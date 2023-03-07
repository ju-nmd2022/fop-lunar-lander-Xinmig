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

// function keyPressed(){
//   if (keyCode===(blankspace)){
let isGameActive = true;
// }
// }

// The following 29 lines of code was added by courtesy of Garrit Schaap
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

let rocketY = 80;
//火箭的高低
let fuel = 200;
//燃料
let gravity = 6;
//重力
let antigravity = 5;
//反重力
let loseGame = "You lose";

let winGame = "You Win";

let crash = "You crashed";

let start;

let restFuel = "Rest fuel:";

let nameOfGame = "Lunar Lander";

let introduction = "Press Uparrow to strat";

function gameStart() {
  if (isGameActive) {
    nameOfGame = " ";
    introduction = " ";
    rocketY = rocketY + gravity;
    if (keyIsDown(38)) {
      textSize(20);
      text("key working", 20, 250);
      rocketY = rocketY - antigravity;
      // gravity = 1;
      fuel = fuel - 2;
    }
    if (rocketY > 644.5) {
      rocketY = 644.5;
      isGameActive = false;
    }
    if (fuel <= 0) {
      fuel = 0;
      antigravity = 0;
      rocketY = rocketY + gravity;
      isGameActive = false;
      gravity = 6;
    }
  }
}

function landing() {
  rocketY = rocketY + gravity;
  if (rocketY > 644.5) {
    rocketY = 644.5;
    isGameActive = false;
  }
}

function draw() {
  createCanvas(500, 800);
  background(0, 0, 0);

  for (let index in starX) {
    fill(255, 255, 255, Math.abs(Math.sin(starAlpha[index])) * 255);
    ellipse(starX[index], starY[index], 2);
    starAlpha[index] = starAlpha[index] + 0.02;
  }

  rocket(245, rocketY);
  ground();

  textSize(20);
  text(restFuel + fuel, 2, 25);

  textSize(40);
  fill(255, 255, 255);
  text(nameOfGame, 150, 400);

  textSize(30);
  text(introduction, 120, 500);

  if (keyIsDown(32)) {
    start = true;
  }

  if (start === true) {
    gameStart();
  }

  if (isGameActive === false) {
    if (rocketY < 644.5) {
      landing();
    }
    if (gravity === 1 && rocketY === 644.5) {
      textSize(40);
      text(winGame, 150, 400);
    } else if (gravity > 1 && rocketY === 644.5) {
      textSize(40);
      text(crash, 150, 400);
    } else {
      textSize(40);
      text(loseGame, 150, 400);
    }
  }
}
