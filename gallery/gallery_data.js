////////////////////////////////////////////////////////////
// Application
let canvas_width; // 480
let canvas_height; // 320
const c_grid_state = 0;
const c_focused_state = 1;
const project_count = 1;

////////////////////////////////////////////////////////////
// Resources
let cartridge;
let sticker_image_default;

////////////////////////////////////////////////////////////
// Effects
const row_width = 1;
const hover_period_in_frames = 300;
const camera_z_off = -100;
let page_offset; // 128

////////////////////////////////////////////////////////////
// Style
const point_light_z = 300;
let cartridge_color;
let point_light_color;

////////////////////////////////////////////////////////////
// Setup function

function preload_gallery() {
  // Application preload
  canvas_width = windowWidth;
  canvas_height = windowHeight;
  // Resources preload
  cartridge = loadModel('models/cartridge.obj', false);
  sticker_image_default = loadImage('stickers/default_sticker.png');
  // Effects preload
  page_offset = canvas_width / 3;
  cartridge_color = color(202, 253, 253);
}
