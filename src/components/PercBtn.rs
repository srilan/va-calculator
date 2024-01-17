use yew::prelude::*;

#[derive(Properties, Clone, PartialEq)]
pub struct PercBtnProps {
    pub rate: i32,
}

#[function_component(PercBtn)]
pub fn perc_btn(props: &PercBtnProps) -> Html {
    html! {
      <div>
        <button class="border-2 text-black w-[100px] h-[50px] transition-all bg-transparent border-[#184997] btnHov">
          // onClick={() => {clickFunc(rate,bodyPart,id); setRatingId(++id)}}>
          <span class="bebas text-3xl text-[#184997]"> {format!("{}%", props.rate)} </span>
        </button>  
      </div>
    }
}