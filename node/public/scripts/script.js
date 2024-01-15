console.log('works')

let btnElements = document.getElementsByClassName('btnHov')

let ratingsPayload = {
    head: [],
    larm: [],
    rarm: [],
    torso: [],
    lleg: [],
    rleg: []
}

let ratings = []
let btnId = 1;
let ratingsArea = document.getElementById('ratingsArea')

let getBody = () => {return ratingsPayload }

let toPayload = () => {
    let payload = {
        head: [],
        torso: [],
        left_arm: [],
        right_arm: [],
        left_leg: [],
        right_leg: [],
        other: [],
    }
    console.log(payload)
    ratings.forEach((elem) => {
        let thePart = 'others';
        switch(elem.part){
            case "Head":
                thePart = "head";
                break;
            case "Tosro":
                thePart = "torso";
                break;
            case "Left Arm":
                thePart = "left_arm";
                break;
            case "Right Arm":
                thePart = "right_arm";
                break;
            case "Left Leg":
                thePart = "left_leg";
                break;
            case "Right Leg":
                thePart = "right_leg";
                break;
            default:
                thePart = "other";
        } 

        payload[thePart].push(elem.rate)
    });
    ratingsPayload = payload;
}

// let beforeReq = (id) => {
//     let newRating = document.getElementById(id)
//     console.log(newRating)
//     newRating.remove();
//     ratings = ratings.filter((val)=> {console.log(val.id,newRating.id); return val.id != newRating.id} )
//     console.log('remove')
//     console.log(ratings)
//     toPayload();
//     console.log(ratingsPayload);

// }
let hidden = document.getElementById('jsonContainer');

function escapeHtml(unsafe)
{
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
 }

 
for (let i=0; i<btnElements.length; i++){
    btnElements[i].addEventListener("click", () => {
        let percent = btnElements[i].querySelector('span').textContent.replace(/[\s*%]/g,"")
        let part = document.getElementById('bodyPart').textContent
        ratings.push({rate: percent, part: part, id: btnId})
        toPayload();

        // Create the Button
        let newRating = document.createElement('button');
        newRating.setAttribute('class','ms-3 bg-white text-sm ratings relative');
        newRating.setAttribute('id',btnId);
        //newRating.setAttribute('hx-vals','js:ratingsPayload')
        newRating.setAttribute('hx-post','/poster')
        //newRating.setAttribute('hx-on', 'htmx:afterRequest')
        newRating.setAttribute('hx-trigger', 'click')
        newRating.style.border = '1px solid #575757';
        newRating.innerHTML = `<span class='block text-xs'> <span class='inline-block py-1.5 px-4 text-sm mont text-black font-bold'> ${percent}% - ${part} </span> </span> <div class='absolute top-[-10px] right-[-10px] bg-[#FFFFFF] rounded-full p-1' style='border-color: #b52d38; border-width: 1px;'> <img src='./assets/close.svg'> </div> </button> `;
        ratingsArea.appendChild(newRating)
        console.log(ratingsPayload)

        //Attach onClick event to remove the rating
        newRating.addEventListener('htmx:beforeRequest', () => {

            newRating.remove();
            ratings = ratings.filter((val)=> {console.log(val.id,newRating.id); return val.id != newRating.id} )
            toPayload();
            console.log(JSON.stringify(ratingsPayload), typeof JSON.stringify(ratingsPayload))
            hidden.value = JSON.stringify(ratingsPayload).replace('')
            console.log("data1", ratingsPayload);
            console.log("data2", newRating);

        })

        htmx.process(newRating);
        ++btnId;

    })

}

console.log(ratings)