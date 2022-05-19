var canvas;
var w = 2500;
var h = 2500;
var scl = 40;
var terrain = [];
var wave = 0;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.position(0, 0);
  canvas.style("z-index", "-2");
  cols = w / scl;
  rows = h / scl;
  var yoff = 0;
  var xoff = 0;

  for (var y = 0; y < cols; y++) {
    terrain[y] = [];

    for (var x = 0; x < rows; x++) {
      terrain[y][x] = 0;
    }
  }
  freeze();
  unfreeze();
  
}
function freeze() {
  var frButton = createButton('unfreeze');
  frButton.position(windowWidth - 80, windowHeight - 35);
  frButton.mouseClicked(unfreeze);
  noLoop();
}
function unfreeze() {
  loop();
  var unButton = createButton('freeze');
  unButton.position(windowWidth - 140, windowHeight - 35);
  unButton.mouseClicked(freeze);

}

function draw() {
 
  wave -= 0.01 + (mouseY / 20000);

  // seawave because of yoff

  var yoff = wave;

  var xoff = 0;
  for (var y = 0; y < cols; y++) {
    xoff = 0;
    for (var x = 0; x < rows; x++) {
      terrain[y][x] = map(noise(xoff, yoff), 0, 1, (mouseY / 250) - 10, (mouseY / 20) + 10);
      xoff += 0.2;
    }
    yoff += 0.3;
  }

  background("#334B82");

  stroke("#1F2D4F");
  strokeWeight(1);
  fill("#1a2235");

  translate(0, -200);
  rotateX(PI / 3);
  translate(-windowWidth / 1.3 , -windowHeight / 1.3);

  for (var y = 0; y < cols; y++) {
    beginShape(TRIANGLE_STRIP);
    for (var x = 0; x < rows; x++) {
      vertex(x * scl, y * scl, terrain[x][y]);
      vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
    }
    endShape();
  }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}


