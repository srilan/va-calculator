mod app;
use app::App;
pub mod components;
pub mod panels;

fn main() {
    yew::Renderer::<App>::new().render();
}