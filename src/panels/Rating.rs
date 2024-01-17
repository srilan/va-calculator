use yew::prelude::*;
use crate::components::RatingsBtn::RatingsBtn;

#[function_component(Rating)]
pub fn rating() -> Html {
    html! {
      <div class="flex w-full justify-center mt-6">
        <div
          class="w-full border-[#184997] bg-white lg:ps-20 lg:pt-5 pt-16 pb-2 pe-3 relative text-black"
          id="percContainer"
          // style={{ borderWidth: "2px" }}
        >
          <div class="top-0 left-0 w-full h-[40px] lg:h-full bg-[#184997] align-middle p-2 lg:w-[70px] text-center text-sm font-semibold text-white flex justify-center items-center mont absolute">
            {"Ratings"}
          </div>

          <div class="">
            // {ratings.map((item) => (
              <RatingsBtn 
                // elem={item} removeMe={removeRating} 
              />
            // ))}

            // {ratings.length == 0 && (
              <div class="opacity-0 pointer-events-none">
                <RatingsBtn
                  // elem={{ part: "", rate: 0, id: 0 }}
                  // removeMe={removeRating}
                />
              </div>
            // )}
          </div>
        </div>
      </div>  
    }
}