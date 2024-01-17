use yew::prelude::*;
use crate::components::TrajectorLogo::TrajectorLogo;
use crate::components::Dependencies::Dependencies;

use crate::panels::Instruction::Instruction;
use crate::panels::Select::Select;
use crate::panels::Percentage::Percentage;
use crate::panels::Rating::Rating;

#[function_component(App)]
pub fn app() -> Html {
    html! {
      <>
        <div class="w-full bg-slate-100 p-3">
          <TrajectorLogo />
        </div>
        <div class="flex flex-col w-full bg-white h-full py-12 px-10">
          <div class="flex flex-col lg:flex-row">
            <Instruction />
            <Select />
            <Percentage />
          </div>
            <Rating />
        </div>
        <div>
          <Dependencies />
        </div>
        
      </>
    }
}