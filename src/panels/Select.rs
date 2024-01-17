use yew::prelude::*;
use crate::components::PartSelect::PartSelect;
use crate::components::PercentSelect::PercentSelect;

#[function_component(Select)]
pub fn select() -> Html {
    html! {
      <div class="w-full lg:w-2/4 flex flex-col sm:flex-row justify-evenly relative border-2 border-[#184997]">
        <div class="border-1 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center">
          // Part Select Component
          <PartSelect />
          {"Part Select"}
        </div>

        <div class="w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center text-white justify-center">
          <PercentSelect />
          // Percent Select Component
        </div>
      </div>
    }
}