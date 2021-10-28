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
    // translate(page_offset, 0, 0);
  }
}

function setupCartridgeMaterial() {
  specularMaterial(500);
  fill(95, 95, 120);
  shininess(3); // 5
}

function drawExhibit(wave_offset) {
  // create model
  drawCartridge(wave_offset);
  // sticker
  drawSticker();
}

function drawCartridge(wave_offset) {
  // oscillation
  const time_ratio = (frameCount % hover_period_in_frames) / hover_period_in_frames;
  const sin_offset = time_ratio * 2 * PI;
  let translation_y = sin(wave_offset * 10 + sin_offset); // 10 frame offset
  // cartridge
  translate(0, translation_y, 0);
  model(cartridge);
}

function drawSticker() {
  const height = box_scale * 0.402;
  const width = box_scale * 0.733;
  const depth = box_scale * (0.162 + 0.001);
  texture(sticker_image_default);
  box(width, height, depth);
}







