console.log('works')

let btnElements = document.getElementsByClassName('btnHov')

let ratingsPayload = {
    head: [],
    larm: [],
    rarm: [],
    torso: [],
    lleg: [],
    rleg: [],
    other: [],
}

let ratings = []
let btnId = 1;
let ratingsArea = document.getElementById('ratingsArea')
let ratingsField = document.getElementById('ratings')

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
    return ratingsPayload;
}

function getRatingsData() {
    return {
        data: ratings
    }
}

function removeRating(id) {
    ratings = ratings.filter((val)=> {return val.id != id} )
    document.dispatchEvent(new Event("trigger-rating"));
    document.dispatchEvent(new Event("trigger-recalculate"));
}

function addRatings (percent) {
    let part = document.getElementById('bodyPart').textContent;
    ratings.push({rate: percent, part: part, id: btnId});
    document.dispatchEvent(new Event("trigger-rating"));
    document.dispatchEvent(new Event("trigger-recalculate"));
    btnId++;
}

window.onload = () => {
    document.dispatchEvent(new Event("trigger-recalculate"));

}
