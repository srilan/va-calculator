use yew::prelude::*;

#[function_component(Instruction)]
pub fn instruction() -> Html {
    html! {
      <div class="pt-10 pb-[60px] lg:pe-[45px] ps-10 lg:pt-5 bg-slate-200 sm:w-full lg:w-2/6 flex flex-col relative lg:border-r-2 border-[#184997] gap-10 justify-center">
        <div class="absolute bottom-0 right-2/4 translate-x-2/4 lg:translate-x-0 lg:bottom-auto lg:right-[-18px] lg:top-2/4 bebas bg-[#184997] flex px-3 text-xl pt-2 pb-1 lg:rotate-[270deg] text-white rounded-t-xl tracking-wider">
          {"STEP 1"}
        </div>
        <span class="bebas text-4xl">
          {"BEGIN BY CHOOSING THE AREAS"}
          <span class="text-[#b52d38]"> {"WHERE YOU HAVE DISABILITIES"} </span>
        </span>

        <span class="mont text-lg font-medium pe-10">
          {"Choose the specific body part affected by your disability and
          indicate the percentage of impairment from 0% to 100%."}
        </span>
      </div>  
    }
}