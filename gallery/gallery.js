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
  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;
  // Scenery
  background(40);
  noStroke();
  ambientLight(cartridge_color);
  pointLight(136, 111, 171, locX, locY, point_light_z);
  // Camera zoom out
  translate(0, 0, -800);
  // Exhibits
  drawAllExhibits();
}

function drawAllExhibits() {
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
  let y_off = sin(wave_offset * 10 + sin_offset) * 0.125; // 10 frame offset, other float is scale
  translate(0, y_off, 0);
  // create models
  drawCartridge(y_off);
  drawSticker(y_off);
  // reset
  scale(1.0);
  translate(0, y_off, 0);
}

function drawCartridge(y_off) {
  // material setup
  specularMaterial(100);
  shininess(10);
  // draw
  model(cartridge);
}

function drawSticker() {
  // calculate dimensions
  const p5js_scale = 2.0;
  const height = 0.402 * p5js_scale;
  const width = 0.733 * p5js_scale;
  const depth = (0.162 + 0.001) * p5js_scale;
  // gloss
  specularMaterial(120, 120, 120, 5);
  shininess(1);
  box(width + 0.1, height + 0.1, depth + 0.1);
  // sticker
  texture(sticker_image_default);
  box(width, height, depth);
}







