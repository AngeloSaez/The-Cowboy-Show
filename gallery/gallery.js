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
  drawExhibits();
}

function drawExhibits() {
  setupCartridgeMaterial();
  for (var i = 0; i < project_count; i++) {
    drawCartridge(i);
    // translate(page_offset, 0, 0);
  }
}

function setupCartridgeMaterial() {
  specularMaterial(500);
  fill(95, 95, 120);
  shininess(3); // 5
}

function drawCartridge(wave_offset) {
  // oscillation
  const time_ratio = (frameCount % hover_period_in_frames) / hover_period_in_frames;
  const sin_offset = time_ratio * 2 * PI;
  let translation_y = sin(wave_offset * 10 + sin_offset);
  // scale calculation
  const p5js_cartridge_size = 16;
  const desired_cartridge_size = p5js_cartridge_size * box_scale;
  let translation_x = desired_cartridge_size * -0.5;
  // create model
  translate(translation_x, translation_y, 0);
  scale(box_scale);
  model(cartridge);
  // reset transform
  translate(-translation_x, -translation_y, 0);
  scale(1.0);
}







