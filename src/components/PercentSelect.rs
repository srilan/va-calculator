use yew::prelude::*;
use crate::components::PercBtn::PercBtn;


#[function_component(PercentSelect)]
pub fn percent_select() -> Html {
    html! {
      <div class="p-3 flex flex-col gap-4">
        <div class="flex gap-6">
            <PercBtn
              rate=10
              // bodyPart={bodyPart} rate={10} clickFunc={btnRatingClick} id={id} setRatingId={setRatingId} 
            />
            <PercBtn 
              rate=20
              // bodyPart={bodyPart} rate={20} clickFunc={btnRatingClick} id={id} setRatingId={setRatingId} 
            />
        </div>

        <div class="flex gap-6">
            <PercBtn
              rate=30
              // rate={30} bodyPart={bodyPart} clickFunc={btnRatingClick} id={id} setRatingId={setRatingId} 
            />
            <PercBtn 
              rate=40
              // rate={40} bodyPart={bodyPart} clickFunc={btnRatingClick} id={id} setRatingId={setRatingId} 
            />
        </div>

        <div class="flex gap-6">
            <PercBtn 
              rate=50
              // rate={50} bodyPart={bodyPart} clickFunc={btnRatingClick} id={id} setRatingId={setRatingId} 
            />
            <PercBtn
              rate=60
              // rate={60} bodyPart={bodyPart} clickFunc={btnRatingClick} id={id} setRatingId={setRatingId} 
            />
        </div>

        <div class="flex gap-6">
            <PercBtn 
              rate=70
              // rate={70} bodyPart={bodyPart} clickFunc={btnRatingClick} id={id} setRatingId={setRatingId} 
            />
            <PercBtn  
              rate=80
              // rate={80} bodyPart={bodyPart} clickFunc={btnRatingClick} id={id} setRatingId={setRatingId} 
            />
        </div>

        <div class="flex gap-6">
            <PercBtn  
              rate=90
              // rate={90} bodyPart={bodyPart} clickFunc={btnRatingClick} id={id} setRatingId={setRatingId} 
            />
            <PercBtn
              rate=100
              // rate={100} bodyPart={bodyPart} clickFunc={btnRatingClick} id={id} setRatingId={setRatingId}
             />
        </div>
      </div>
    }
}