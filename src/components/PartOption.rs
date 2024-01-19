use yew::prelude::*;
 
#[derive(Properties, Clone, PartialEq)]
pub struct PartOptionProps {
    pub text: String,
    pub pclick_event: Callback<MouseEvent>
}
   
#[function_component(PartOption)]
pub fn part_option(props: &PartOptionProps) -> Html {
    let pclick_event={
        props.pclick_event.clone()
    };
    let text = props.text.clone();
 
 
    html! {
        <div class="w-full inline-block bebas text-[#011936] text-xl hover:text-red-700 cursor-pointer"
        onclick={pclick_event}>
            {text}
        </div>
    }
}