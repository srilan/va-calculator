use serde::{Deserialize, Serialize};
use yew::prelude::*;
// use gloo::console::log;
use gloo_net::http::Request;
// use gloo_utils::window;
// use web_sys::HtmlInputElement;
use yew::{
  // events::Event,
  function_component, html, use_mut_ref, use_state,
  // Callback, TargetCast,
};

// this defines the structure data
#[derive(Clone, PartialEq, Deserialize)]
struct Data {
  disabilityRating: i32,
  children_above_18: i32,
  has_spouse: bool,
  aid_and_attendance: bool,
  dependent_parents: i32,
}

//
#[derive(Deserialize, Debug)]
struct Response {
    monthly: String,
}

//start of func
#[function_component(Dependencies)]
pub fn dependencies() -> Html {
  //usestates
  let disabilityRating = use_state(|| 50);
  let children_under_18 = use_state(|| 0);
  let children_under_18_count = use_mut_ref(|| 0);
  let children_above_18 = use_state(|| 4);
  let has_spouse = use_state(|| false);
  let aid_and_attendance = use_state(|| false);
  let dependent_parents = use_state(|| 2);
  let dependency = use_state(|| vec![]);

  {
    //passing the usestates to data structure
    let data = Data {
      disabilityRating: *disabilityRating,
      children_under_18: *children_under_18,
      children_above_18: *children_above_18,
      has_spouse: *has_spouse,
      aid_and_attendance: *aid_and_attendance,
      dependent_parents: *dependent_parents,
    };

    #[derive(Clone, PartialEq, Deserialize, Serialize)]
    struct Data {
      disabilityRating: i32,
      children_under_18: i32,
      children_above_18: i32,
      has_spouse: bool,
      aid_and_attendance: bool,
      dependent_parents: i32,
    }

    //putting the use_states in variable "data" then posting it to server to return {monthly}
    let dependency = dependency.clone();
    let data = data.clone();
    use_effect_with((), move |_| {
      let dependency = dependency.clone();
      let data = data.clone();
      wasm_bindgen_futures::spawn_local(async move {
        let fetched_dependencies: Response = Request::post("https://va-calc-be.onrender.com/calculator/dependency")
        .json(&data)
        .expect("INTERNAL ERROR ")
        .send()
        .await
        .unwrap()
        .json()
        .await
        .unwrap();
        dependency.set(vec![fetched_dependencies]);
      })
    })
    }

    //IMPORTANT vvvvvv
    // needs a function that will get the value whatever option user 
    // chooses at lines 157 - 172 to update use_state "children_under_18" 

    // let u18click = {
    //   let children_under_18 = *children_under_18.clone();
    //   Callback::from(move |e: Event| {
    //     let input: HtmlInputElement = e.target_unchecked_into();
    //     children_under_18.set(input.value());
    //   })
    // };
  
  //to output the monthly income
    let dep = dependency.iter().map(|dependency| html! {
      <p key={dependency.monthly.clone()}>{format!("{}", dependency.monthly)}</p>
    }).collect::<Html>();

    //frontend
    html!{
      <div class="px-6 pt-5 mt-5">     
        <div class="relative bg-white border-t-4 border-[#184997] px-6 pt-5">
          <div class="absolute right-2/4 translate-x-2/4 lg:translate-x-0 top-[-40px] bebas bg-[#184997] flex px-3 text-xl pt-2 pb-1 text-white rounded-t-xl tracking-wider">
            {"STEP 2"}
          </div>
          <div class="flex flex-col md:flex-row justify-center w-full ">
            <div class="flex flex-col w-full pe-6 mt-5">
              <div class="flex w-full justify-center items-center bebas text-4xl lg:text-5xl">
                <h2 class="mx-auto" style="color: #000000;">
                  {"TO COMPLETE THE ASSESSMENT,"}
                  <span style="color: #184997;">
                    {" "}
                    {"FILL OUT THE FORM TO PROCEED WITH GENERATING YOUR QUOTE."}
                  </span>
                </h2>
              </div>
              <div
                class="mont mb-5 text-sm md:text-md lg:text-xl"
                style="color: #000000;"
              >
                {"Are you sure your VA rating is fair? Let us uncover your potential
                rating eligibility."}
              </div>
              <div class="bebas text-3xl my-2 lg:my-5">
                <h2 class="mx-auto text-3xl lg:text-4xl" style="color: #000000;">
                  {"COMBINED DISABILITY PERCENTAGE:"}
                  <span style="color: #184997"> {"{calculatedRating}%"} </span>
                </h2>
              </div>
              <div class="bebas text-3xl my-2 lg:my-5">
                <h2 class="mx-auto text-3xl lg:text-4xl" style="color: #000000;">
                  {"CURRENT DISABILITY RATING:"}
                  <span style="color: #184997"> {"{disabilityRating}%"} </span>
                </h2>
              </div>
              <div class="bebas text-3xl my-2 lg:my-5">
                <h2 class="mx-auto text-3xl lg:text-4xl" style="color: #000000;">
                  {"MONTHLY PAYMENT AMOUNT:"}
                  <span style="color: #184997"> {"$"}{dep} </span>
                </h2>
              </div>
            </div>
  
            <div class="flex flex-col justify-between w-full ps-6 my-5">
              <div class="flex flex-row" style="border-top: 2px solid #b52d38;">
                <div class="my-2">
                  <div
                    class="flex w-full mont font-normal text-md lg:text-2xl"
                    style="color: #3363AE;"
                  >
                    {"How many dependent children do you have who are under the age
                    of 18?"}
                  </div>
                  <div class="text-black">
                    <select
                      class="border bg-gray-200 text-black px-3 py-2 mt-1 mb-1 text-sm w-30"
                    
                    >
                      <option value="0">{"None"}</option>
                      <option value="1">{"1"}</option>
                      <option value="2">{"2"}</option>
                      <option value="3">{"3"}</option>
                      <option value="4">{"4"}</option>
                      <option value="5">{"5"}</option>
                      <option value="6">{"6"}</option>
                      <option value="7">{"7"}</option>
                      <option value="8">{"8"}</option>
                      <option value="9">{"9"}</option>
                      <option value="10">{"10"}</option>
                    </select>
                  </div>
                </div>
              </div>
  
              <div class="flex flex-row" style="border-top: 2px solid #b52d38;">
                <div class="my-2">
                  <div
                    class="flex w-full mont font-normal lg:text-2xl"
                    style="color: #3363AE;"
                  >
                    {"How many dependent children do you have who are between the
                    ages of 18 and 24?"}
                  </div>
                  <div class="text-black">
                    <select
                      class="border bg-gray-200 text-black px-3 py-2 mt-1 mb-1 text-sm w-30"
                      // onInput={(e) => above18Clicked(e.target.value)}
                      // value={childrenAbove18}
                    >
                      <option value="0">{"None"}</option>
                      <option value="1">{"1"}</option>
                      <option value="2">{"2"}</option>
                      <option value="3">{"3"}</option>
                      <option value="4">{"4"}</option>
                      <option value="5">{"5"}</option>
                      <option value="6">{"6"}</option>
                      <option value="7">{"7"}</option>
                      <option value="8">{"8"}</option>
                      <option value="9">{"9"}</option>
                      <option value="10">{"10"}</option>
                    </select>
                  </div>
                </div>
              </div>
  
              <div class="flex flex-row" style="border-top: 2px solid #b52d38;">
                <div class="my-2">
                  <div
                    class="flex w-full mont font-normal lg:text-2xl"
                    style="color: #3363AE;"
                  >
                    {"What is your marital status?"}
                  </div>
                  <div class="text-black">
                    <div class="text-black">
                      <select
                        class="border bg-gray-200 text-black px-3 py-2 mt-1 mb-1 text-sm w-30"
                        // onInput={(e) => MaritalStatusClicked(e.target.value)}S
                        // value={hasSpouse ? "1" : "0"}
                      >
                        <option value="0">{"Single"}</option>
                        <option value="1">{"Married"}</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
  
              // {hasSpouse && (
                <div>
                  <div
                    class="flex flex-row"
                    style="border-top: 2px solid #b52d38;"
                  >
                    <div class="my-2">
                      <div
                        class="flex w-full mont font-normal lg:text-2xl"
                        style="color: #3363AE;"
                      >
                        {"Do you or your spouse receive Aid and Attendance(A/A)?"}
                      </div>
                      <div class="text-black">
                        <select
                          class="border bg-gray-200 text-black px-3 py-2 mt-1 mb-1 text-sm w-30"
                          // onInput={(e) => aidAndAttendanceClicked(e.target.value)}
                          // value={aidAndAttendance ? "1" : "0"}
                        >
                          <option value="0">{"No"}</option>
                          <option value="1">{"Yes"}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              // )}
  
              <div
                class="flex flex-row"
                style="border-top: 2px solid #b52d38; border-bottom: 2px solid #b52d38;"
              >
                <div class="my-2">
                  <div
                    class="flex w-full mont font-normal lg:text-2xl"
                    style="color: #3363AE;"
                  >
                    {"How many dependent parents do you have?"}
                  </div>
                  <div class="text-black">
                    <select
                      class="border bg-gray-200 text-black px-3 py-2 mt-1 mb-1 text-sm w-30"
                      // onInput={(e) => dependentParentsClicked(e.target.value)}
                      // value={dependentParents}
                    >
                      <option value="0">{"None"}</option>
                      <option value="1">{"1"}</option>
                      <option value="2">{"2"}</option>
                    </select>
                  </div>
                </div>
              </div>
  
              <div
                id="default-modal"
                tabindex="-1"
                aria-hidden="true"
                class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
              >
              </div>
            </div>
          </div>
        </div>
      </div>
    }
}