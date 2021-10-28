////////////////////////////////////////////////////////////
// State
let current_state;

////////////////////////////////////////////////////////////
// Setup
function preload() {
  current_state = 0;
  preload_gallery();
}

function setup() {
  createCanvas(canvas_width, canvas_height, WEBGL);
}

////////////////////////////////////////////////////////////
// Draw
function draw() {
  switch (current_state) {
    case c_grid_state:
      drawIntroState();
      break;
  }
}

////////////////////////////////////////////////////////////
// Intro State

function drawIntroState() {
  // Scenery
  background(40);
  noStroke();
  ambientLight(ambient_color);
  pointLight(100, 50, 108, 80, 0, 10000);
  // Exhibits
  drawAllExhibits();
}

function drawAllExhibits() {
  setupCartridgeMaterial();
  for (var i = 0; i < project_count; i++) {
    drawExhibit(i);
  }
}

function drawExhibit(wave_offset) {
  // enlargen models
  scale(256.0);
  // calculate y position and translate
  const time_ratio = (frameCount % hover_period_in_frames) / hover_period_in_frames;
  const sin_offset = time_ratio * 2 * PI;
  let y_off = sin(wave_offset * 10 + sin_offset); // 10 frame offset, other float is scale
  translate(0, y_off, 0);
  // create models
  drawCartridge(y_off);
  drawSticker(y_off);
  // reset
  scale(1.0);
  translate(0, -y_off, 0);
}

function drawCartridge(y_off) {
  // material setup
  specularMaterial(500);
  fill(95, 95, 120);
  shininess(3);
  // draw
  model(cartridge);
}

function drawSticker() {
  // material setup
  specularMaterial(500);
  shininess(15);
  // draw
  const p5js_scale = 2.0;
  const height = 0.402 * p5js_scale;
  const width = 0.733 * p5js_scale;
  const depth = (0.162 + 0.001) * p5js_scale;
  texture(sticker_image_default);
  box(width, height, depth);
}







