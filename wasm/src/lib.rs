#![allow(clippy::unused_unit)]

#[macro_use]
extern crate log;

mod utils;

use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen(start)]
pub fn start() {
    utils::set_panic_hook();
    console_log::init_with_level(log::Level::max()).unwrap();

    debug!("Hello wasm");
}
