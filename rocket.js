// The following 25 lines of code was added by courtesy of Garrit Schaap
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

function draw() {
  createCanvas(500, 800);
  noStroke();
  background(0, 0, 0);

  for (let index in starX) {
    fill(255, 255, 255, Math.abs(Math.sin(starAlpha[index])) * 255);
    ellipse(starX[index], starY[index], 2);
    starAlpha[index] = starAlpha[index] + 0.02;
  }

  rocket(230, 200);
}

function rocket(x, y) {
  push();
  translate(x, y);

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
}
