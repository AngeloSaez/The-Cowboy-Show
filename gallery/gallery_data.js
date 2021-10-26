////////////////////////////////////////////////////////////
// Application
let canvas_width; // 480
let canvas_height; // 320
const c_grid_state = 0;
const c_focused_state = 1;
const project_count = 10;

////////////////////////////////////////////////////////////
// Resources
let cartridge;

////////////////////////////////////////////////////////////
// Effects
const row_width = 1;
let page_offset; // 128
let box_scale;
let hover_amplitude; // 16
const hover_period_in_frames = 300;

////////////////////////////////////////////////////////////
// Colors
let ambient_color;

////////////////////////////////////////////////////////////
// Setup function

function preload_gallery() {
  // Application preload
  canvas_width = windowWidth;
  canvas_height = windowHeight;
  // Resources preload
  cartridge = loadModel('models/cartridge.obj');
  // Effects preload
  page_offset = canvas_width / 3;
  box_scale = 8.0;
  hover_amplitude = 48;
  ambient_color = color(202, 253, 253);
}
