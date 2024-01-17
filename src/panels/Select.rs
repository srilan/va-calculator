use yew::prelude::*;
use crate::components::PartSelect::PartSelect;
use crate::components::PercentSelect::PercentSelect;

#[derive(Default)]
struct PartState {
    head: bool,
    larm: bool,
    rarm: bool,
    torso: bool,
    lleg: bool,
    rleg: bool,
}

#[function_component(Select)]
pub fn select() -> Html {

  let part = use_state(|| PartState::default());
    
  let display_part = use_state(|| String::from("Others"));

    html! {
      <div class="w-full lg:w-2/4 flex flex-col sm:flex-row justify-evenly relative border-2 border-[#184997]">
        <div class="border-1 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center">
          // Part Select Component
          <PartSelect part="part" part_display={(*display_part).clone()} />

          {"Part Select"}
        </div>

        <div class="w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center text-white justify-center">
          <PercentSelect />
          // Percent Select Component
        </div>
      </div>
    }
}