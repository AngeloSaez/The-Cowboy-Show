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
function calculateMouseProximity(index) {
  var cartridges_x = [];
  var cartridges_y = 0;
  var anchor_x = (-1 * total_width / 2.0) * entry_width;
  var dx = Math.abs(anchor_x - mouseX);
  var dy = Math.abs(0 - mouseY);
  return Math.sqrt( dx * dx + dy * dy);
}

function calculateExhibitZ(mouse_prox) {
  let max_z = 30;
  let radius = box_size;
  let ratio = min(radius, mouse_prox) / radius;
  let result = ratio * max_z;
  return result;
}

function drawIntroState() {
  // Scenery
  background(40);
  noStroke();
  ambientLight(ambient_color);
  pointLight(100, 50, 108, 80, 0, 10000);
  // Exhibits
  centerExhibits();
  drawExhibits();
}

function centerExhibits() {
  const translate_x = -1 * (total_width / 2.0);
  translate(translate_x, 0, 0);
}

function drawExhibits() {
  setupCartridgeMaterial();
  for (var i = 0; i < project_count; i++) {
    // Calculate Z offset 
    let mouse_proximity = calculateMouseProximity(i);
    // let z_off = calculateExhibitZ(mouse_proximity);
    let z_off = 0;
    translate(0, 0, z_off);
    // Draw cartridge
    drawCartridge(i);
    var translate_x = ((i + 1) % row_width != 0) ? entry_width : page_offset;
    translate(translate_x, 0, 0);
    // Reset Z
    translate(0, 0, -1 * z_off);
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
  translate(0, sin(wave_offset * 10 + sin_offset), 0);
  // scale calculation
  const p5js_cartridge_ssize = 16;
  const desired_cartridge_size = 256;
  translate(-1 * desired_cartridge_size / 2, 0, 0);
  scale(box_scale);
  // create model
  model(cartridge);
  // reset transform
  translate(0, sin(wave_offset * -10 + sin_offset), 0);
  translate(1 * desired_cartridge_size / 2, 0, 0);
  scale(1.0);
}







