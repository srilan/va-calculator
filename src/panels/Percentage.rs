use yew::prelude::*;

#[function_component(Percentage)]
pub fn percentage() -> Html {
    html! {
      <div class="lg:w-1/4 flex flex-col p-5 bg-slate-300 items-center">
        <div class="flex flex-col w-full items-center border-b-2 border-slate-500 pb-3">
          <div class="text-3xl bebas">{"Total Disablity Rating"}</div>
          // Radial Progress Bar 
          <div class="relative w-40 h-40 mb-4">
            <svg class="w-full h-full" viewBox="0 0 100 100">
              <circle
                class="text-gray-200 stroke-current"
                stroke-width="10"
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
              ></circle>

              <circle
                class="text-[#b52d38]  progress-ring__circle stroke-current"
                stroke-width="10"
                stroke-linecap="round"
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                stroke-dashoffset={
                  // "calc(400 - (" + (disabilityRating.disabilityRating / 10) * 40 + " * 65) / 100)"
                  {"0"}
                }
              ></circle>
              // Change increments by 40. (the 200 one) 
              // {disabilityLoading ? (
              //   <Loader />
              // ) : (
                <text
                  x="50"
                  y="50"
                  font-size="32"
                  text-anchor="middle"
                  alignment-baseline="middle"
                  class="bebas"
                >
                  // {{disabilityRating.calculatedRating
                  //   ? disabilityRating.disabilityRating + ""
                  //   : "0"}
                  // %}
                  {"disability rating rounded"}
                </text>
              // )}
            </svg>
          </div>
          <div class="flex flex-col items-center">
            // {disabilityRating.calculatedRating > 0 && (
              <div class="bebas text-xl">
                {"Calcualted Disablilty rating of"}
                <span class="text-2xl text-[#184997]">
                  {"{disabilityRating.calculatedRating}%"}
                </span>
              </div>
            // )}
            // {disabilityRating.bilateralFactor > 0 && (
              <div class="bebas text-lg">
                {"*Bilateral Factor of"}
                <span class="text-[#184997] text-xl">
                  {"{disabilityRating.bilateralFactor}"}
                </span>{" "}
                {"was applied."}
              </div>
            // )}
          </div>
        </div>
        <div class="flex flex-col items-center">
          <div class="bebas text-2xl mt-5">{"Total Monthly Compensation"}</div>
          <div class="text-2xl mont mt-2">{"$ {monthly.monthly}"}</div>
        </div>
      </div>
    }
}