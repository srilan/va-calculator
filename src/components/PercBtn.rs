use yew::prelude::*;

#[function_component(PercBtn)]
pub fn perc_btn() -> Html {
    let rate = 0; // Replace this with your actual rate

    html! {
      <div>
        <button class="border-2 text-black w-[100px] h-[50px] transition-all bg-transparent border-[#184997] btnHov">
          // onClick={() => {clickFunc(rate,bodyPart,id); setRatingId(++id)}}>
          <span class="bebas text-3xl text-[#184997]"> {format!("{}%", rate)} </span>
        </button>  
      </div>
    }
}