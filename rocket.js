function backGroud() {
  createCanvas(500, 800);
  background(255, 255, 255);
}

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
  noStroke();
  background(0, 0, 0);

  for (let index in starX) {
    fill(255, 255, 255, Math.abs(Math.sin(starAlpha[index])) * 255);
    ellipse(starX[index], starY[index], 2);
    starAlpha[index] = starAlpha[index] + 0.02;
  }
}
