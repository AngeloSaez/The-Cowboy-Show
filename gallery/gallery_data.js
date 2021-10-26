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
const row_width = 4;
let page_offset; // 128
let box_size; // 16
let box_spacing; // 16
let hover_y; // 180
let hover_amplitude; // 16
const hover_period_in_frames = 300;
let entry_width, total_width;

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
  box_size = canvas_height / 10;
  box_spacing = box_size;
  hover_y = canvas_height / 2;
  hover_amplitude = box_size;
  entry_width = box_size + box_spacing;
  total_width = (row_width - 1) * entry_width;
  ambient_color = color(202, 253, 253);
}
