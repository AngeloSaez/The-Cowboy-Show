////////////////////////////////////////////////////////////
// Application
const canvas_width = 480;
const canvas_height = 320;
const c_grid_state = 0;
const c_focused_state = 1;
const project_count = 10;

////////////////////////////////////////////////////////////
// Resources
let cartridge;

////////////////////////////////////////////////////////////
// Effects
const row_width = 4;
const page_offset = 128;
const box_size = 16;
const box_spacing = 16;
const hover_y = 180;
const hover_amplitude = 16;
const hover_period_in_frames = 300;
let entry_width, total_width;

////////////////////////////////////////////////////////////
// Colors

let ambient_color;

////////////////////////////////////////////////////////////
// Setup function

function preload_gallery() {
  entry_width = box_size + box_spacing;
  total_width = (row_width - 1) * entry_width;
  cartridge = loadModel('models/cartridge.obj');
  ambient_color = color(202, 253, 253);

}










